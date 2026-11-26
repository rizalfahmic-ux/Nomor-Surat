# Pengelolaan Nomor Surat

Aplikasi Next.js App Router dengan ekspor statis untuk BPS Kabupaten Lombok Tengah. Katalog klasifikasi dan PDF BPS disertakan di folder `public`. Tahun pada tanggal dan nomor mengikuti tahun kalender saat aplikasi dibuka.

## Menjalankan di Windows atau macOS

1. Pasang Node.js 22 LTS atau versi LTS yang lebih baru.
2. Ekstrak ZIP dan buka folder proyek di VS Code.
3. Buka terminal di folder yang memuat `package.json` dan jalankan:

   ```bash
   npm install
   npm run dev
   ```

4. Buka http://localhost:3000.

## Deploy

Untuk Vercel, unggah isi folder ini ke repositori Git dan impor sebagai proyek Next.js. Gunakan pengaturan bawaan. Untuk hosting statis lain, jalankan `npm run build` lalu unggah isi folder `out`.

## Penggunaan

- Pilih seri B, SK, R, atau S dan isi perihal. Gunakan rekomendasi atau cari kode langsung. Tab Klasifikasi Arsip juga menyediakan tautan ke PDF sumber.
- Ambil satu atau beberapa nomor. Untuk sisipan, pilih tanggal, seri, dan nomor induk yang sudah tersimpan. Urutan sisipan menggunakan akhiran seperti `0010.A`, `0010.B`, dan seterusnya.
- Riwayat di bawah formulir menampilkan nomor menurut jenis surat, diurutkan dari nomor urut terbesar.

## Penyimpanan lokal

Riwayat dan penghitung nomor tersimpan di `localStorage` browser untuk alamat situs itu. Browser, perangkat, atau alamat situs yang berbeda memiliki register sendiri dan dapat menerbitkan nomor yang sama. Menghapus data situs juga menghapus register lokal. Penomoran resmi yang digunakan bersama membutuhkan satu register pusat dengan mekanisme penguncian pemberian nomor.

Font diambil dari Google Fonts bila tersedia. Jika font gagal dimuat, browser memakai font sistem.
