const katalog = [["PS 000", "Pengkajian dan Pengusulan Kebijakan", "PERUMUSAN KEBIJAKAN DI BIDANG STATISTIK MELIPUTI: METODOLOGI DAN INFORMASI", 1], ["PS 100", "Penyiapan Kebijakan", "PERUMUSAN KEBIJAKAN DI BIDANG STATISTIK MELIPUTI: METODOLOGI DAN INFORMASI", 1], ["PS 200", "Masukan dan Dukungan dalam Penyusunan Kebijakan", "PERUMUSAN KEBIJAKAN DI BIDANG STATISTIK MELIPUTI: METODOLOGI DAN INFORMASI", 1], ["PS 300", "Pengembangan desain dan standarisasi", "PERUMUSAN KEBIJAKAN DI BIDANG STATISTIK MELIPUTI: METODOLOGI DAN INFORMASI", 1], ["PS 400", "Penetapan Norma, Standar, Prosedur dan Kriteria (NSPK)", "PERUMUSAN KEBIJAKAN DI BIDANG STATISTIK MELIPUTI: METODOLOGI DAN INFORMASI", 1], ["SS 000", "PERENCANAAN", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 010", "Master Plan dan Network Planing", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 020", "Perumusan dan Penyusunan Bahan", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 021", "Penyiapan bahan penyusunan rancangan sensus", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 022", "Penyusunan metode pencacahan sensus", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 023", "Penentuan volume sensus", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 024", "Penyusunan desain penarikan sampel", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 025", "Penyusunan Kerangka Sampel", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 030", "Studi Pendahuluan (Desk Study )", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 100", "PERSIAPAN SENSUS", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 110", "Rancangan Organisasi", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 120", "Penyusunan Kuesioner", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 130", "Penyusunan Konsep dan Definisi", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 140", "Penyusunan Metodologi (organisasi, lapangan, ukuran statistik)", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 150", "Penyusunan Buku Pedoman (pencacahan, pengawasan, pengolahan)", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 160", "Penyusunan Peta Wilayah Kerja dan Muatan Peta Wilayah", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 170", "Penyusunan Pedoman Sosialisasi", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 180", "Penyusunan Program Pengolahan (rule validasi pemeriksaan entri tabulasi)", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 190", "Koordinasi Intern/Extern", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 200", "PELATIHAN/UJICOBA", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 210", "Pelatihan Instruktur", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 220", "Pelatian Petugas", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 230", "Pelatihan Petugas Pengolahan", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 240", "Perancangan Tabel", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 250", "Pelaksanaan Ujicoba Kuesioner Sensus (meliputi reliabilitas kuesioner dan sistem pengolahan)", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 260", "Pelaksanaan Ujicoba Kuesioner Metodologi Sensus (meliputi ujicoba pelaksanaan pencacahan, organisasi dan jumlah sampel)", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 300", "PELAKSANAAN LAPANGAN", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 310", "Listing", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 320", "Pemilihan Sampel", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 330", "Pengumpulan Data", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 340", "Pemeriksaan Data", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 350", "Pengawasan Lapangan", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 360", "Monitoring Kualitas", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 400", "PENGOLAHAN", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 410", "Pengelolaan Dokumen (penerimaan/pengiriman, pengelompokkan/batching)", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 420", "Pemeriksaan Dokumen dan Pengkodean (editing/coding )", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 430", "Perekaman Data (entry/scanner )", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 440", "Tabulasi Data", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 1], ["SS 450", "Pemeriksaan Tabulasi", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 2], ["SS 460", "Laporan Konsistensi Tabulasi", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 2], ["SS 500", "ANALISIS DAN PENYAJIAN HASIL SENSUS", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 2], ["SS 510", "Pembahasan Angka Hasil Pengolahan", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 2], ["SS 520", "Penyusunan Angka Sementara", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 2], ["SS 530", "Penyusunan Angka Tetap", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 2], ["SS 540", "Penyusunan/Pembahasan Draft Publikasi", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 2], ["SS 550", "Analisis Data Sensus", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 2], ["SS 560", "Penyusunan Diseminasi Hasil Sensus", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 2], ["SS 600", "DISEMINASI HASIL SENSUS", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 2], ["SS 610", "Penyusunan Bahan Diseminasi 1) Leaflet, booklet 2) Website 3) Penyusunan CD dan sejenisnya", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 2], ["SS 620", "Sosialisasi hasil Sensus melalui berbagai Media", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 2], ["SS 630", "Layanan Promosi Statistik", "SENSUS PENDUDUK, SENSUS PERTANIAN DAN SENSUS EKONOMI", 2], ["VS 000", "PERENCANAAN", "SURVEI", 2], ["VS 010", "Master Plan dan Network Planing", "SURVEI", 2], ["VS 020", "Perumusan dan Penyusunan Bahan", "SURVEI", 2], ["VS 021", "Penyiapan bahan penyusunan rancangan survei", "SURVEI", 2], ["VS 022", "Penyusunan metode pencacahan survei", "SURVEI", 2], ["VS 023", "Penentuan volume survei", "SURVEI", 2], ["VS 024", "Penyusunan desain penarikan sampel", "SURVEI", 2], ["VS 025", "Penyusunan Kerangka Sampel", "SURVEI", 2], ["VS 030", "Studi Pendahuluan (Desk Study )", "SURVEI", 2], ["VS 100", "PERSIAPAN SURVEI", "SURVEI", 2], ["VS 110", "Rancangan Organisasi", "SURVEI", 2], ["VS 120", "Penyusunan Kuesioner", "SURVEI", 2], ["VS 130", "Penyusunan Konsep dan Definisi", "SURVEI", 2], ["VS 140", "Penyusunan Metodologi (organisasi, lapangan, ukuran statistik)", "SURVEI", 2], ["VS 150", "Penyusunan Buku Pedoman (pencacahan, pengawasan, pengolahan)", "SURVEI", 2], ["VS 160", "Penyusunan Peta Wilayah Kerja dan Muatan Peta Wilayah", "SURVEI", 2], ["VS 170", "Penyusunan Pedoman Sosialisasi", "SURVEI", 2], ["VS 180", "Penyusunan Program Pengolahan (rule validasi pemeriksaan entri tabulasi)", "SURVEI", 2], ["VS 190", "Koordinasi Intern/Extern", "SURVEI", 2], ["VS 200", "PELATIHAN/UJICOBA", "SURVEI", 2], ["VS 210", "Pelatihan Instruktur", "SURVEI", 2], ["VS 220", "Pelatihan Petugas", "SURVEI", 2], ["VS 230", "Pelatihan Petugas Pengolahan", "SURVEI", 2], ["VS 240", "Perancangan Tabel", "SURVEI", 2], ["VS 250", "Pelaksanaan Ujicoba Kuesioner Survei (meliputi reliabilitas kuesioner dan sistem pengolahan)", "SURVEI", 2], ["VS 260", "Pelaksanaan Ujicoba Kuesioner Metodologi Survei (meliputi ujicoba pelaksanaan pencacahan, organisasi dan jumlah sampel)", "SURVEI", 2], ["VS 300", "PELAKSANAAN LAPANGAN", "SURVEI", 2], ["VS 310", "Listing", "SURVEI", 2], ["VS 320", "Pemilihan Sampel", "SURVEI", 2], ["VS 330", "Pengumpulan Data", "SURVEI", 2], ["VS 340", "Pemeriksaan Data", "SURVEI", 2], ["VS 350", "Pengawasan Lapangan", "SURVEI", 2], ["VS 360", "Monitoring Kualitas", "SURVEI", 2], ["VS 400", "PENGOLAHAN", "SURVEI", 2], ["VS 410", "Pengelolaan Dokumen (penerimaan/pengiriman, pengelompokkan/ batching )", "SURVEI", 2], ["VS 420", "Pemeriksaan Dokumen dan Pengkodean (editing/coding )", "SURVEI", 2], ["VS 430", "Perekaman Data (entry/scanner )", "SURVEI", 3], ["VS 440", "Tabulasi Data", "SURVEI", 3], ["VS 450", "Pemeriksaan Tabulasi", "SURVEI", 3], ["VS 460", "Laporan Konsistensi Tabulasi", "SURVEI", 3], ["VS 500", "ANALISIS DAN PENYAJIAN HASIL SURVEI", "SURVEI", 3], ["VS 510", "Pembahasan Angka Hasil Pengolahan", "SURVEI", 3], ["VS 520", "Penyusunan Angka Sementara", "SURVEI", 3], ["VS 530", "Penyusunan Angka Proyeksi/Ramalan", "SURVEI", 3], ["VS 540", "Penyusunan Angka Tetap", "SURVEI", 3], ["VS 550", "Penyusunan/Pembahasan Draft Publikasi", "SURVEI", 3], ["VS 560", "Analisis Data Survei", "SURVEI", 3], ["VS 570", "Penyusunan Diseminasi Hasil Survei", "SURVEI", 3], ["VS 600", "DISEMINASI HASIL SURVEI", "SURVEI", 3], ["VS 610", "Penyusunan Bahan Diseminasi 1) Leaflet, booklet 2) Website 3) Penyusunan CD dan sejenisnya", "SURVEI", 3], ["VS 620", "Sosialisasi hasil Survei melalui berbagai Media", "SURVEI", 3], ["VS 630", "Layanan Promosi Statistik", "SURVEI", 3], ["KS 000", "KOMPILASI DATA", "KONSOLIDASI DATA STATISTIK", 3], ["KS 100", "ANALISIS DATA", "KONSOLIDASI DATA STATISTIK", 3], ["KS 200", "PENYUSUNAN PUBLIKASI", "KONSOLIDASI DATA STATISTIK", 3], ["KU 000", "PELAKSANAAN ANGGARAN", "KEUANGAN", 3], ["KU 010", "Ketentuan/Peraturan Menteri Keuangan Menyangkut Pelaksanaan dan Penatausahaan", "KEUANGAN", 3], ["KU 100", "REALISASI PENDAPATAN/PENERIMAAN NEGARA", "KEUANGAN", 3], ["KU 110", "Surat Setoran Pajak (SSP)", "KEUANGAN", 3], ["KU 120", "Surat Setoran Bukan Pajak (SSBP)", "KEUANGAN", 3], ["KU 130", "Bukti Penerimaan Bukan Pajak (PNBP)", "KEUANGAN", 3], ["KU 140", "Dana Bagi Hasil yang bersumber dari Pajak:", "KEUANGAN", 3], ["KU 141", "Pajak Bumi Bangunan", "KEUANGAN", 3], ["KU 142", "Bea Perolehan Hak Atas Tanah dan Bangunan (BPHTB)", "KEUANGAN", 3], ["KU 143", "Pajak Penghasilan (PPh) Pasal 21, 25 dan 29", "KEUANGAN", 3], ["KU 150", "Bukti Setor Sisa Anggaran Lebih atau Bukti Setor Pengembalian Belanja (SSPB)", "KEUANGAN", 3], ["KU 160", "Bunga dan/atau Jasa Giro pada Bank", "KEUANGAN", 3], ["KU 170", "Piutang Negara", "KEUANGAN", 3], ["KU 180", "Pengelolaan Investasi dan Penyertaan Modal", "KEUANGAN", 3], ["KU 200", "PENGELOLAAN PERBENDAHARAAN", "KEUANGAN", 3], ["KU 210", "Pejabat Penguji dan Penandatanganan SPM", "KEUANGAN", 3], ["KU 220", "Bendahara Penerimaan", "KEUANGAN", 3], ["KU 230", "Bendahara Pengeluaran", "KEUANGAN", 3], ["KU 240", "Kartu Pengawasan Pembayaran Penghasilan Pegawai (KP4)", "KEUANGAN", 3], ["KU 250", "Pengembalian Belanja", "KEUANGAN", 3], ["KU 260", "Pembukuan Anggaran", "KEUANGAN", 3], ["KU 261", "Buku Kas Umum (BKU)", "KEUANGAN", 3], ["KU 262", "Buku Kas Pembantu", "KEUANGAN", 3], ["KU 263", "Kartu Realisasi Anggaran dan Pengawasan Realisasi Anggaran", "KEUANGAN", 3], ["KU 270", "Berita Acara Pemeriksaan Kas", "KEUANGAN", 3], ["KU 280", "Daftar Gaji/Kartu Gaji", "KEUANGAN", 3], ["KU 300", "PENGELUARAN ANGGARAN Naskah‐naskah yang berkaitan dengan pelaksanaan anggaran pengeluaran mulai dari SPP‐ GU, SPP‐LS, SPP‐UP, SPP‐TUP, SPM, SP2D, Juklak mekanisme pengelolaan APBN serta bahan nota keuangan", "KEUANGAN", 3], ["KU 310", "Belanja Bahan", "KEUANGAN", 4], ["KU 320", "Belanja Barang", "KEUANGAN", 4], ["KU 330", "Belanja Jasa (Konsultan, Profesi)", "KEUANGAN", 4], ["KU 340", "Belanja Perjalanan", "KEUANGAN", 4], ["KU 350", "Belanja Pegawai", "KEUANGAN", 4], ["KU 360", "Belanja Paket Meeting Dalam Kota", "KEUANGAN", 4], ["KU 370", "Belanja Paket Meeting Luar Kota", "KEUANGAN", 4], ["KU 380", "Belanja Akun Kombinasi", "KEUANGAN", 4], ["KU 400", "VERIFIKASI ANGGARAN", "KEUANGAN", 4], ["KU 410", "Surat Permintaan Pembayaran (SPP) beserta lampirannya", "KEUANGAN", 4], ["KU 420", "Surat Perintah Membayar (SPM), Surat Perintah Pencairan Dana (SP2D)", "KEUANGAN", 4], ["KU 500", "PELAPORAN", "KEUANGAN", 4], ["KU 510", "Akuntansi Keuangan:", "KEUANGAN", 4], ["KU 511", "Berita Acara Pemeriksaan Kas", "KEUANGAN", 4], ["KU 512", "Kas/Register Penutupan Kas", "KEUANGAN", 4], ["KU 513", "Laporan Pendapatan Negara", "KEUANGAN", 4], ["KU 514", "Arsip Data Komputer (ADK)", "KEUANGAN", 4], ["KU 520", "Pengumpulan, Pemantauan, Evaluasi dan Laporan Keuangan:", "KEUANGAN", 4], ["KU 521", "Keadaan Kredit Anggaran (LKKA) Bulanan/Triwulanan/Semesteran a. Laporan Realisasi Anggaran (RKA) b. Neraca c. Laporan Arus Kas d. Catatan Atas Laporan Keuangan (CALK)", "KEUANGAN", 4], ["KU 530", "Rekonsiliasi Data Laporan Keuangan", "KEUANGAN", 4], ["KU 600", "BANTUAN PINJAMAN LUAR NEGERI", "KEUANGAN", 4], ["KU 610", "Permohonan Pinjaman Luar Negeri (Blue Book)", "KEUANGAN", 4], ["KU 620", "Dokumen Kesanggupan negara donor (Gray Book)", "KEUANGAN", 4], ["KU 630", "Memorandum of Understand (MoU) dan dokumen sejenisnya", "KEUANGAN", 4], ["KU 640", "Loan Agreement Pinjaman/Hibah Luar Negeri (PHLN), legal opinion , surat‐menyurat dengan lender , konsultan", "KEUANGAN", 4], ["KU 650", "Alokasi dan Relokasi Penggunaan Dana Pinjaman/Hibah Luar Negeri", "KEUANGAN", 4], ["KU 660", "Penarikan Dana Bantuan Luar Negeri (BLN)", "KEUANGAN", 4], ["KU 661", "Aplikasi Penarikan Dana Bantuan Luar Negeri (BLN) berikut lampirannya: a. Reimbursment b. Direct Payment/Transfer Procedure c. Special Comitment/L/C Opening d. Special Accoung/Imprest Fund", "KEUANGAN", 4], ["KU 662", "Otorisasi Penarikan Dana (Payment Advice )", "KEUANGAN", 4], ["KU 663", "Replenisment (permintaan penarikan dana negara donor) meliputi: a. No Objection Lettern (NOL) b. Notification of Contract c. Withdrawal Authorization (WA) d. Statement of Expenditur (SE)", "KEUANGAN", 4], ["KU 670", "Realisasi Pencairan Dana Bantuan Luar Negeri: a. Surat Perintah Pencairan Dana (SP2D) b. SPM beserta lampirannya: SPP, Kontrak, BA dan data pendukung lainnya", "KEUANGAN", 4], ["KU 680", "Ketentuan/Peraturan yang menyangkut Bantuan/Pinjaman Luar Negeri", "KEUANGAN", 4], ["KU 690", "Laporan‐Laporan Pelaksanaan Bantuan/Pinjaman Luar Negeri", "KEUANGAN", 4], ["KU 691", "Staff Appraisal Report", "KEUANGAN", 4], ["KU 692", "Report /Laporan yang terdiri dari: a. Progress Report b. Monthly Report c. Quarterly Report", "KEUANGAN", 4], ["KU 693", "Laporan Hutang Negara: a. Laporan Pembayaran Hutang Negara b. Laporan Posisi Hutang Negara", "KEUANGAN", 5], ["KU 694", "Completion Report/Annual Report", "KEUANGAN", 5], ["KU 700", "PENGELOLA APBN/DANA PINJAMAN/HIBAH LUAR NEGERI (PHLN)", "KEUANGAN", 5], ["KU 710", "Keputusan Kepala BPS tentang Penetapan:", "KEUANGAN", 5], ["KU 711", "Kuasa Pengguna Anggaran (KPA), Pejabat Pembuat Komitmen (PPK)", "KEUANGAN", 5], ["KU 712", "Pejabat Pembuat Daftar Gaji", "KEUANGAN", 5], ["KU 713", "Penandatangan SPM", "KEUANGAN", 5], ["KU 714", "Bendahara Penerimaan/Pengeluaran, Pengelola Barang", "KEUANGAN", 5], ["KU 800", "SISTEM AKUNTANSI INSTANSI (SAI)", "KEUANGAN", 5], ["KU 810", "Manual Implementasi Sistem Akuntansi Instansi (SAI)", "KEUANGAN", 5], ["KU 820", "Arsip Data Komputer dan Berita Acara Rekonsiliasi", "KEUANGAN", 5], ["KU 830", "a. Daftar Transaksi (DT), Pengeluaran (PK), Penerimaan (PN) b. Dokumen Sumber (DS), Bukti Jurnal (BJ), Surat Tanda Setor (STS) c. Surat Setor Bukan Pajak (SSBP), Surat Perintah Pencairan Dana (SP2D) d. SPM dalam Daftar Ringkasan Pengembalian dan Potongan dari Pengeluaran (SPDR)", "KEUANGAN", 5], ["KU 840", "Listing (Daftar Rekaman Penerimaan) Buku Temuan dan Tindakan Lain (SAI)", "KEUANGAN", 5], ["KU 850", "Laporan Realisasi Bulanan SAI", "KEUANGAN", 5], ["KU 860", "Laporan Realisasi Triwulanan SAI dari Unit Akuntasi Wilayah (UAW) dan Gabungan semua UAW/Unit Akuntansi Kantor Pusat Instansi (UAKPI)", "KEUANGAN", 5], ["KU 900", "PERTANGGUNGJAWABAN KEUANGAN NEGARA", "KEUANGAN", 5], ["KU 910", "Laporan Hasil Pemeriksaan atas Laporan Keuangan oleh BPK RI", "KEUANGAN", 5], ["KU 920", "Hasil Pengawasan dan Pemeriksaan Internal", "KEUANGAN", 5], ["KU 930", "Laporan Aparat Pemeriksa Fungsional", "KEUANGAN", 5], ["KU 931", "Laporan Hasil Pemeriksaan (LHP)", "KEUANGAN", 5], ["KU 932", "Memorandum Hasil Pemeriksaan (MHP)", "KEUANGAN", 5], ["KU 933", "Tindak Lanjut/Tanggapan LHP", "KEUANGAN", 5], ["KU 940", "Dokumentasi Penyelesaian Keuangan Negara", "KEUANGAN", 5], ["KU 941", "Tuntutan Perbendaharaan", "KEUANGAN", 5], ["KU 942", "Tuntutan Ganti Rugi", "KEUANGAN", 5], ["KP 000", "FORMASI KEPEGAWAIAN", "KEPEGAWAIAN", 5], ["KP 010", "Usulan dari Unit Kerja", "KEPEGAWAIAN", 5], ["KP 020", "Usulan Permintaan Formasi kepada Menpan dan Kepala BKN", "KEPEGAWAIAN", 5], ["KP 030", "Persetujuan Menpan", "KEPEGAWAIAN", 5], ["KP 040", "Penetapan Formasi", "KEPEGAWAIAN", 5], ["KP 050", "Penetapan Formasi Khusus", "KEPEGAWAIAN", 5], ["KP 100", "PENGADAAN DAN PENGANGKATAN PEGAWAI", "KEPEGAWAIAN", 5], ["KP 110", "Proses Penerimaan Pegawai:", "KEPEGAWAIAN", 5], ["KP 111", "Pengumuman", "KEPEGAWAIAN", 5], ["KP 112", "Seleksi Administrasi", "KEPEGAWAIAN", 5], ["KP 113", "Pemanggila Peserta Tes", "KEPEGAWAIAN", 5], ["KP 114", "Pelaksanaan Ujian (tertulis, psikotes, wawancara)", "KEPEGAWAIAN", 5], ["KP 115", "Keputusan Hasil Ujian", "KEPEGAWAIAN", 5], ["KP 120", "Penetapan Pengumuman Kelulusan", "KEPEGAWAIAN", 5], ["KP 130", "Berkas Lamaran yang Tidak Diterima", "KEPEGAWAIAN", 5], ["KP 140", "Nota Usul dan Kelengkapan Penetapan NIP", "KEPEGAWAIAN", 5], ["KP 150", "Nota Usul Pengangkatan CPNS menjadi PNS", "KEPEGAWAIAN", 5], ["KP 160", "Nota Usul Pengangkatan CPNS menjadi PNS Lebih 2 Tahun", "KEPEGAWAIAN", 5], ["KP 170", "SK CPNS/PNS Kolektif", "KEPEGAWAIAN", 5], ["KP 200", "BERKAS PEGAWAI TIDAK TETAP/MITRA STATISTIK", "KEPEGAWAIAN", 5], ["KP 300", "PEMBINAAN KARIR PEGAWAI", "KEPEGAWAIAN", 5], ["KP 310", "Diklat Kursus/Tugas Belajar/Ujian Dinas/Izin Belajar Pegawai:", "KEPEGAWAIAN", 5], ["KP 311", "Surat Perintah/Surat Tugas/SK/Surat Izin", "KEPEGAWAIAN", 5], ["KP 312", "Laporan Kegiatan Pengembangan Diri", "KEPEGAWAIAN", 6], ["KP 313", "Surat Tanda Tamat Pendidikan dan Pelatihan", "KEPEGAWAIAN", 6], ["KP 320", "Ujian Kompetensi", "KEPEGAWAIAN", 6], ["KP 321", "Assesment Tes Pegawai", "KEPEGAWAIAN", 6], ["KP 322", "Pemetaan/Mapping Talent Pegawai", "KEPEGAWAIAN", 6], ["KP 330", "Daftar Penilaian Pelaksanaan Pekerjaan (DP3) dan Sasaran Kinerja Pegawai (SKP)", "KEPEGAWAIAN", 6], ["KP 340", "Pakta Integritas Pegawai", "KEPEGAWAIAN", 6], ["KP 350", "Laporan Hasil Kekayaan Penyelenggaraan Negara (LHKPN)", "KEPEGAWAIAN", 6], ["KP 360", "Daftar Usul Penetapan Angka Kredit Fungsional", "KEPEGAWAIAN", 6], ["KP 370", "Disiplin Pegawai:", "KEPEGAWAIAN", 6], ["KP 371", "Daftar Hadir", "KEPEGAWAIAN", 6], ["KP 372", "Rekapitulasi Daftar Hadir", "KEPEGAWAIAN", 6], ["KP 380", "Berkas Hukuman Disiplin", "KEPEGAWAIAN", 6], ["KP 390", "Penghargaan dan Tanda Jasa (Satya Lencana/Bintang Jasa)", "KEPEGAWAIAN", 6], ["KP 400", "PENYELESAIAN PENGELOLAAN KEBERATAN PEGAWAI", "KEPEGAWAIAN", 6], ["KP 500", "MUTASI PEGAWAI", "KEPEGAWAIAN", 6], ["KP 510", "Alih Status, Pindah Instansi, Pindah Wilayah Kerja, Diperbantukan, Dipekerjakan, Penugasan Sementara, Mutasi Antar Perwakilan, Mutasi ke dan dari perwakilan Sementara, Mutasi Antar Unit", "KEPEGAWAIAN", 6], ["KP 520", "Nota Persetujuan/Pertimbangan Kepala BKN", "KEPEGAWAIAN", 6], ["KP 530", "Mutasi Keluarga:", "KEPEGAWAIAN", 6], ["KP 531", "Surat Izini Pernikahan/Perceraian", "KEPEGAWAIAN", 6], ["KP 532", "Surat Penolakan Izin Pernikahan/Perceraian", "KEPEGAWAIAN", 6], ["KP 533", "Akte Nikah/Cerai", "KEPEGAWAIAN", 6], ["KP 534", "Surat Keterangan Meninggal Dunia", "KEPEGAWAIAN", 6], ["KP 540", "Usul Kenaikan Pangkat/Golongan/Jabatan", "KEPEGAWAIAN", 6], ["KP 550", "Usul Pengangkatan dan Pemberhentian dalam Jabatan Struktural/Fungsional", "KEPEGAWAIAN", 6], ["KP 560", "Usul Penetapan Perubahan Data Dasar/Status/Kedudukan Hukum Pegawai", "KEPEGAWAIAN", 6], ["KP 570", "Peninjauan Masa Kerja", "KEPEGAWAIAN", 6], ["KP 580", "Berkas Baperjakat", "KEPEGAWAIAN", 6], ["KP 600", "ADMINISTRASI PEGAWAI", "KEPEGAWAIAN", 6], ["KP 610", "Dokumentasi Identitas Pegawai", "KEPEGAWAIAN", 6], ["KP 611", "Usul Penetapan Karpeg/KPE/Karis/Karsu", "KEPEGAWAIAN", 6], ["KP 612", "Kanggotaan Organisasi Profesi/Kedinasan", "KEPEGAWAIAN", 6], ["KP 613", "Laporan Pajak Penghasil Pribadi (LP2P)", "KEPEGAWAIAN", 6], ["KP 614", "Keterangan Penerimaan Penghasilan Pegawai (KP4)", "KEPEGAWAIAN", 6], ["KP 620", "Berkas Kepegawaian dan Daftar Urut Kepangkatan (DUK)", "KEPEGAWAIAN", 6], ["KP 630", "Berkas Perorangan Pegawai Negeri Sipil: Kepala/Wakil Kepala Daerah", "KEPEGAWAIAN", 6], ["KP 640", "Berkas Perseorangan Pejabat Negara", "ss. Surat Pernyataan Pengunduran Diri dari Jabatan Organik Karena Dicalonkan Sebagai", 7], ["KP 641", "Kepala BPS", "ss. Surat Pernyataan Pengunduran Diri dari Jabatan Organik Karena Dicalonkan Sebagai", 7], ["KP 642", "Pejabat Negara Lain yang ditentukan oleh Undang‐Undang", "ss. Surat Pernyataan Pengunduran Diri dari Jabatan Organik Karena Dicalonkan Sebagai", 7], ["KP 650", "Surat Perintah Dinas/Surat Tugas", "ss. Surat Pernyataan Pengunduran Diri dari Jabatan Organik Karena Dicalonkan Sebagai", 7], ["KP 660", "Berkas Cuti Pegawai", "ss. Surat Pernyataan Pengunduran Diri dari Jabatan Organik Karena Dicalonkan Sebagai", 7], ["KP 661", "Cuti Sakit", "ss. Surat Pernyataan Pengunduran Diri dari Jabatan Organik Karena Dicalonkan Sebagai", 7], ["KP 662", "Cuti Bersalin", "ss. Surat Pernyataan Pengunduran Diri dari Jabatan Organik Karena Dicalonkan Sebagai", 7], ["KP 663", "Cuti Tahunan", "ss. Surat Pernyataan Pengunduran Diri dari Jabatan Organik Karena Dicalonkan Sebagai", 7], ["KP 664", "Cuti Alasan Penting", "ss. Surat Pernyataan Pengunduran Diri dari Jabatan Organik Karena Dicalonkan Sebagai", 7], ["KP 665", "Cuti Luar Tanggungan Negara (CTLN)", "ss. Surat Pernyataan Pengunduran Diri dari Jabatan Organik Karena Dicalonkan Sebagai", 7], ["KP 700", "KESEJAHTERAAN PEGAWAI", "ss. Surat Pernyataan Pengunduran Diri dari Jabatan Organik Karena Dicalonkan Sebagai", 7], ["KP 710", "Berkas Tentang Layanan Tunjangan/Gaji", "ss. Surat Pernyataan Pengunduran Diri dari Jabatan Organik Karena Dicalonkan Sebagai", 7], ["KP 720", "Berkas Tentang Layanan Pemeliharaan Kesehatan Pegawai", "ss. Surat Pernyataan Pengunduran Diri dari Jabatan Organik Karena Dicalonkan Sebagai", 7], ["KP 730", "Berkas Tentang Layanan Asuransi Pegawai", "ss. Surat Pernyataan Pengunduran Diri dari Jabatan Organik Karena Dicalonkan Sebagai", 7], ["KP 740", "Berkas Tentang Layanan Bantuan Sosial", "ss. Surat Pernyataan Pengunduran Diri dari Jabatan Organik Karena Dicalonkan Sebagai", 7], ["KP 750", "Berkas Tentang Layanan Olahraga dan Rekreasi", "ss. Surat Pernyataan Pengunduran Diri dari Jabatan Organik Karena Dicalonkan Sebagai", 7], ["KP 760", "Berkas Tentang Layanan Layanan Pengurusan Jenazah", "ss. Surat Pernyataan Pengunduran Diri dari Jabatan Organik Karena Dicalonkan Sebagai", 7], ["KP 770", "Berkas Tentang Layanan Organisasi Non Kedinasan (Korpri, Dharma Wanita, Koperasi)", "ss. Surat Pernyataan Pengunduran Diri dari Jabatan Organik Karena Dicalonkan Sebagai", 7], ["KP 800", "PEMBERHENTIAN PEGAWAI TANPA HAK PENSIUN", "ss. Surat Pernyataan Pengunduran Diri dari Jabatan Organik Karena Dicalonkan Sebagai", 7], ["KP 900", "USUL PEMBERHENTIAN DAN PENETAPAN PENSIUN PEGAWAI/JANDA/DUDA & PNS YANG TEWAS", "ss. Surat Pernyataan Pengunduran Diri dari Jabatan Organik Karena Dicalonkan Sebagai", 7], ["PR 000", "POKOK‐POKOK KEBIJAKAN DAN STRATEGI PEMBANGUNAN", "PERENCANAAN", 7], ["PR 010", "Pengumpulan Data", "PERENCANAAN", 7], ["PR 020", "Rencana Pembangunan Jangka Menengah (RPJM)", "PERENCANAAN", 7], ["PR 030", "Rencana Pembangunan Jangka Panjang (RPJP)", "PERENCANAAN", 8], ["PR 040", "Rencana Kerja Pemerintah (RKP)", "PERENCANAAN", 8], ["PR 050", "Penyelenggaraan Musyawarah Perencanaan Pembangunan (Musrenbang)", "PERENCANAAN", 8], ["PR 100", "PENYUSUNAN RENCANA", "PERENCANAAN", 8], ["PR 110", "Rencana Kegiatan Teknis", "PERENCANAAN", 8], ["PR 120", "Rencana Kegiatan Non Teknis", "PERENCANAAN", 8], ["PR 130", "Keterpaduan Rencana Teknis dan Non Teknis", "PERENCANAAN", 8], ["PR 200", "PROGRAM KERJA TAHUNAN", "PERENCANAAN", 8], ["PR 210", "Usulan Unit Kerja beserta data pendukungnya", "PERENCANAAN", 8], ["PR 220", "Program Kerja Tahunan Unit Kerja", "PERENCANAAN", 8], ["PR 230", "Program Kerja Tahunan Instansi/Lembaga", "PERENCANAAN", 8], ["PR 300", "RENCANA ANGGARAN PENDAPATAN DAN BELANJA NEGARA (RAPBN)", "PERENCANAAN", 8], ["PR 310", "Penyusunan RAPBN", "PERENCANAAN", 8], ["PR 311", "Arah Kebijakan Umum, Strategi, Prioritas dan Renstra: a. Rencana Kerja b. Rencana Kerja Pemerintah", "PERENCANAAN", 8], ["PR 312", "Rencana Kerja dan Anggaran Kementerian/Lembaga (RKAKL)", "PERENCANAAN", 8], ["PR 313", "Rencana Satuan Anggaran Per Satuan Kerja (SAPSK), Satuan Rincian Alokasi Anggaran (SRAA)", "PERENCANAAN", 8], ["PR 320", "Penyampaian APBN Kepada DPR RI", "PERENCANAAN", 8], ["PR 321", "Nota Keuangan Pemerintah dan Rancangan Undang‐Undang RAPBN: a. Nota Keuangan Pemerintah b. Materi RAPBN dari Lembaga Negara dan Badan Pemerintah (RASKIP)", "PERENCANAAN", 8], ["PR 322", "Pembahasan RAPBN oleh Komisi DPR RI", "PERENCANAAN", 8], ["PR 323", "Risalah Rapat Dengar Pendapat dengan DPR RI", "PERENCANAAN", 8], ["PR 324", "Nota Jawaban DPR RI", "PERENCANAAN", 8], ["PR 400", "PENYUSUNAN ANGGARAN PENDAPATAN NEGARA (APBN)", "PERENCANAAN", 8], ["PR 410", "Ketetapan Pagu Indikatif/Pagu Sementara", "PERENCANAAN", 8], ["PR 420", "Ketetapan Pagu Definitif", "PERENCANAAN", 8], ["PR 430", "Rencana Kerja Anggaran (RKA) Lembaga Negara dan Badan Pemerintah (LNBP)", "PERENCANAAN", 8], ["PR 440", "Daftar Isian Pelaksanaan Anggaran (DIPA) dan Revisinya", "PERENCANAAN", 8], ["PR 450", "Petunjuk Operasional Kegiatan (POK) dan Revisinya", "PERENCANAAN", 8], ["PR 460", "Petunjuk Teknis Tata Laksana Keterpaduan Kegiatan dan Pengelolaan Anggaran", "PERENCANAAN", 8], ["PR 470", "Target Penerimaan Negara Bukan Pajak", "PERENCANAAN", 8], ["PR 500", "PENYUSUNAN STANDAR HARGA MONITORING PROGRAM", "PERENCANAAN", 8], ["PR 510", "Pedoman Pengumpulan dan Pengolahan Data Standar Harga", "PERENCANAAN", 8], ["PR 520", "Pedoman Teknis Monitoring Program dan Kegiatan", "PERENCANAAN", 8], ["PR 530", "Pedoman Teknis Evaluasi dan Pelaporan Program", "PERENCANAAN", 8], ["PR 600", "LAPORAN", "PERENCANAAN", 8], ["PR 610", "Laporan Khusus", "PERENCANAAN", 8], ["PR 611", "Pemantauan Prioritas", "PERENCANAAN", 8], ["PR 612", "Laporan Pelaksanaan Kegiatan Atas Permintaan Eksternal", "PERENCANAAN", 8], ["PR 613", "Laporan Atas Pelaksanaan Kegiatan/Program Tertentu", "PERENCANAAN", 8], ["PR 614", "Rapat Dengar Pendapat dengan DPR RI", "PERENCANAAN", 8], ["PR 620", "Laporan Progress Report", "PERENCANAAN", 8], ["PR 630", "Laporan Akuntabilitas Kinerja Instasi Pemerintah (LAKIP)", "PERENCANAAN", 8], ["PR 640", "Laporan Berkala (harian, mingguan, bulanan, triwulanan, semesteran, tahunan)", "PERENCANAAN", 8], ["PR 700", "EVALUASI PROGRAM", "PERENCANAAN", 8], ["PR 710", "Evaluasi Program Unit Kerja", "PERENCANAAN", 8], ["PR 720", "Evaluasi Program Lembaga/Instansi", "PERENCANAAN", 8], ["HK 000", "PROGRAM LEGISLASI", "HUKUM", 8], ["HK 010", "Bahan/Materi Program Legislasi Nasional dan Instansi", "HUKUM", 8], ["HK 020", "Program Legislasi Lembaga/Instansi", "HUKUM", 8], ["HK 100", "PERATURAN PIMPINAN LEMBAGA/INSTANSI Termasuk rancangan awal sampai dengan rancangan akhir dan telaah hukum.", "HUKUM", 9], ["HK 110", "Peraturan Kepala BPS", "HUKUM", 9], ["HK 200", "KEPUTUSAN/KETETAPAN PIMPINAN LEMBAGA/INSTANSI Termasuk rencangan awal sampai dengan rancangan akhir dan telaah hukum.", "HUKUM", 9], ["HK 300", "INSTRUKSI SURAT EDARAN Termasuk rancangan awal sampai dengan rancangan akhir dan telaah hukum.", "HUKUM", 9], ["HK 310", "Instruksi/Surat Edaran Kepala BPS", "HUKUM", 9], ["HK 320", "Instruksi/Surat Edaran Pejabat Tinggi Madya dan Pejabat Tinggi Pratama", "HUKUM", 9], ["HK 400", "SURAT PERINTAH", "HUKUM", 9], ["HK 410", "Surat Perintah Kepala BPS", "HUKUM", 9], ["HK 420", "Surat Perintah Pejabat Madya", "HUKUM", 9], ["HK 430", "Surat Perintah Pejabat Pratama", "HUKUM", 9], ["HK 500", "PEDOMAN Standar/Pedoman/Prosedur Kerja/Petunjuk Pelaksanaan/Petunjuk Teknis yang Bersifat Nasional/Regional/Instansional termasuk rancangan awal sampai dengan rancangan akhir.", "HUKUM", 9], ["HK 600", "NOTA KESEPAHAMAN", "HUKUM", 9], ["HK 610", "Dalam Negeri", "HUKUM", 9], ["HK 620", "Luar Negeri", "HUKUM", 9], ["HK 700", "DOKUMENTASI HUKUM Undang‐Undang, Peraturan Pemerintah, Keputusan Presidan dan peraturan‐peraturan lain di luar produk Hukum BPS yang dijadikan referensi.", "HUKUM", 9], ["HK 800", "SOSIALISASI/PENYULUHAN/PEMBINAAN HUKUM", "HUKUM", 9], ["HK 810", "Berkas yang berhubungan dengan kegiatan sosialisasi atau penyuluhan hukum", "HUKUM", 9], ["HK 820", "Laporan hasil pelaksanaan sosialisasi penyuluhan hukum", "HUKUM", 9], ["HK 900", "BANTUAN KONSUTASI HUKUM/ADVOKASI Berkas tentang pemberian bantuan/konsultasi hukum (Pidana, Perdata, Tata Usaha Negara, dan Agama)", "HUKUM", 9], ["HK 1000", "KASUS/SENGKETA HUKUM", "HUKUM", 9], ["HK 1010", "Pidana Berkas tentang kasus/sengketa pidana, baik kejahatan maupun pelanggaran:", "HUKUM", 9], ["HK 1011", "Proses verbal mulai dari penyelidikan, penyidikan sampai dengan vonis", "HUKUM", 9], ["HK 1012", "Berkas pembelaan dan bantuan hukum", "HUKUM", 9], ["HK 1013", "Telaah hukum dan opini hukum", "HUKUM", 9], ["HK 1020", "Perdata", "HUKUM", 9], ["HK 1021", "Proses gugatan sampai dengan putusan", "HUKUM", 9], ["HK 1022", "Berkas pembelaan dan bantuan hukum", "HUKUM", 9], ["HK 1023", "Telaah hukum dan opini hukum", "HUKUM", 9], ["HK 1030", "Tata Usaha Negara", "HUKUM", 9], ["HK 1031", "Proses gugatan sampai dengan putusan", "HUKUM", 9], ["HK 1032", "Berkas pembelaan dan bantuan hukum", "HUKUM", 9], ["HK 1033", "Telaah hukum dan opini hukum", "HUKUM", 9], ["HK 1040", "Arbitrase", "HUKUM", 9], ["HK 1041", "Proses gugatan sampai dengan putusan", "HUKUM", 9], ["HK 1042", "Berkas pembelaan dan bantuan hukum", "HUKUM", 9], ["HK 1043", "Telaah hukum dan opini hukum", "HUKUM", 9], ["OT 000", "ORGANISASI Meliputi hal‐hal yang berkenaan dengan masalah bahan persiapan dan penyusunan organisasi BPS dan unit kerja dibawahnya.", "ORGANISASI DAN TATA LAKSANA", 9], ["OT 010", "Pembentukan Organisasi", "ORGANISASI DAN TATA LAKSANA", 9], ["OT 020", "Pengubahan Organisasi", "ORGANISASI DAN TATA LAKSANA", 9], ["OT 030", "Pembubaran Organisasi", "ORGANISASI DAN TATA LAKSANA", 9], ["OT 040", "Evaluasi Kelembagaan: Meliputi naskah‐naskah yang berkaitan dengan penilaian dan penyempurnaan organisasi.", "ORGANISASI DAN TATA LAKSANA", 10], ["OT 050", "Uraian Jabatan: Meliputi hal‐hal yang berkenaan dengan masalah klasifikasi kepegawaian/pekerjaan, penelitian, jabatan dan analisa jabatan.", "ORGANISASI DAN TATA LAKSANA", 10], ["OT 100", "TATA LAKSANA", "ORGANISASI DAN TATA LAKSANA", 10], ["OT 110", "Standar Kompetensi Jabatan Struktural dan Fungsional: Meliputi hal‐hal yang berkenaan dengan standar kompetensi jabatan struktural dan jabatan fungsional.", "ORGANISASI DAN TATA LAKSANA", 10], ["OT 120", "Tata Hubungan Kerja: Meliputi hal‐hal berkenaan dengan masalah penyusunan tata hubungan kerja baik intern maupun ekstern BPS.", "ORGANISASI DAN TATA LAKSANA", 10], ["OT 130", "Sistem dan Prosedur: Meliputi hal‐hal berkenaan dengan masalah penelaahan tata cara dan metode kegiatan di bidang perstatistikan.", "ORGANISASI DAN TATA LAKSANA", 10], ["HM 000", "KEPROTOKOLAN", "HUBUNGAN MASYARAKAT", 10], ["HM 010", "Penyelenggaran acara kedinasan (upacara, pelantikan, peresmian dan jamuan termasuk acara peringatan hari‐hari besar)", "HUBUNGAN MASYARAKAT", 10], ["HM 020", "Agenda Kegiatan Pimpinan", "HUBUNGAN MASYARAKAT", 10], ["HM 030", "Kunjungan Dinas", "HUBUNGAN MASYARAKAT", 10], ["HM 031", "Kunjungan Dinas dalam dan luar negeri", "HUBUNGAN MASYARAKAT", 10], ["HM 032", "Kunjungan dinas pimpinan lembaga/instansi", "HUBUNGAN MASYARAKAT", 10], ["HM 033", "Kunjungan dinas pejabat lain/pegawai", "HUBUNGAN MASYARAKAT", 10], ["HM 040", "Buku Tamu", "HUBUNGAN MASYARAKAT", 10], ["HM 050", "Daftar nama/alamat kantor/pejabat", "HUBUNGAN MASYARAKAT", 10], ["HM 100", "LIPUTAN MEDIA MASSA Liputan kegiatan dinas pimpinan acara kedinasan dan peristiwa‐peristiwa bidang masing‐ masing yang diliput oleh media massa (cetak elektronik)", "HUBUNGAN MASYARAKAT", 10], ["HM 200", "PENYAJIAN INFORMASI KELEMBAGAAN Penyajian informasi kelembagaan, pengumpulan, pengolahan dan penyajian informasi kelembagaan.", "HUBUNGAN MASYARAKAT", 10], ["HM 210", "Kliping Koran", "HUBUNGAN MASYARAKAT", 10], ["HM 220", "Penerbitan majalah, buletin, koran dan jurnal", "HUBUNGAN MASYARAKAT", 10], ["HM 230", "Brosur/leaflet/poster/plakat", "HUBUNGAN MASYARAKAT", 10], ["HM 240", "Pengumuman/pemberitaan", "HUBUNGAN MASYARAKAT", 10], ["HM 300", "HUBUNGAN ANTAR LEMBAGA", "HUBUNGAN MASYARAKAT", 10], ["HM 310", "Hubungan antar lembaga pemerintah", "HUBUNGAN MASYARAKAT", 10], ["HM 320", "Hubungan dengan organisasi sosial/LSM", "HUBUNGAN MASYARAKAT", 10], ["HM 330", "Hubungan dengan perusahaan", "HUBUNGAN MASYARAKAT", 10], ["HM 340", "Hubungan dengan perguruan tinggi/sekolah: magang, Pendidikan Sistem Ganda, Praktek Kerja Lapangan (PKL)", "HUBUNGAN MASYARAKAT", 10], ["HM 350", "Forum Kehumasan (Bakohumas/Perhumas)", "HUBUNGAN MASYARAKAT", 10], ["HM 360", "Hubungan dengan media massa: a. Siaran pers/konferensi pers/pers release b. Kunjungan wartawan/peliputan c. Wawancara", "HUBUNGAN MASYARAKAT", 10], ["HM 400", "DENGAR PENDAPAT/HEARING DPR", "HUBUNGAN MASYARAKAT", 10], ["HM 500", "PENYIAPAN BAHAN MATERI PIMPINAN", "HUBUNGAN MASYARAKAT", 10], ["HM 600", "PUBLIKASI MELALUI MEDIA CETAK MAUPUN ELEKTRONIK", "HUBUNGAN MASYARAKAT", 10], ["HM 700", "PAMERAN/SAYEMBARA/LOMBA/FESTIVAL, PEMBUATAN SPANDUK DAN IKLAN", "HUBUNGAN MASYARAKAT", 10], ["HM 800", "PENGHARGAAN/KENANG‐KENANGAN/CINDERA MATA", "HUBUNGAN MASYARAKAT", 10], ["HM 900", "UCAPAN TERIMA KASIH, UCAPAN SELAMAT, BELA SUNGKAWA, PERMOHONAN MAAF", "HUBUNGAN MASYARAKAT", 10], ["KA 000", "PENCETAKAN", "KEARSIPAN", 11], ["KA 010", "Penyiapan pembuatan buku kerja dan kalender BPS", "KEARSIPAN", 11], ["KA 020", "Penerimaan permintaan mencetak dan naskah yang akan dicetak", "KEARSIPAN", 11], ["KA 030", "Menyusun perencanaan cetak", "KEARSIPAN", 11], ["KA 040", "Pencetakan naskah, surat, dokumen secara digital dan risograph", "KEARSIPAN", 11], ["KA 100", "PENGURUSAN SURAT", "KEARSIPAN", 11], ["KA 110", "Surat Masuk/Surat Keluar", "KEARSIPAN", 11], ["KA 120", "Penggunaan Aplikasi Surat Menyurat", "KEARSIPAN", 11], ["KA 200", "PENGELOLAAN ARSIP DINAMIS", "KEARSIPAN", 11], ["KA 210", "Penyusunan Sistem Arsip", "KEARSIPAN", 11], ["KA 220", "Penciptaan dan Pemberkasan Arsip", "KEARSIPAN", 11], ["KA 230", "Pengolahan Data Base menjadi Informasi", "KEARSIPAN", 11], ["KA 240", "Alih Media", "KEARSIPAN", 11], ["KA 300", "PENYIMPANAN DAN PEMELIHARAAN ARSIP", "KEARSIPAN", 11], ["KA 310", "Daftar Arsip", "KEARSIPAN", 11], ["KA 320", "Pemeliharaan Arsip dan Ruang Penyimpanan (seperti kegiatan fumigasi)", "KEARSIPAN", 11], ["KA 330", "Daftar Pencarian Arsip", "KEARSIPAN", 11], ["KA 340", "Daftar Arsip Informasi Publik", "KEARSIPAN", 11], ["KA 350", "Daftar Arsip Vital/Aset", "KEARSIPAN", 11], ["KA 360", "Layanan Arsip (peminjam, pengguna arsip)", "KEARSIPAN", 11], ["KA 370", "Persetujuan Jadwal Retensi Arsip", "KEARSIPAN", 11], ["KA 400", "PEMINDAHAN ARSIP", "KEARSIPAN", 11], ["KA 410", "Pemindahan Arsip Inaktif", "KEARSIPAN", 11], ["KA 420", "Daftar Arsip yang Dipindahkan", "KEARSIPAN", 11], ["KA 500", "PEMUSNAHAN ARSIP YANG TIDAK BERNILAI GUNA", "KEARSIPAN", 11], ["KA 510", "Berita Acara Pemusnahan", "KEARSIPAN", 11], ["KA 520", "Daftar Arsip yang Dimusahkan", "KEARSIPAN", 11], ["KA 530", "Rekomendasi/Pertimbangan/Pemusnahan Arsip dari ANRI", "KEARSIPAN", 11], ["KA 540", "Surat Keputusan Pemusnahan", "KEARSIPAN", 11], ["KA 600", "PENYERAHAN ARSIP STATIS", "KEARSIPAN", 11], ["KA 610", "Berita Acara Serah Terima Arsip", "KEARSIPAN", 11], ["KA 620", "Daftar Arsip yang Diserahkan", "KEARSIPAN", 11], ["KA 700", "PEMBINAAN KEARSIPAN", "KEARSIPAN", 11], ["KA 710", "Pembinaan Arsiparis", "KEARSIPAN", 11], ["KA 720", "Apresiasi/Sosialisasi/Penyuluhan Kearsipan, Diklat Profesi", "KEARSIPAN", 11], ["KA 730", "Bimbingan Teknis", "KEARSIPAN", 11], ["KA 740", "Penilaian dan sertifikasi SDM Kearsipan", "KEARSIPAN", 11], ["KA 750", "Supervisi dan Monitoring", "KEARSIPAN", 11], ["KA 760", "Penilaian dan Akreditasi Unit Kerja Kearsipan", "KEARSIPAN", 11], ["KA 770", "Implementasi Pengelolaan Arsip Elektronik", "KEARSIPAN", 11], ["KA 780", "Penghargaan Kearsipan", "KEARSIPAN", 11], ["KA 790", "Pengawasan Kearsipan", "KEARSIPAN", 11], ["RT 000", "TELEKOMUNIKASI Administrasi penggunaan/langganan peralatan telekomunikasi meliputi: telepon, radio, teleks, TV kabel dan internet", "KERUMAHTANGGAAN", 11], ["RT 100", "ADMINISTRASI PENGGUNAAN FASILITAS KANTOR Administrasi penggunaan fasilitas kantor meliputi permintaan dan penggunaan ruang, gedung, kendaraan, wisma rumah dinas, dan fasilitas kantor lainnya.", "KERUMAHTANGGAAN", 11], ["RT 200", "PENGURUSAN KENDARAAN DINAS", "KERUMAHTANGGAAN", 11], ["RT 210", "Pengurusan Surat Kendaraan Dinas", "KERUMAHTANGGAAN", 11], ["RT 220", "Pemeliharaan dan Perbaikan", "KERUMAHTANGGAAN", 11], ["RT 230", "Pengurusan Kehilangan dan Masalah Kendaraan", "KERUMAHTANGGAAN", 11], ["RT 300", "PEMELIHARAAN GEDUNG DAN TAMAN", "KERUMAHTANGGAAN", 11], ["RT 310", "Pertamanan/Landscaping", "KERUMAHTANGGAAN", 11], ["RT 320", "Penghijauan", "KERUMAHTANGGAAN", 12], ["RT 330", "Perbaikan Gedung", "KERUMAHTANGGAAN", 12], ["RT 340", "Perbaikan Rumah Dinas/Wisma", "KERUMAHTANGGAAN", 12], ["RT 350", "Kebersihan Gedung dan Taman", "KERUMAHTANGGAAN", 12], ["RT 400", "PENGELOLAAN JARINGAN LISTRIK, AIR, TELEPON DAN KOMPUTER", "KERUMAHTANGGAAN", 12], ["RT 410", "Perbaikan/Pemeliharaan", "KERUMAHTANGGAAN", 12], ["RT 420", "Pemasangan", "KERUMAHTANGGAAN", 12], ["RT 500", "KETERTIBAN DAN KEAMANAN", "KERUMAHTANGGAAN", 12], ["RT 510", "Pengamanan, penjagaan dan pengawasan terhadap pejabat, kantor, dan rumah dinas:", "KERUMAHTANGGAAN", 12], ["RT 511", "Daftar Nama Satuan Pengamanan", "KERUMAHTANGGAAN", 12], ["RT 512", "Daftar Jaga/Daftar Piket", "KERUMAHTANGGAAN", 12], ["RT 513", "Surat Ijin Keluar Masuk Orang atau Barang", "KERUMAHTANGGAAN", 12], ["RT 520", "Laporan Ketertiban dan Keamanan:", "KERUMAHTANGGAAN", 12], ["RT 521", "Kehilangan, kerusakan, kecelakaan, gangguan", "KERUMAHTANGGAAN", 12], ["RT 600", "ADMINISTRASI PENGELOLAAN PARKIR", "KERUMAHTANGGAAN", 12], ["PL 000", "RENCANA KEBUTUHAN BARANG DAN JASA", "PERLENGKAPAN", 12], ["PL 010", "Usulan Unit Kerja", "PERLENGKAPAN", 12], ["PL 020", "Rencana Kebutuhan Lembaga Pusat/Daerah", "PERLENGKAPAN", 12], ["PL 100", "BERKAS PERKENALAN", "PERLENGKAPAN", 12], ["PL 200", "PENGADAAN BARANG", "PERLENGKAPAN", 12], ["PL 210", "Pengadaan/pembelian barang tidak melalui lelang (pengadaan langsung)", "PERLENGKAPAN", 12], ["PL 220", "Pengadaan/Pembelian barang melalui lelang", "PERLENGKAPAN", 12], ["PL 230", "Perolehan barang melalui bantuan/hibah", "PERLENGKAPAN", 12], ["PL 240", "Pengadaan barang melalui tukar menukar", "PERLENGKAPAN", 12], ["PL 250", "Pemanfaatan barang melalui pinjam pakai", "PERLENGKAPAN", 12], ["PL 260", "Pemanfaatan barang melalui sewa", "PERLENGKAPAN", 12], ["PL 270", "Pemanfaatan barang melalui kerjasama pemanfaatan", "PERLENGKAPAN", 12], ["PL 280", "Pemanfaatan barang melalui bangun serah guna/bangun serah guna", "PERLENGKAPAN", 12], ["PL 300", "PENGADAAN JASA", "PERLENGKAPAN", 12], ["PL 400", "LAPORAN KEMAJUAN PELAKSANAAN BELANJA MODAL", "PERLENGKAPAN", 12], ["PL 500", "INVENTARISASI", "PERLENGKAPAN", 12], ["PL 510", "Inventarisasi Ruangan/Gedung/Bangunan", "PERLENGKAPAN", 12], ["PL 511", "Daftar Invetaris Ruangan (DIR)", "PERLENGKAPAN", 12], ["PL 512", "Buku Inventaris/Pembantu Inventaris Ruangan", "PERLENGKAPAN", 12], ["PL 520", "Inventarisasi Barang", "PERLENGKAPAN", 12], ["PL 521", "Daftar Opname Fisik Barang inventaris (DOFBI)", "PERLENGKAPAN", 12], ["PL 522", "Daftar Inventari Barang (DIB)", "PERLENGKAPAN", 12], ["PL 523", "Daftar Kartu Inventari Barang", "PERLENGKAPAN", 12], ["PL 524", "Buku Inventaris/Pembantu Inventaris Barang", "PERLENGKAPAN", 12], ["PL 530", "Penyusunan Laporan Tahunan Inventaris BMN", "PERLENGKAPAN", 12], ["PL 540", "Sensus BMN", "PERLENGKAPAN", 12], ["PL 600", "PENYIMPANAN", "PERLENGKAPAN", 12], ["PL 610", "Penatausahaan Penyimpanan Barang/Publikasi:", "PERLENGKAPAN", 12], ["PL 611", "Tanda terima/surat pengantar/surat pengiriman barang", "PERLENGKAPAN", 12], ["PL 612", "Surat Pernyataan harga dan mutu barang", "PERLENGKAPAN", 12], ["PL 613", "Berita Acara Serah Terima barang hasil pengadaan", "PERLENGKAPAN", 12], ["PL 614", "Buku Penerimaan", "PERLENGKAPAN", 12], ["PL 615", "Buku Pesediaan barang/kartu stock barang", "PERLENGKAPAN", 13], ["PL 616", "Kartu barang/kartu gudang", "PERLENGKAPAN", 13], ["PL 620", "Penyusunan Laporan Persediaan barang", "PERLENGKAPAN", 13], ["PL 700", "PENYALURAN", "PERLENGKAPAN", 13], ["PL 710", "Penatausahaan penyaluran barang/publikasi", "PERLENGKAPAN", 13], ["PL 711", "Surat Permintaan dari unit kerja/formulir permintaan", "PERLENGKAPAN", 13], ["PL 712", "Surat Perinah Mengeluarkan Barang (SPMB)", "PERLENGKAPAN", 13], ["PL 713", "Surat Perintah Mengeluarkan Barang Inventaris", "PERLENGKAPAN", 13], ["PL 714", "Berita Acara Serah Terima Distribusi Barang", "PERLENGKAPAN", 13], ["PL 800", "PENGHAPUSAN BMN", "PERLENGKAPAN", 13], ["PL 810", "Penghapusan Barang Bergerak/Barang Inventaris Kantor", "PERLENGKAPAN", 13], ["PL 900", "BUKTI‐BUKTI KEPEMILIKAN DAN KELENGKAPAN BMN a. Master Plan Bangunan b. Sertifikat Tanah c. Ijin Mendirikan Bangunan (IMB) d. Bukti Kepemilikan Kendaraan Bermotor (BPKB) e. Surat Tanda Nomor Kendaraan (STNK) f. Denah/Gambar Bangunan/Instalasi Listrik, Air dan Gas", "PERLENGKAPAN", 13], ["DL 000", "PERENCANAAN DIKLAT", "PENDIDIKAN DAN LATIHAN", 13], ["DL 010", "Analisa Kebutuhan Penyelenggaraan Diklat", "PENDIDIKAN DAN LATIHAN", 13], ["DL 020", "Sistem dan Metode", "PENDIDIKAN DAN LATIHAN", 13], ["DL 030", "Kurikulum", "PENDIDIKAN DAN LATIHAN", 13], ["DL 040", "Bahan Ajar/Modul", "PENDIDIKAN DAN LATIHAN", 13], ["DL 050", "Konsultasi Penyelenggaraan Diklat", "PENDIDIKAN DAN LATIHAN", 13], ["DL 100", "AKREDITASI LEMBAGA DIKLAT", "PENDIDIKAN DAN LATIHAN", 13], ["DL 110", "Surat Permohonan Akreditasi", "PENDIDIKAN DAN LATIHAN", 13], ["DL 120", "Laporan Hasil Verifikasi Lapangan", "PENDIDIKAN DAN LATIHAN", 13], ["DL 130", "Berita Acara Rapat Verifikasi", "PENDIDIKAN DAN LATIHAN", 13], ["DL 140", "Berita Acara Rapat Tim Penilai", "PENDIDIKAN DAN LATIHAN", 13], ["DL 150", "Surat Keputusan Penetapan Akreditasi", "PENDIDIKAN DAN LATIHAN", 13], ["DL 160", "Sertifikat Akreditasi", "PENDIDIKAN DAN LATIHAN", 13], ["DL 170", "Laporan Akreditasi Lembaga Diklat", "PENDIDIKAN DAN LATIHAN", 13], ["DL 200", "PENYELENGGARAAN DIKLAT", "PENDIDIKAN DAN LATIHAN", 13], ["DL 210", "Prajabatan", "PENDIDIKAN DAN LATIHAN", 13], ["DL 220", "Kepemimpinan", "PENDIDIKAN DAN LATIHAN", 13], ["DL 230", "Teknis", "PENDIDIKAN DAN LATIHAN", 13], ["DL 240", "Fungsional", "PENDIDIKAN DAN LATIHAN", 13], ["DL 250", "Evaluasi Pasca Diklat", "PENDIDIKAN DAN LATIHAN", 13], ["DL 300", "SERTIFIKASI SUMBER DAYA MANUSIA KEDIKLATAN Naskah‐naskah yang berkaitan dengan kegiatan sertifikasi sumberdaya kediklatan.", "PENDIDIKAN DAN LATIHAN", 13], ["DL 400", "SISTEM INFORMASI DIKLAT", "PENDIDIKAN DAN LATIHAN", 13], ["DL 410", "Data Lembaga Diklat", "PENDIDIKAN DAN LATIHAN", 13], ["DL 420", "Data Prasarana Diklat", "PENDIDIKAN DAN LATIHAN", 13], ["DL 430", "Data Sarana Diklat", "PENDIDIKAN DAN LATIHAN", 13], ["DL 440", "Data Pengelola Diklat", "PENDIDIKAN DAN LATIHAN", 13], ["DL 450", "Data Penyelenggara Diklat", "PENDIDIKAN DAN LATIHAN", 13], ["DL 460", "Data Widyaiswara", "PENDIDIKAN DAN LATIHAN", 13], ["DL 470", "Data Program Diklat", "PENDIDIKAN DAN LATIHAN", 14], ["DL 500", "REGISTRASI SERTIFIKASI/STTPL PESERTA DIKLAT", "PENDIDIKAN DAN LATIHAN", 14], ["DL 510", "Surat Permohonan Kode Registrasi", "PENDIDIKAN DAN LATIHAN", 14], ["DL 520", "Buku Registrasi", "PENDIDIKAN DAN LATIHAN", 14], ["DL 530", "Surat Penyampaian Kode Registrasi", "PENDIDIKAN DAN LATIHAN", 14], ["DL 600", "EVALUASI PENGELENGGARAAN DIKLAT", "PENDIDIKAN DAN LATIHAN", 14], ["DL 610", "Evaluasi Materi Penyelenggaraan", "PENDIDIKAN DAN LATIHAN", 14], ["DL 620", "Evaluasi Pengajar/Instruktur/Fasilitator", "PENDIDIKAN DAN LATIHAN", 14], ["DL 630", "Evaluasi Peserta", "PENDIDIKAN DAN LATIHAN", 14], ["DL 640", "Evaluasi Sarana dan Prasarana", "PENDIDIKAN DAN LATIHAN", 14], ["DL 650", "Evaluasi Alumni Peserta", "PENDIDIKAN DAN LATIHAN", 14], ["DL 660", "Laporan Penyelenggaraan", "PENDIDIKAN DAN LATIHAN", 14], ["DL 670", "Evaluasi Alumni Diklat", "PENDIDIKAN DAN LATIHAN", 14], ["PK 000", "PENYIMPNANAN DEPOSIT BAHAN PUSTAKA", "KEPUSTAKAAN", 14], ["PK 010", "Bukti Penerimaan Koleksi Bahan Pustaka Deposit", "KEPUSTAKAAN", 14], ["PK 020", "Administrasi Pengolahan Deposit Bahan Pustaka", "KEPUSTAKAAN", 14], ["PK 100", "PENGADAAN BAHAN PUSTAKA", "KEPUSTAKAAN", 14], ["PK 110", "Buku Induk Koleksi", "KEPUSTAKAAN", 14], ["PK 120", "Daftar Buku Terseleksi", "KEPUSTAKAAN", 14], ["PK 130", "Daftar Buku Dalam Pemesanan", "KEPUSTAKAAN", 14], ["PK 140", "Daftar Buku Dalam Permintaan", "KEPUSTAKAAN", 14], ["PK 200", "PENGOLAHAN BAHAN PUSTAKA", "KEPUSTAKAAN", 14], ["PK 210", "Lembar Kerja Pengolahan Bahan Pustaka (buram, pengkatalogan)", "KEPUSTAKAAN", 14], ["PK 220", "Shell List /Jajaran Kartu Utama (master list )", "KEPUSTAKAAN", 14], ["PK 230", "Daftar Tambahan Buku (Assesion List )", "KEPUSTAKAAN", 14], ["PK 240", "Daftar/Jajaran Kendali (subjek dan pengarang)", "KEPUSTAKAAN", 14], ["PK 300", "LAYANAN JASA PERPUSTAKAAN DAN INFORMASI", "KEPUSTAKAAN", 14], ["PK 310", "Data dan statistik anggota, pengunjung dan peminjaman bahan pustaka", "KEPUSTAKAAN", 14], ["PK 320", "Pertanyaan, Rujukan dan Jawaban", "KEPUSTAKAAN", 14], ["PK 400", "PRESERVASI BAHAN PUSTAKA", "KEPUSTAKAAN", 14], ["PK 410", "Survei Kondisi Bahan Pustaka", "KEPUSTAKAAN", 14], ["PK 420", "Reprografi Bahan Pustaka", "KEPUSTAKAAN", 14], ["PK 500", "PEMBINAAN PERPUSTAKAAN", "KEPUSTAKAAN", 14], ["PK 510", "Bimbingan Teknis", "KEPUSTAKAAN", 14], ["PK 520", "Penyuluhan", "KEPUSTAKAAN", 14], ["PK 530", "Sosialisasi", "KEPUSTAKAAN", 14], ["IF 000", "RENCANA STRATEGIS MASTERPLAN PEMBANGUNAN SISTEM INFORMASI", "INFORMATIKA", 14], ["IF 100", "DOKUMENTASI ARSITEKTUR", "INFORMATIKA", 14], ["IF 110", "Sistem Informasi", "INFORMATIKA", 14], ["IF 120", "Sistem Aplikasi", "INFORMATIKA", 14], ["IF 130", "Infrastruktur", "INFORMATIKA", 14], ["IF 200", "PEREKAMAN DAN PEMUTAKHIRAN DATA", "INFORMATIKA", 14], ["IF 210", "Formulir Isian", "INFORMATIKA", 14], ["IF 220", "Daftar Petugas Perekaman", "INFORMATIKA", 14], ["IF 230", "Jadwal Pelaksanaan", "INFORMATIKA", 14], ["IF 240", "Laporan Hasil Perekaman dan Pemutakhiran Data", "INFORMATIKA", 14], ["IF 300", "MIGRASI SISTEM APLIKASI DATA", "INFORMATIKA", 14], ["IF 400", "DOKUMEN HOSTING", "INFORMATIKA", 14], ["IF 410", "Formulir Permintaan Hosting", "INFORMATIKA", 14], ["IF 420", "Layanan Hasil Uji Kelayakan", "INFORMATIKA", 14], ["IF 430", "Laporan Pelaksanaan Hosting", "INFORMATIKA", 14], ["IF 500", "LAYANAN BACK‐UP DATA DIGITAL", "INFORMATIKA", 14], ["PW 000", "RENCANA PENGAWASAN", "PENGAWASAN", 15], ["PW 010", "Rencana Strategis Pengawasan", "PENGAWASAN", 15], ["PW 020", "Rencana Kerja Tahunan", "PENGAWASAN", 15], ["PW 030", "Rencana Kinerja Tahunan", "PENGAWASAN", 15], ["PW 040", "Penetapan Kinerja Tahunan", "PENGAWASAN", 15], ["PW 050", "Rakor Pengawasan Tingkat Nasional", "PENGAWASAN", 15], ["PW 100", "PELAKSANAAN PENGAWASAN", "PENGAWASAN", 15], ["PW 110", "Naskah‐naskah yang berkaitan dengan audit mulai dari surat penugasan sampai dengan surat menyurat", "PENGAWASAN", 15], ["PW 120", "Laporan Hasil Audit (LHA), Laporan Hasil Pemeriksaan Operasional (LHPO), Laporan Hasil Evaluasi (LHE), Laporan Akuntan (LA), Laporan Auditor Independent (LAI) yang memerlukan Tindak Lanjut (TL)", "PENGAWASAN", 15], ["PW 130", "Laporan Hasil Audit Investigasi (LHAI) yang mengandung unsur Tindak Pidana Korupsi (TPK) dan memerlukan tindak lanjut.", "PENGAWASAN", 15], ["PW 140", "Laporan Perkembangan Penanganan Surat Pengaduan Masyarakat", "PENGAWASAN", 15], ["PW 150", "Laporan Pemutakhiran Data", "PENGAWASAN", 15], ["PW 160", "Laporan Perkembangan BMN", "PENGAWASAN", 15], ["PW 170", "Laporan kegiatna pendampingan penyusunan laporan keuangan dan Reviu Departemen/LPND", "PENGAWASAN", 15], ["PW 180", "Good Corporate Governance (GCG)", "PENGAWASAN", 15], ["TS 000", "PENYUSUNAN RENCANA KEGIATAN BIDANG TRANSFORMASI STATISTIK (TOR)", "TRANSFORMASI STATISTIK", 15], ["TS 010", "Transformasi Proses Bisnis Statistik", "TRANSFORMASI STATISTIK", 15], ["TS 020", "Transformasi TIK dan Komunikasi", "TRANSFORMASI STATISTIK", 15], ["TS 030", "Transformasi Manajemen Sumberdaya Manusia dan Kelembagaan", "TRANSFORMASI STATISTIK", 15], ["TS 100", "PENYUSUNAN BAHAN TERKAIT TRANSFORMASI STATISTIK", "TRANSFORMASI STATISTIK", 15], ["TS 110", "Rencana Sarana dan Prasarana Transformasi Statistik", "TRANSFORMASI STATISTIK", 15], ["TS 120", "Statistical Busines Frame Work dan Architecture (SBFA)", "TRANSFORMASI STATISTIK", 15], ["TS 130", "Analysis Document", "TRANSFORMASI STATISTIK", 15], ["TS 140", "CSI", "TRANSFORMASI STATISTIK", 15], ["TS 150", "BPR", "TRANSFORMASI STATISTIK", 15], ["TS 160", "Sosialisasi, Internalisasi, workshop terkait kegiatan transformasi", "TRANSFORMASI STATISTIK", 15], ["TS 170", "Deliverables", "TRANSFORMASI STATISTIK", 15], ["TS 200", "MANAJEMEN PERUBAHAN", "TRANSFORMASI STATISTIK", 15], ["TS 210", "Steering Committee (Dewan Pengarah)", "TRANSFORMASI STATISTIK", 15], ["TS 220", "Change Agent", "TRANSFORMASI STATISTIK", 15], ["TS 230", "Change Leader", "TRANSFORMASI STATISTIK", 15], ["TS 240", "Change Champion", "TRANSFORMASI STATISTIK", 15], ["TS 250", "Working Group", "TRANSFORMASI STATISTIK", 15], ["TS 260", "Evaluasi dan Monitoring Perkembangan Program STATCAP CERDAS; Sensus Daring/CPOC", "TRANSFORMASI STATISTIK", 15], ["TS 270", "Sosialisasi, Internalisasi, Workshop terkait kegiatan Manajemen Perubahan, Kick of Meeting", "TRANSFORMASI STATISTIK", 15], ["TS 300", "KETERPADUAN TRANSFORMASI", "TRANSFORMASI STATISTIK", 15], ["TS 310", "Mendukung Implementasi Transformasi: CAPI SAKERNAS, Continous Survey", "TRANSFORMASI STATISTIK", 15], ["TS 400", "LAPORAN TRANSFORMASI STATISTIK", "TRANSFORMASI STATISTIK", 15], ["TS 410", "Laporan Kemajuan", "TRANSFORMASI STATISTIK", 15], ["TS 420", "Laporan Bulanan", "TRANSFORMASI STATISTIK", 15], ["TS 430", "Lapiran Triwulanan", "TRANSFORMASI STATISTIK", 15], ["TS 440", "Laporan Tahunan", "TRANSFORMASI STATISTIK", 15]];
const get = id => document.getElementById(id);
const normalize = value => value.toLowerCase().replace(/\bpelatian\b/g, 'pelatihan').replace(/[^a-z0-9]+/g, ' ').trim();
const formatCode = code => code.replace(/^(\p{L}+)\s+(?=\d)/u, '$1.');
const compact = value => normalize(value).replaceAll(' ', '');
const records = katalog.map(([code,label,group,page]) => ({
  code,label,group,page,key:compact(code), title:normalize(label), text:normalize([code,label,group].join(' '))
}));
const byCode = new Map(records.map(record => [record.code,record]));
const groups = new Map(records.map(record => [record.code.split(' ')[0],record.group]));
const today = new Date();
const currentYear = today.getFullYear();
const dateValue = [currentYear, String(today.getMonth() + 1).padStart(2,'0'), String(today.getDate()).padStart(2,'0')].join('-');
get('date').min = currentYear + '-01-01';
get('date').max = currentYear + '-12-31';
get('date').value = dateValue;
for (const [prefix,label] of groups) {
  if (['SS','VS'].includes(prefix)) continue;
  const option = document.createElement('option');
  option.value = prefix;
  option.textContent = prefix + ' — ' + label;
  get('purpose').append(option);
}
let selected;
let issued = [];
let inserting = false;
let historyPage = 1;
let historyRequest = 0;
let anchorRequest = 0;
const demoMode = get('app-shell').dataset.demo === 'true';

function makeDemoRecord({series, date = dateValue, base, suffix = 0, subject, code}) {
  let suffixIndex = suffix;
  let suffixText = '';
  while (suffixIndex > 0) {
    suffixIndex -= 1;
    suffixText = String.fromCharCode(65 + suffixIndex % 26) + suffixText;
    suffixIndex = Math.floor(suffixIndex / 26);
  }
  suffixText = suffixText ? '.' + suffixText : '';
  return {
    series,
    date,
    base,
    suffix,
    number:series + '-' + String(base).padStart(4,'0') + suffixText + '/52020/' + formatCode(code) + '/' + currentYear,
    subject,
    code
  };
}

let demoRegister = demoMode ? [
  makeDemoRecord({series:'B', base:1, subject:'Surat tugas petugas pendataan', code:'KP 650'}),
  makeDemoRecord({series:'B', base:2, subject:'Undangan rapat koordinasi kegiatan statistik', code:'HM 340'}),
  makeDemoRecord({series:'B', base:3, subject:'Pelatihan petugas sensus', code:'SS 220'}),
  makeDemoRecord({series:'SK', base:1, subject:'Penetapan tim pelaksana kegiatan', code:'KP 170'})
] : [];
const demoCounters = new Map(['B','SK','R','S'].map(series => [
  series,
  Math.max(0, ...demoRegister.filter(row => row.series === series && row.suffix === 0).map(row => row.base))
]));
const demoSuffixCounters = new Map();

function createDemoNumbers({series, date, subject, code, quantity, anchorBase}) {
  let base = anchorBase;
  let firstSuffix = 0;
  if (anchorBase !== undefined) {
    const anchorExists = demoRegister.some(row =>
      row.series === series && row.date === date && row.base === anchorBase && row.suffix === 0
    );
    if (!anchorExists) throw new Error('Nomor induk simulasi tidak ditemukan pada tanggal dan jenis surat tersebut.');
    const counterKey = series + ':' + anchorBase;
    firstSuffix = (demoSuffixCounters.get(counterKey) || 0) + 1;
    demoSuffixCounters.set(counterKey, firstSuffix + quantity - 1);
  } else {
    base = (demoCounters.get(series) || 0) + 1;
    demoCounters.set(series, base + quantity - 1);
  }

  const records = Array.from({length:quantity}, (_, index) => makeDemoRecord({
    series,
    date,
    base:anchorBase === undefined ? base + index : base,
    suffix:anchorBase === undefined ? 0 : firstSuffix + index,
    subject,
    code
  }));
  demoRegister.push(...records);
  return records;
}

async function fetchRegister({series = get('history-series').value, date, page = historyPage, pageSize = Number(get('history-page-size').value)} = {}) {
  if (demoMode) {
    const records = demoRegister
      .filter(row => row.series === series)
      .sort((a,b) => b.base - a.base || b.suffix - a.suffix);
    const usage = new Map();
    for (const row of demoRegister) usage.set(row.code, (usage.get(row.code) || 0) + 1);
    const favorites = [...usage.entries()]
      .sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0,5)
      .map(([code,count]) => ({code,count}));
    return {
      records:records.slice((page - 1) * pageSize, page * pageSize),
      total:records.length,
      favorites,
      anchors:date ? records.filter(row => row.date === date && row.suffix === 0) : []
    };
  }

  const params = new URLSearchParams({
    series,
    year: String(currentYear),
    page: String(page),
    pageSize: String(pageSize)
  });
  if (date) params.set('date', date);
  const response = await fetch('/api/register?' + params, {cache:'no-store'});
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || 'Register tidak dapat dibaca.');
  return result;
}

async function createNumbers(payload) {
  if (demoMode) return createDemoNumbers(payload);

  const response = await fetch('/api/register', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(payload)
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || 'Nomor tidak dapat dibuat.');
  return result.records;
}

async function refreshAnchors() {
  const date = get('date').value;
  if (!date) return;
  const requestId = ++anchorRequest;
  try {
    const {anchors} = await fetchRegister({series:get('series').value, date, page:1});
    if (requestId !== anchorRequest) return;
    get('anchor').replaceChildren(...(anchors.length ? anchors : [{base:'',number:'Belum ada nomor pada tanggal dan seri ini'}]).map(row => {
      const option = document.createElement('option');
      option.value = row.base;
      option.textContent = row.number;
      return option;
    }));
    get('form-status').textContent = '';
  } catch (error) {
    if (requestId !== anchorRequest) return;
    get('form-status').textContent = error.message;
  }
}

function showMenu(menu) {
  inserting = menu === 'insert';
  const catalogOpen = menu === 'catalog';
  get('catalog-panel').hidden = !catalogOpen;
  get('number-panel').hidden = catalogOpen;
  for (const id of ['regular','insert','catalog']) get(id).setAttribute('aria-pressed', String(id === menu));
  get('insert-note').hidden = !inserting;
  get('anchor-field').hidden = !inserting;
  get('issue').textContent = inserting ? 'Sisipkan Nomor' : 'Ambil Nomor';
  get('form-status').textContent = '';
  if (inserting) refreshAnchors();
  if (catalogOpen) renderCatalog();
}

function renderCatalog() {
  const query = normalize(get('catalog-search').value);
  const results = records.filter(record => !query || record.key.startsWith(compact(query)) || query.split(' ').every(word=>record.text.includes(word)));
  get('catalog-count').textContent = results.length + ' kode';
  get('catalog-items').replaceChildren(...results.map(record => {
    const row = document.createElement('li');
    const link = document.createElement('a');
    link.href = 'klasifikasi-bps.pdf#page=' + record.page;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = formatCode(record.code) + ' · ' + record.label;
    row.append(link);
    return row;
  }));
}

for (const id of ['regular','insert','catalog']) get(id).onclick = () => showMenu(id);
get('catalog-search').oninput = renderCatalog;
get('date').onchange = () => {
  if (inserting) refreshAnchors();
  renderHistory();
};

function display(items, message) {
  get('choice-status').textContent = message;
  get('matches').replaceChildren(...items.slice(0,15).map(record => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const meta = document.createElement('small');
    button.type = 'button';
    button.className = 'choice';
    button.textContent = formatCode(record.code) + ' · ' + record.label;
    meta.textContent = classificationPath(record).replace(/\b([A-Z]{2}) (\d+)/g, '$1.$2') + ' · Halaman ' + record.page;
    button.append(meta);
    button.onclick = () => selectRecord(record);
    li.append(button);
    return li;
  }));
}

function selectRecord(record) {
  selected = record;
  get('selected').textContent = 'Kode dipilih: ' + formatCode(record.code) + ' · ' + record.label;
  get('form-status').textContent = '';
}

function registerCode(row) {
  if (row.code && byCode.has(row.code)) return byCode.get(row.code);
  const savedCode = typeof row.number === 'string' ? row.number.split('/')[2] : '';
  return records.find(record => formatCode(record.code) === savedCode);
}

function renderFavorites() {
  const usage = new Map();
  for (const row of register) {
    const record = registerCode(row);
    if (record) usage.set(record.code, (usage.get(record.code) || 0) + 1);
  }
  const favorites = [...usage.entries()]
    .sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0,5)
    .map(([code,count]) => ({record:byCode.get(code),count}));
  get('favorites-empty').hidden = favorites.length > 0;
  get('favorite-codes').replaceChildren(...favorites.map(({record,count}) => {
    const item = document.createElement('li');
    const button = document.createElement('button');
    const usageCount = document.createElement('small');
    button.type = 'button';
    button.className = 'favorite-choice';
    button.textContent = formatCode(record.code) + ' · ' + record.label;
    usageCount.textContent = 'Dipakai pada ' + count + ' nomor';
    button.append(usageCount);
    button.onclick = () => selectRecord(record);
    item.append(button);
    return item;
  }));
}

get('search').oninput = event => {
  const query = normalize(event.target.value);
  if (!query) {
    display([], '');
    return;
  }
  const parts = query.split(' ');
  const items = records.filter(record => record.key.startsWith(compact(query)) || parts.every(word => record.text.includes(word)));
  items.sort((a,b) => Number(b.key === compact(query)) - Number(a.key === compact(query)));
  display(items, items.length ? items.length + ' hasil' + (items.length > 15 ? ' · 15 pertama ditampilkan' : '') : 'Kode atau kata kunci tidak ditemukan.');
};

const stages = [
  ['210','200','Pelatihan/Uji Coba',/\b(?:pelatihan|bimtek) (?:calon )?instruktur\b/],
  ['230','200','Pelatihan/Uji Coba',/\b(?:pelatihan|bimtek) (?:calon )?petugas pengolahan\b/],
  ['220','200','Pelatihan/Uji Coba',/\b(?:pelatihan|bimtek) (?:calon )?petugas\b(?! pengolahan)/],
  ['350','300','Pelaksanaan Lapangan',/\b(?:pengawasan lapangan|pengawasan pencacahan|pengawasan pendataan)\b/],
  ['330','300','Pelaksanaan Lapangan',/\b(?:pengumpulan data|pencacahan lapangan)\b/],
  ['360','300','Pelaksanaan Lapangan',/\b(?:monitoring kualitas|pemantauan kualitas)\b/],
  ['120','100','Persiapan',/\b(?:penyusunan|perancangan) kuesioner\b/]
];
const paths = new Map([['KP 650','Kepegawaian → KP 600 Administrasi Pegawai']]);
for (const [code,parent,stage] of stages) {
  for (const [prefix,group] of [['SS','Sensus'],['VS','Survei']]) {
    paths.set(prefix + ' ' + code, group + ' → ' + prefix + ' ' + parent + ' ' + stage);
  }
}

function classificationPath(record) {
  if (paths.has(record.code)) return paths.get(record.code);
  const [prefix,number] = record.code.split(' ');
  const parents = [100,10].map(scale => prefix + ' ' + String(Math.floor(Number(number) / scale) * scale).padStart(number.length,'0'));
  const labels = [...new Set(parents)].filter(code => code !== record.code && byCode.has(code))
    .map(code => code + ' ' + byCode.get(code).label.split(':')[0]);
  return [record.group,...labels].join(' → ');
}

const contexts = [
  ['KU 420',/\b(?:surat perintah membayar|surat perintah pencairan dana)\b/,'Dokumen merupakan perintah pembayaran atau pencairan dana dalam penatausahaan anggaran.'],
  ['KP 663',/\b(?:cuti tahunan|cuti rutin tahunan)\b/,'Dokumen berkaitan dengan administrasi cuti tahunan pegawai.'],
  ['KU 340',/\b(?:belanja perjalanan|pertanggungjawaban biaya perjalanan|penggantian biaya perjalanan)\b/,'Dokumen berkaitan dengan belanja perjalanan pada pelaksanaan anggaran.'],
  ['KU 530',/\brekonsiliasi (?:data )?laporan keuangan\b/,'Kegiatannya adalah rekonsiliasi data laporan keuangan.'],
  ['KA 410',/\bpemindahan arsip inaktif\b/,'Kegiatannya adalah pemindahan arsip inaktif.'],
  ['KA 510',/\bberita acara pemusnahan arsip\b/,'Dokumen merekam pelaksanaan pemusnahan arsip dalam berita acara.'],
  ['KA 540',/\b(?:sk|surat keputusan) (?:tentang )?pemusnahan arsip\b/,'Dokumen menetapkan pemusnahan arsip.'],
  ['KA 730',/\b(?:bimtek|bimbingan teknis).{0,35}\bkearsipan\b/,'Bimbingan teknis ini merupakan pembinaan kearsipan.'],
  ['PK 510',/\b(?:bimtek|bimbingan teknis).{0,35}\bperpustakaan\b/,'Bimbingan teknis ini merupakan pembinaan perpustakaan.'],
  ['PL 210',/\bpengadaan langsung (?:barang|peralatan|inventaris)\b|\bpengadaan barang (?:secara )?langsung\b/,'Kegiatannya adalah pengadaan barang secara langsung.'],
  ['HM 340',/\b(?:magang|praktik kerja lapangan|praktek kerja lapangan).{0,45}\b(?:mahasiswa|siswa|sekolah|universitas)\b/,'Kegiatan magang atau PKL ini berkaitan dengan hubungan dengan perguruan tinggi atau sekolah.'],
  ['IF 410',/\b(?:permintaan|permohonan) hosting\b/,'Dokumen mengajukan permintaan hosting.'],
  ['PR 710',/\bevaluasi program (?:unit kerja|satker|satuan kerja)\b/,'Yang dievaluasi adalah program unit kerja.'],
  ['HK 610',/\bnota kesepahaman (?:dalam negeri|dengan pemerintah daerah)\b/,'Dokumen merupakan nota kesepahaman dalam negeri.']
];
const generic = new Set('surat sk keputusan undangan perihal tentang untuk dari pada oleh kepada dan dalam yang kegiatan program laporan dokumen pengajuan permohonan pengantar penetapan pelaksanaan kantor bps tahun rapat hasil permintaan'.split(' '));
const terms = value => new Set(normalize(value).split(' ').filter(word => word.length >= 3 && !generic.has(word) && !/^\d+$/.test(word)));

// Each concept accepts everyday wording. Separate concepts may occur in any order.
const concept = {
  training:/\b(?:pelatihan|bimtek|pembekalan|orientasi|melatih|kelas persiapan|penyegaran)\b/,
  officer:/\b(?:petugas|pencacah|enumerator|ppl|pml|mitra pendataan|tim lapangan)\b/,
  instructor:/\b(?:instruktur|narasumber pelatihan|fasilitator pelatihan)\b/,
  processing:/\b(?:pengolahan|operator entri|operator pengolahan|operator input)\b/,
  field:/\b(?:lapangan|pendataan|pencacahan|petugas|enumerator)\b/,
  supervise:/\b(?:pengawasan|mengawasi|supervisi|penyeliaan|mendampingi petugas|memantau pencacahan|cek kerja)\b/,
  collect:/\b(?:mengumpulkan data|pengumpulan data|mencacah|mewawancarai responden|wawancara responden|mendata rumah tangga|kunjungan ke responden)\b/,
  design:/\b(?:menyusun|menyiapkan|penyusunan|merancang|perancangan|membuat|mengembangkan)\b/,
  questionnaire:/\b(?:kuesioner|kuisioner|formulir pencacahan|daftar pertanyaan)\b/,
  leave:/\b(?:cuti|jatah libur)\b/,
  yearly:/\b(?:tahunan|tahun ini|jatah cuti|sisa cuti)\b/,
  travel:/\b(?:perjalanan|transportasi|tiket|ongkos)\b/,
  cost:/\b(?:biaya|ongkos|klaim|belanja|reimburse|penggantian|pertanggungjawaban|bayar)\b/,
  archives:/\b(?:arsip|kearsipan|berkas inaktif)\b/,
  inactive:/\b(?:inaktif|sudah jarang dipakai|tidak aktif)\b/,
  move:/\b(?:pindah|memindahkan|pemindahan|dipindahkan)\b/,
  destroy:/\b(?:pemusnahan|memusnahkan|dimusnahkan)\b/,
  minutes:/\b(?:berita acara|bukti pelaksanaan)\b/,
  decree:/\b(?:sk|surat keputusan|penetapan|menetapkan)\b/
};
function everydayCandidates(text) {
  const has = key => concept[key].test(text);
  const out = [];
  if (has('training') && has('instructor')) out.push('210');
  else if (has('training') && has('processing')) out.push('230');
  else if (has('training') && has('officer')) out.push('220');
  if (!has('training') && has('supervise') && has('field')) out.push('350');
  if (!has('training') && !out.includes('350') && has('collect')) out.push('330');
  if (has('design') && has('questionnaire')) out.push('120');
  return out;
}
const everydayContexts = [
  ['KP 663',['leave','yearly'],'Administrasi pemakaian jatah cuti tahunan.'],
  ['KU 340',['travel','cost'],'Pengeluaran atau penggantian biaya perjalanan.'],
  ['KA 410',['archives','inactive','move'],'Pemindahan arsip inaktif.'],
  ['KA 510',['archives','destroy','minutes'],'Bukti pelaksanaan pemusnahan arsip.'],
  ['KA 540',['archives','destroy','decree'],'Keputusan untuk menetapkan pemusnahan arsip.']
];
function recommendCode(purpose, subject, context='') {
  const description = normalize(subject + ' ' + context);
  const subjectStart = normalize(subject);
  if (purpose === 'assignment' || (!purpose && (
    /^(?:surat tugas|surat perintah dinas|menugaskan|penugasan pegawai)\b/.test(subjectStart) ||
    /\b(?:dasar penugasan|menugaskan|memberi mandat kepada|perintah kepada pegawai)\b/.test(normalize(context))
  ))) {
    return {codes:['KP 650'], message:'Dokumen menjadi dasar penugasan pegawai. KP.650 mencakup Surat Perintah Dinas/Surat Tugas, termasuk penugasan lapangan sensus atau survei.'};
  }
  const matches = contexts.filter(([code,pattern]) => (!purpose || code.startsWith(purpose + ' ')) && pattern.test(description));
  for (const [code,signals,reason] of everydayContexts) {
    if ((!purpose || code.startsWith(purpose + ' ')) && signals.every(signal=>concept[signal].test(description)) && !matches.some(([existing])=>existing === code)) {
      matches.push([code,null,reason]);
    }
  }
  if (matches.length) return {codes:matches.map(([code])=>code), message:matches.map(([, ,reason])=>reason).join(' ')};
  if (!purpose && /^(?:surat perintah|sk penetapan petugas)\b/.test(subjectStart)) {
    return {codes:[],message:'Jelaskan tujuan surat. Jika ini dasar penugasan pegawai, pilih fungsi Menugaskan pegawai. Untuk dokumen kegiatan, pilih kelompok arsip terkait.'};
  }
  const isSensus = /\b(?:sensus|se2026|st2023|sp2020|se 2026|st 2023|sp 2020)\b/.test(description);
  const isSurvei = /\b(?:survei|survey|susenas|sakernas|sutas|seruti)\b/.test(description);
  const stats = ['SS','VS'].includes(purpose) ? purpose : !purpose && isSensus !== isSurvei ? (isSensus ? 'SS' : 'VS') : '';
  const matched = [...new Set([...everydayCandidates(description), ...stages.filter(([, , ,pattern])=>pattern.test(description)).map(([code])=>code)])];
  if (stats && matched.length) {
    return {codes:matched.map(code=>stats + ' ' + code),message:'Saran mengikuti kegiatan ' + (stats === 'SS' ? 'sensus' : 'survei') + ' dan tahap yang disebut dalam uraian.'};
  }
  if (!purpose && matched.length && !stats) {
    return {
      codes:matched.flatMap(code=>['SS ' + code,'VS ' + code]).slice(0,6),
      message:'Jika ini kegiatan statistik, pilih kandidat sesuai programnya: SS untuk sensus, VS untuk survei. Tambahkan konteks jika kegiatan berasal dari fungsi lain.'
    };
  }
  const query = terms(description);
  const ranked = records.filter(record => !purpose || record.code.startsWith(purpose + ' '))
    .map(record => {
      const label = terms(record.label.split(':')[0]);
      const hits = [...label].filter(word=>query.has(word)).length;
      const coverage = hits / Math.max(label.size,1);
      const contextBoost = stats && record.code.startsWith(stats + ' ') ? 0.35 : 0;
      return {code:record.code,hits,coverage,score:hits + coverage + contextBoost};
    })
    .filter(item=>item.hits >= 2 || item.hits === 1 && item.coverage >= 0.33)
    .sort((a,b)=>b.score-a.score);
  const candidates = ranked.slice(0,purpose ? 5 : 10);
  return {
    codes:candidates.map(item=>item.code),
    message:candidates.length
      ? (purpose ? 'Kandidat dalam kelompok yang dipilih.' : 'Kandidat dari semua kelompok arsip, diurutkan menurut kecocokan uraian.') + ' Periksa jalur klasifikasi sebelum memilih.'
      : 'Belum ada kandidat dari uraian ini. Tambahkan objek atau tujuan surat, misalnya apa yang dibayar, dipindahkan, atau dilaporkan.'
  };

}

get('purpose').onchange = () => {
  selected = undefined;
  get('selected').textContent = 'Belum ada kode yang dipilih.';
  get('search').value = '';
  display([], '');
};

get('recommend').onclick = () => {
  const result = recommendCode(get('purpose').value, get('subject').value, get('context').value);
  get('search').value = '';
  display(result.codes.map(code => records.find(record => record.code === code)).filter(Boolean), result.message);
};

get('series').onchange = () => {
  if (inserting) refreshAnchors();
  get('sk-field').hidden = get('series').value !== 'SK';
  get('subject-label').textContent = get('series').value === 'SK' ? 'Tentang' : 'Perihal surat';
};

document.querySelectorAll('[name=mode]').forEach(input => input.onchange = () => {
  const batch = input.value === 'batch';
  get('batch').hidden = !batch;
  get('quantity').disabled = !batch;
});

get('form').onsubmit = async event => {
  event.preventDefault();
  const subject = get('subject').value.trim();
  if (!subject || !selected) {
    get('form-status').textContent = subject ? 'Pilih kode klasifikasi terlebih dahulu.' : 'Isi perihal surat.';
    return;
  }
  const series = get('series').value;
  const batch = document.querySelector('[name=mode]:checked').value === 'batch';
  const quantity = batch ? get('quantity').valueAsNumber : 1;
  if (!Number.isInteger(quantity) || quantity < (batch ? 2 : 1) || quantity > 1000) {
    get('form-status').textContent = 'Jumlah nomor harus antara ' + (batch ? '2' : '1') + ' dan 1000.';
    return;
  }
  const date = get('date').value;
  const base = Number(get('anchor').value);
  const submitButton = get('issue');
  submitButton.disabled = true;
  get('form-status').textContent = demoMode ? 'Membuat nomor simulasi sementara…' : 'Menyimpan nomor ke register bersama…';
  try {
    issued = (await createNumbers({
      series,
      date,
      subject,
      code:selected.code,
      quantity,
      ...(inserting ? {anchorBase:base} : {})
    })).map(record => record.number);
    historyPage = 1;
    get('history-series').value = series;
    await renderHistory();
    get('numbers').replaceChildren(...issued.map(number => {
      const row = document.createElement('li');
      row.textContent = number;
      return row;
    }));
    get('result-title').textContent = demoMode ? quantity + ' nomor simulasi dibuat' : quantity + ' nomor berhasil dibuat';
    get('detail').textContent = subject + ' · ' + selected.label;
    get('copy-status').textContent = '';
    get('form-status').textContent = '';
    get('result').hidden = false;
    get('result').scrollIntoView({block:'nearest'});
    if (inserting) await refreshAnchors();
  } catch (error) {
    get('form-status').textContent = error.message;
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = inserting ? 'Sisipkan Nomor' : 'Ambil Nomor';
  }
};

get('copy').onclick = async () => {
  try {
    await navigator.clipboard.writeText(issued.join('\n'));
    get('copy-status').textContent = 'Nomor disalin.';
  } catch {
    get('copy-status').textContent = 'Pilih dan salin nomor secara manual.';
  }
};

async function renderHistory() {
  const series = get('history-series').value;
  const pageSize = Number(get('history-page-size').value);
  const requestId = ++historyRequest;
  get('history-status').textContent = demoMode ? 'Memuat riwayat simulasi…' : 'Memuat riwayat…';
  try {
    const requestedPage = historyPage;
    const result = await fetchRegister({series, page:requestedPage, pageSize});
    const pageCount = Math.max(1, Math.ceil(result.total / pageSize));
    historyPage = Math.min(historyPage, pageCount);
    const pageResult = historyPage === requestedPage
      ? result
      : await fetchRegister({series, page:historyPage, pageSize});
    if (requestId !== historyRequest) return;
    get('history-status').textContent = result.total
      ? result.total + ' nomor tercatat'
      : 'Belum ada nomor tercatat untuk jenis surat ini.';
    const start = (historyPage - 1) * pageSize;
    get('history-page-info').textContent = 'Halaman ' + historyPage + ' dari ' + pageCount
      + ' · Menampilkan ' + (result.total ? start + 1 : 0) + '–' + Math.min(start + pageSize, result.total)
      + ' dari ' + result.total + ' nomor';
    get('history-pagination').hidden = pageCount <= 1;
    get('history-prev').disabled = historyPage <= 1;
    get('history-next').disabled = historyPage >= pageCount;
    get('history-rows').replaceChildren(...pageResult.records.map(record => {
      const row = document.createElement('li');
      const number = document.createElement('strong');
      const detail = document.createElement('span');
      number.textContent = record.number;
      detail.textContent = record.date.split('-').reverse().join('/') + (record.subject ? ' · ' + record.subject : '');
      row.append(number, detail);
      return row;
    }));
    renderFavorites(result.favorites);
  } catch (error) {
    if (requestId !== historyRequest) return;
    get('history-status').textContent = error.message;
    get('history-pagination').hidden = true;
    get('history-rows').replaceChildren();
  }
}

function renderFavorites(favorites = []) {
  const topFavorites = favorites
    .map(item => ({record:byCode.get(item.code), count:item.count}))
    .filter(item => item.record);
  get('favorites-empty').hidden = topFavorites.length > 0;
  get('favorite-codes').replaceChildren(...topFavorites.map(({record,count}) => {
    const item = document.createElement('li');
    const button = document.createElement('button');
    const usageCount = document.createElement('small');
    button.type = 'button';
    button.className = 'favorite-choice';
    button.textContent = formatCode(record.code) + ' · ' + record.label;
    usageCount.textContent = 'Dipakai pada ' + count + ' nomor';
    button.append(usageCount);
    button.onclick = () => selectRecord(record);
    item.append(button);
    return item;
  }));
}

get('history-series').onchange = () => { historyPage = 1; renderHistory(); };
get('history-page-size').onchange = () => { historyPage = 1; renderHistory(); };
get('history-prev').onclick = () => { historyPage = Math.max(1, historyPage - 1); renderHistory(); };
get('history-next').onclick = () => { historyPage += 1; renderHistory(); };
renderHistory();
