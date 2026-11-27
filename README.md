# Pengelolaan Nomor Surat

Aplikasi Next.js App Router untuk BPS Kabupaten Lombok Tengah. Katalog klasifikasi dan PDF BPS disertakan di folder `public`. Tahun pada tanggal dan nomor mengikuti tahun kalender saat aplikasi dibuka.

## Menjalankan di Windows atau macOS

1. Pasang Node.js 22 LTS atau versi LTS yang lebih baru.
2. Ekstrak ZIP dan buka folder proyek di VS Code.
3. Buka terminal di folder yang memuat `package.json` dan jalankan:

   ```bash
   npm install
   npm run dev
   ```

4. Buka http://localhost:3000.

## Database Neon

Register surat disimpan bersama di PostgreSQL Neon. Buat database di Neon, salin connection string, lalu simpan sebagai `DATABASE_URL` di file `.env.local` untuk pengembangan lokal. Jangan commit file `.env.local` atau membagikan connection string.

Di Vercel, tambahkan `DATABASE_URL` pada Environment Variables untuk environment yang digunakan, lalu deploy ulang. API membuat tabel dan fungsi register secara otomatis pada permintaan pertama. Riwayat yang sebelumnya tersimpan di browser tidak otomatis diimpor.

API register saat ini tidak memerlukan login. Siapa pun yang memiliki URL dapat membaca riwayat dan membuat nomor; batasi akses aplikasi sebelum digunakan sebagai register resmi.

## Deploy

Untuk Vercel, hubungkan repositori ini dan gunakan pengaturan Next.js bawaan. Aplikasi memerlukan runtime server untuk API database; hosting statis dari folder `out` tidak didukung.

## Penggunaan

- Pilih seri B, SK, R, atau S dan isi perihal. Gunakan rekomendasi atau cari kode langsung. Tab Klasifikasi Arsip juga menyediakan tautan ke PDF sumber.
- Ambil satu atau beberapa nomor. Untuk sisipan, pilih tanggal, seri, dan nomor induk yang sudah tersimpan. Urutan sisipan menggunakan akhiran seperti `0010.A`, `0010.B`, dan seterusnya.
- Riwayat di bawah formulir menampilkan nomor menurut jenis surat, diurutkan dari nomor urut terbesar.

## Penyimpanan register

Riwayat dan penghitung nomor disimpan di database Neon dan dibagikan oleh semua pengguna aplikasi. Pengalokasian nomor dilakukan secara atomik di database untuk mencegah duplikasi akibat permintaan bersamaan.

Font diambil dari Google Fonts bila tersedia. Jika font gagal dimuat, browser memakai font sistem.
