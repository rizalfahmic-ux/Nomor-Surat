import Script from 'next/script';

export default function Page() {
  return (
    <>
      <main className="shell">
        <header className="page-header">
          <img className="bps-logo" src="/bps-logo.jpg" alt="Logo Badan Pusat Statistik" />
          <div className="page-header-copy">
            <h1>Pengelolaan Nomor Surat</h1>
            <p>BPS Kabupaten Lombok Tengah</p>
          </div>
        </header>

        <nav aria-label="Menu Nomor Surat">
          <button type="button" id="regular" aria-pressed="true"><span className="nav-index">01</span>Ambil Nomor</button>
          <button type="button" id="insert" aria-pressed="false"><span className="nav-index">02</span>Sisipkan Nomor</button>
          <button type="button" id="catalog" aria-pressed="false"><span className="nav-index">03</span>Klasifikasi Arsip</button>
        </nav>

        <section id="catalog-panel" className="catalog-panel" hidden>
          <div className="section-heading">
            <span className="eyebrow">REFERENSI ARSIP</span>
            <h2>Klasifikasi Arsip BPS</h2>
            <p>Telusuri kode dan uraian klasifikasi untuk menemukan referensi yang sesuai.</p>
          </div>
          <p><a className="text-link" href="klasifikasi-bps.pdf" target="_blank" rel="noopener">Buka PDF klasifikasi <span aria-hidden="true">↗</span></a></p>
          <label htmlFor="catalog-search">Cari kode atau uraian</label>
          <input id="catalog-search" type="search" placeholder="Contoh: KP.650 atau surat tugas" />
          <p id="catalog-count" role="status"></p>
          <ul id="catalog-items"></ul>
        </section>

        <div id="number-panel">
          <form id="form">
            <div className="form-grid">
              <div className="card">
                <div className="card-heading">
                  <span className="card-icon" aria-hidden="true">01</span>
                  <div><h2>Detail surat</h2><p>Informasi dasar untuk surat Anda.</p></div>
                </div>
                <div id="insert-note" className="notice" hidden>
                  <h2>Sisipkan Nomor</h2>
                  <p>Pilih tanggal dan seri yang sudah memiliki nomor. Sisipan mengikuti nomor induk yang dipilih.</p>
                </div>
                <div className="row">
                  <label>Jenis surat
                    <select id="series">
                      <option value="B">B — Surat Biasa / Lainnya</option>
                      <option value="SK">SK — Surat Keputusan</option>
                      <option value="R">R — Surat Rahasia</option>
                      <option value="S">S — Surat Segera</option>
                    </select>
                  </label>
                  <label>Tanggal surat
                    <input type="date" id="date" required />
                  </label>
                </div>
                <label id="anchor-field" hidden>Nomor induk<select id="anchor"></select></label>
                <label id="sk-field" hidden>Tipe SK
                  <select id="sk"><option>Umum</option><option>Personel</option></select>
                </label>
                <label id="subject-label" htmlFor="subject">Perihal surat</label>
                <input id="subject" maxLength="240" required placeholder="Contoh: Undangan pelatihan petugas Sensus Ekonomi" />
                <label htmlFor="context">Rincian untuk klasifikasi <span className="optional">(opsional)</span></label>
                <input id="context" maxLength="400" placeholder="Contoh: dasar penugasan pegawai atau laporan hasil kegiatan" />
                <label htmlFor="purpose">Fungsi dokumen</label>
                <select id="purpose">
                  <option value="">Sarankan dari uraian surat (semua kelompok)</option>
                  <option value="assignment">Menugaskan pegawai (Surat Tugas atau Surat Perintah Dinas)</option>
                  <option value="SS">Menyiapkan, melaksanakan, atau mendokumentasikan kegiatan sensus</option>
                  <option value="VS">Menyiapkan, melaksanakan, atau mendokumentasikan kegiatan survei</option>
                </select>
                <small className="helper">Pilih fungsi jika sudah diketahui, atau tambahkan kegiatan dan tujuan surat agar saran lebih tepat.</small>
                <div className="recommend-wrap"><button type="button" className="secondary" id="recommend">Rekomendasikan Kode <span aria-hidden="true">→</span></button></div>
              </div>

              <div className="card">
                <div className="card-heading">
                  <span className="card-icon card-icon-alt" aria-hidden="true">02</span>
                  <div><h2>Kode klasifikasi arsip</h2><p>Temukan kode yang paling relevan.</p></div>
                </div>
                <div className="favorites-panel" aria-labelledby="favorites-title">
                  <div className="favorites-heading">
                    <h3 id="favorites-title">Kode favorit</h3>
                    <span>diurutkan dari riwayat</span>
                  </div>
                  <p id="favorites-empty" className="favorites-empty">Kode yang pernah dipakai akan muncul di sini.</p>
                  <ul id="favorite-codes" className="favorite-codes" aria-label="Kode klasifikasi yang sering digunakan"></ul>
                </div>
                <label htmlFor="search">Cari kode atau kata kunci</label>
                <input type="search" id="search" placeholder="Contoh: SS.220 atau pelatihan petugas" />
                <p id="choice-status" role="status"></p>
                <ul id="matches"></ul>
                <p id="selected">Belum ada kode yang dipilih.</p>
                <small className="helper">Sumber: Kode Klasifikasi Arsip di Lingkungan BPS</small>
              </div>
            </div>

            <div className="actions">
              <fieldset>
                <legend>Jumlah nomor</legend>
                <label className="inline"><input type="radio" name="mode" defaultValue="one" defaultChecked /> Satu nomor</label>
                <label className="inline"><input type="radio" name="mode" defaultValue="batch" /> Beberapa sekaligus</label>
                <div id="batch" className="batch-field" hidden>
                  <label htmlFor="quantity">Jumlah nomor yang diambil</label>
                  <input type="number" id="quantity" min="2" max="1000" step="1" defaultValue="2" disabled />
                  <small className="helper">Contoh: pilih 30 jika 30 petugas masing-masing menerima SK. Pilih satu jika satu SK memuat seluruh petugas.</small>
                </div>
              </fieldset>
              <div className="action-submit">
                <div><strong>Siap membuat nomor?</strong><small>Pastikan detail surat sudah sesuai.</small></div>
                <button id="issue">Ambil Nomor <span aria-hidden="true">→</span></button>
              </div>
              <p id="form-status" role="status"></p>
            </div>
          </form>

          <section id="result" className="result-panel" hidden>
            <div className="section-heading">
              <span className="eyebrow">SELESAI DIBUAT</span>
              <h2><strong id="result-title"></strong></h2>
            </div>
            <p id="detail"></p>
            <ol id="numbers"></ol>
            <button type="button" id="copy">Salin Semua Nomor</button>
            <p id="copy-status" role="status"></p>
          </section>

          <section id="history" aria-labelledby="history-title">
            <div className="history-heading">
              <div className="section-heading">
                <span className="eyebrow">ARSIP AKTIVITAS</span>
                <h2 id="history-title">Riwayat nomor surat</h2>
                <p>Riwayat tersimpan di register bersama.</p>
              </div>
              <div className="history-controls">
                <label htmlFor="history-series">Jenis surat
                  <select id="history-series">
                    <option value="B">B — Surat Biasa / Lainnya</option>
                    <option value="SK">SK — Surat Keputusan</option>
                    <option value="R">R — Surat Rahasia</option>
                    <option value="S">S — Surat Segera</option>
                  </select>
                </label>
                <label htmlFor="history-page-size">Baris per halaman
                  <select id="history-page-size">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </label>
              </div>
            </div>
            <p id="history-status" role="status"></p>
            <ol id="history-rows"></ol>
            <div id="history-pagination" className="history-pagination" hidden>
              <span id="history-page-info"></span>
              <div>
                <button type="button" id="history-prev" className="history-page-button">Sebelumnya</button>
                <button type="button" id="history-next" className="history-page-button">Selanjutnya</button>
              </div>
            </div>
          </section>
        </div>

      </main>
      <Script src="/nomor-surat.js" strategy="afterInteractive" />
    </>
  );
}
