import { neon } from '@neondatabase/serverless';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const seriesValues = new Set(['B', 'SK', 'R', 'S']);
const codePattern = /^[A-Z]{2} \d{3}$/;
const validDatePattern = /^\d{4}-\d{2}-\d{2}$/;
const pageSizes = new Set([10, 25, 50, 100]);

let schemaReady;

function getDatabase() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error('DATABASE_URL is not configured.');
  return neon(connectionString);
}

async function ensureSchema(sql) {
  if (!schemaReady) {
    schemaReady = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS nomor_counters (
          issue_year INTEGER NOT NULL,
          series TEXT NOT NULL CHECK (series IN ('B', 'SK', 'R', 'S')),
          last_number INTEGER NOT NULL CHECK (last_number >= 0),
          PRIMARY KEY (issue_year, series)
        )
      `;
      await sql`
        CREATE TABLE IF NOT EXISTS nomor_suffix_counters (
          issue_year INTEGER NOT NULL,
          series TEXT NOT NULL CHECK (series IN ('B', 'SK', 'R', 'S')),
          base_number INTEGER NOT NULL,
          last_suffix INTEGER NOT NULL CHECK (last_suffix >= 0),
          PRIMARY KEY (issue_year, series, base_number)
        )
      `;
      await sql`
        CREATE TABLE IF NOT EXISTS issued_letters (
          id BIGSERIAL PRIMARY KEY,
          issue_year INTEGER NOT NULL,
          series TEXT NOT NULL CHECK (series IN ('B', 'SK', 'R', 'S')),
          issue_date DATE NOT NULL,
          sequence_number INTEGER NOT NULL,
          suffix_order INTEGER NOT NULL DEFAULT 0 CHECK (suffix_order >= 0),
          number TEXT NOT NULL UNIQUE,
          subject VARCHAR(240) NOT NULL,
          classification_code VARCHAR(12) NOT NULL,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          UNIQUE (issue_year, series, sequence_number, suffix_order)
        )
      `;
      await sql`
        CREATE INDEX IF NOT EXISTS issued_letters_series_history_idx
        ON issued_letters (issue_year, series, sequence_number DESC, suffix_order DESC)
      `;
      await sql`
        CREATE INDEX IF NOT EXISTS issued_letters_anchor_idx
        ON issued_letters (issue_year, series, issue_date, sequence_number)
        WHERE suffix_order = 0
      `;
      await sql`
        CREATE OR REPLACE FUNCTION nomor_surat_suffix(suffix_index INTEGER)
        RETURNS TEXT
        LANGUAGE plpgsql
        IMMUTABLE
        STRICT
        AS $function$
        DECLARE
          remaining_value INTEGER := suffix_index;
          result TEXT := '';
        BEGIN
          WHILE remaining_value > 0 LOOP
            remaining_value := remaining_value - 1;
            result := chr(65 + (remaining_value % 26)) || result;
            remaining_value := remaining_value / 26;
          END LOOP;
          RETURN result;
        END;
        $function$
      `;
    })();
  }

  try {
    await schemaReady;
  } catch (error) {
    schemaReady = undefined;
    throw error;
  }
}

function validDate(value) {
  if (typeof value !== 'string' || !validDatePattern.test(value)) return false;
  const parsed = new Date(value + 'T00:00:00Z');
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

function formatCode(code) {
  return code.replace(/^([A-Z]+) (?=\d)/, '$1.');
}

function jsonError(message, status) {
  return Response.json({ error: message }, { status });
}

export async function GET(request) {
  const url = new URL(request.url);
  const series = url.searchParams.get('series') || 'B';
  const year = Number(url.searchParams.get('year') || new Date().getFullYear());
  const page = Number(url.searchParams.get('page') || 1);
  const requestedPageSize = Number(url.searchParams.get('pageSize') || 10);
  const pageSize = pageSizes.has(requestedPageSize) ? requestedPageSize : 10;
  const date = url.searchParams.get('date');

  if (!seriesValues.has(series)) return jsonError('Jenis surat tidak valid.', 400);
  if (!Number.isInteger(year) || year < 2000 || year > 9999) return jsonError('Tahun tidak valid.', 400);
  if (!Number.isInteger(page) || page < 1) return jsonError('Halaman tidak valid.', 400);
  if (date && (!validDate(date) || Number(date.slice(0, 4)) !== year)) {
    return jsonError('Tanggal tidak valid.', 400);
  }

  try {
    const sql = getDatabase();
    await ensureSchema(sql);
    const offset = (page - 1) * pageSize;
    const [records, countRows, favorites, anchors] = await Promise.all([
      sql`
        SELECT series, TO_CHAR(issue_date, 'YYYY-MM-DD') AS date,
          sequence_number AS base, suffix_order AS suffix, number, subject,
          classification_code AS code
        FROM issued_letters
        WHERE issue_year = ${year} AND series = ${series}
        ORDER BY sequence_number DESC, suffix_order DESC
        LIMIT ${pageSize} OFFSET ${offset}
      `,
      sql`
        SELECT COUNT(*)::INTEGER AS total
        FROM issued_letters
        WHERE issue_year = ${year} AND series = ${series}
      `,
      sql`
        SELECT classification_code AS code, COUNT(*)::INTEGER AS count
        FROM issued_letters
        WHERE issue_year = ${year}
        GROUP BY classification_code
        ORDER BY count DESC, code ASC
        LIMIT 5
      `,
      date
        ? sql`
            SELECT series, TO_CHAR(issue_date, 'YYYY-MM-DD') AS date,
              sequence_number AS base, suffix_order AS suffix, number, subject,
              classification_code AS code
            FROM issued_letters
            WHERE issue_year = ${year} AND series = ${series}
              AND issue_date = ${date}::date AND suffix_order = 0
            ORDER BY sequence_number DESC
          `
        : Promise.resolve([])
    ]);

    return Response.json({
      records,
      total: countRows[0].total,
      favorites,
      anchors
    });
  } catch (error) {
    console.error('Unable to load the shared letter register.', error);
    return jsonError(
      process.env.DATABASE_URL ? 'Register database tidak dapat dibaca.' : 'DATABASE_URL belum dikonfigurasi.',
      process.env.DATABASE_URL ? 500 : 503
    );
  }
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('Format permintaan tidak valid.', 400);
  }

  const { series, date, subject, code, quantity = 1, anchorBase } = body || {};
  const inserting = body?.inserting === true || anchorBase !== undefined && anchorBase !== null;
  const requestedAnchorBase = anchorBase === undefined || anchorBase === null ? null : anchorBase;
  const year = typeof date === 'string' ? Number(date.slice(0, 4)) : NaN;

  if (!seriesValues.has(series)) return jsonError('Jenis surat tidak valid.', 400);
  if (!validDate(date) || year !== new Date().getFullYear()) {
    return jsonError('Tanggal harus berada pada tahun berjalan.', 400);
  }
  if (typeof subject !== 'string' || !subject.trim() || subject.length > 240) {
    return jsonError('Isi perihal surat dengan maksimal 240 karakter.', 400);
  }
  if (typeof code !== 'string' || !codePattern.test(code)) {
    return jsonError('Kode klasifikasi tidak valid.', 400);
  }
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 1000) {
    return jsonError('Jumlah nomor harus antara 1 dan 1000.', 400);
  }
  if (anchorBase !== undefined && anchorBase !== null && (!Number.isInteger(anchorBase) || anchorBase < 1)) {
    return jsonError('Nomor induk tidak valid.', 400);
  }
  try {
    const sql = getDatabase();
    await ensureSchema(sql);
    const formattedCode = formatCode(code);
    let records;

    if (!inserting) {
      records = await sql`
        WITH counter AS (
          INSERT INTO nomor_counters (issue_year, series, last_number)
          VALUES (${year}, ${series}, ${quantity})
          ON CONFLICT (issue_year, series)
          DO UPDATE SET last_number = nomor_counters.last_number + EXCLUDED.last_number
          RETURNING last_number - ${quantity} + 1 AS first_number
        ),
        generated AS (
          SELECT first_number + seq.index AS sequence_number
          FROM counter
          CROSS JOIN generate_series(0, ${quantity - 1}) AS seq(index)
        )
        INSERT INTO issued_letters (
          issue_year, series, issue_date, sequence_number, suffix_order,
          number, subject, classification_code
        )
        SELECT ${year}, ${series}, ${date}::date, sequence_number, 0,
          ${series} || '-' || LPAD(sequence_number::text, 4, '0')
            || '/52020/' || ${formattedCode} || '/' || ${year},
          ${subject.trim()}, ${code}
        FROM generated
        RETURNING series, TO_CHAR(issue_date, 'YYYY-MM-DD') AS date,
          sequence_number AS base, suffix_order AS suffix, number, subject,
          classification_code AS code
      `;
    } else {
      records = await sql`
        WITH anchor AS (
          SELECT issue_year, series, sequence_number
          FROM issued_letters
          WHERE issue_year = ${year} AND series = ${series}
            AND suffix_order = 0
            AND (
              (${requestedAnchorBase}::integer IS NULL AND issue_date <= ${date}::date)
              OR (
                ${requestedAnchorBase}::integer IS NOT NULL
                AND issue_date = ${date}::date
                AND sequence_number = ${requestedAnchorBase}
              )
            )
          ORDER BY issue_date DESC, sequence_number DESC
          LIMIT 1
        ),
        counter AS (
          INSERT INTO nomor_suffix_counters (issue_year, series, base_number, last_suffix)
          SELECT issue_year, series, sequence_number, ${quantity}
          FROM anchor
          ON CONFLICT (issue_year, series, base_number)
          DO UPDATE SET last_suffix = nomor_suffix_counters.last_suffix + EXCLUDED.last_suffix
          RETURNING issue_year, series, base_number,
            last_suffix - ${quantity} + 1 AS first_suffix
        ),
        generated AS (
          SELECT counter.issue_year, counter.series, ${date}::date AS issue_date,
            counter.base_number, counter.first_suffix + seq.index AS suffix_order
          FROM counter
          JOIN anchor ON anchor.issue_year = counter.issue_year
            AND anchor.series = counter.series
            AND anchor.sequence_number = counter.base_number
          CROSS JOIN generate_series(0, ${quantity - 1}) AS seq(index)
        )
        INSERT INTO issued_letters (
          issue_year, series, issue_date, sequence_number, suffix_order,
          number, subject, classification_code
        )
        SELECT issue_year, series, issue_date, base_number, suffix_order,
          series || '-' || LPAD(base_number::text, 4, '0') || '.'
            || nomor_surat_suffix(suffix_order)
            || '/52020/' || ${formattedCode} || '/' || issue_year,
          ${subject.trim()}, ${code}
        FROM generated
        RETURNING series, TO_CHAR(issue_date, 'YYYY-MM-DD') AS date,
          sequence_number AS base, suffix_order AS suffix, number, subject,
          classification_code AS code
      `;
    }

    if (records.length !== quantity) {
      return jsonError(
        'Belum ada nomor sebelumnya untuk jenis surat ini. Buat nomor utama terlebih dahulu.',
        409
      );
    }
    return Response.json({ records }, { status: 201 });
  } catch (error) {
    console.error('Unable to create numbers in the shared letter register.', error);
    return jsonError(
      process.env.DATABASE_URL ? 'Nomor tidak dapat dibuat karena register database bermasalah.' : 'DATABASE_URL belum dikonfigurasi.',
      process.env.DATABASE_URL ? 500 : 503
    );
  }
}
