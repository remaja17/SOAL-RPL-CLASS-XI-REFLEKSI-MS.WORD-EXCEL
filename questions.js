/* Bank soal 50 nomor: 15 Word, 15 Excel, 20 Basis Data */
const QUESTIONS = [
  {
    "section": "WORD",
    "level": "Medium",
    "question": "Fitur Styles pada Microsoft Word paling tepat digunakan untuk ...",
    "options": [
      "Mengatur format judul dan paragraf secara konsisten",
      "Menghitung nilai numerik dalam dokumen",
      "Menghapus seluruh halaman kosong",
      "Mengubah dokumen menjadi database"
    ],
    "answer": "A",
    "explanation": "Styles menjaga konsistensi format dan membantu pembuatan daftar isi otomatis.",
    "number": 1
  },
  {
    "section": "WORD",
    "level": "Medium",
    "question": "Sebelum membuat daftar isi otomatis, hal terpenting yang harus dilakukan adalah ...",
    "options": [
      "Memberi warna pada semua judul",
      "Menerapkan Heading Styles pada judul dan subjudul",
      "Mengubah margin menjadi Narrow",
      "Mengetik daftar isi secara manual"
    ],
    "answer": "B",
    "explanation": "Word mengambil struktur daftar isi dari Heading Styles.",
    "number": 2
  },
  {
    "section": "WORD",
    "level": "Medium",
    "question": "Track Changes berguna ketika ...",
    "options": [
      "Melacak perubahan saat dokumen ditinjau bersama",
      "Mengurutkan data tabel",
      "Menghitung rata-rata nilai",
      "Membuat diagram relasi"
    ],
    "answer": "A",
    "explanation": "Track Changes merekam penambahan, penghapusan, dan perubahan dokumen.",
    "number": 3
  },
  {
    "section": "WORD",
    "level": "Medium",
    "question": "Agar teks mengalir di sekeliling gambar, pengaturan yang digunakan adalah ...",
    "options": [
      "Text Wrapping",
      "Word Count",
      "Page Color",
      "Mail Merge"
    ],
    "answer": "A",
    "explanation": "Text Wrapping mengatur hubungan gambar dengan aliran teks.",
    "number": 4
  },
  {
    "section": "WORD",
    "level": "Medium",
    "question": "Section Break digunakan ketika dokumen membutuhkan ...",
    "options": [
      "Pengaturan layout berbeda pada bagian tertentu",
      "Penghapusan semua komentar",
      "Penggabungan dua file Excel",
      "Pemeriksaan ejaan saja"
    ],
    "answer": "A",
    "explanation": "Section Break membagi dokumen menjadi bagian yang dapat memiliki format halaman berbeda.",
    "number": 5
  },
  {
    "section": "WORD",
    "level": "Medium",
    "question": "Mail Merge paling tepat digunakan untuk ...",
    "options": [
      "Membuat surat massal dengan data penerima berbeda",
      "Membuat animasi presentasi",
      "Menghitung nilai rata-rata",
      "Menggambar ERD"
    ],
    "answer": "A",
    "explanation": "Mail Merge menggabungkan template dokumen dengan sumber data penerima.",
    "number": 6
  },
  {
    "section": "WORD",
    "level": "Medium",
    "question": "Sampul tidak bernomor, sedangkan BAB I dimulai dari halaman 1. Solusi yang tepat adalah ...",
    "options": [
      "Mengetik nomor secara manual",
      "Menggunakan Section Break lalu mengatur nomor halaman pada section berikutnya",
      "Menghapus sampul",
      "Mengubah ukuran kertas"
    ],
    "answer": "B",
    "explanation": "Section terpisah memungkinkan penomoran dimulai ulang pada bagian BAB I.",
    "number": 7
  },
  {
    "section": "WORD",
    "level": "Hard",
    "question": "Judul tidak muncul di Navigation Pane. Penyebab paling mungkin adalah ...",
    "options": [
      "Judul belum diberi Heading Style",
      "Warna font terlalu gelap",
      "Dokumen terlalu pendek",
      "Ukuran kertas A4"
    ],
    "answer": "A",
    "explanation": "Navigation Pane membaca struktur heading, bukan sekadar teks besar atau tebal.",
    "number": 8
  },
  {
    "section": "WORD",
    "level": "Hard",
    "question": "Cara terbaik agar seluruh subjudul memiliki format seragam adalah ...",
    "options": [
      "Mengatur satu per satu",
      "Memodifikasi style Heading yang digunakan",
      "Menambahkan spasi manual",
      "Mengubah subjudul menjadi gambar"
    ],
    "answer": "B",
    "explanation": "Perubahan style diterapkan konsisten pada semua teks yang menggunakan style tersebut.",
    "number": 9
  },
  {
    "section": "WORD",
    "level": "Hard",
    "question": "Perbedaan Page Break dan Section Break adalah ...",
    "options": [
      "Keduanya selalu sama",
      "Page Break memulai halaman baru, Section Break membagi bagian dengan pengaturan format yang dapat berbeda",
      "Section Break hanya untuk tabel",
      "Page Break menghapus halaman"
    ],
    "answer": "B",
    "explanation": "Section Break membuat section baru; Page Break hanya memulai halaman baru.",
    "number": 10
  },
  {
    "section": "WORD",
    "level": "Hard",
    "question": "Agar baris judul tabel muncul kembali pada setiap halaman lanjutan, gunakan ...",
    "options": [
      "Repeat Header Rows",
      "Split Cells",
      "AutoCorrect",
      "Format Painter"
    ],
    "answer": "A",
    "explanation": "Repeat Header Rows mengulang baris header tabel pada halaman berikutnya.",
    "number": 11
  },
  {
    "section": "WORD",
    "level": "Hard",
    "question": "Mail Merge menghasilkan nama penerima yang sama pada semua surat. Hal pertama yang perlu diperiksa adalah ...",
    "options": [
      "Sumber data dan pemetaan field merge",
      "Warna halaman",
      "Ukuran ikon Word",
      "Pengaturan speaker"
    ],
    "answer": "A",
    "explanation": "Sumber data atau field yang salah dapat menyebabkan data penerima tidak berubah.",
    "number": 12
  },
  {
    "section": "WORD",
    "level": "Expert",
    "question": "Header berbeda untuk halaman ganjil dan genap serta halaman pertama tanpa header. Pengaturan yang diperlukan adalah ...",
    "options": [
      "Different First Page dan Different Odd & Even Pages",
      "Landscape dan Columns",
      "Track Changes dan Comments",
      "Protect Document saja"
    ],
    "answer": "A",
    "explanation": "Kedua opsi tersebut mengatur halaman pertama dan pola ganjil-genap.",
    "number": 13
  },
  {
    "section": "WORD",
    "level": "Expert",
    "question": "Untuk menjaga tampilan dokumen saat dibuka di komputer lain, tindakan paling tepat adalah ...",
    "options": [
      "Mengandalkan spasi manual",
      "Menggunakan Styles dan membagikan salinan PDF",
      "Mengubah semua teks menjadi gambar",
      "Menghapus seluruh section"
    ],
    "answer": "B",
    "explanation": "Styles menjaga struktur dokumen dan PDF mempertahankan tata letak.",
    "number": 14
  },
  {
    "section": "WORD",
    "level": "Expert",
    "question": "Daftar isi otomatis tidak memperbarui nomor halaman setelah isi dokumen berubah. Tindakan yang benar adalah ...",
    "options": [
      "Menghapus semua heading",
      "Memilih Update Table lalu Update entire table",
      "Mengetik ulang semua nomor halaman",
      "Mengubah dokumen menjadi TXT"
    ],
    "answer": "B",
    "explanation": "Update entire table memperbarui teks heading dan nomor halaman.",
    "number": 15
  },
  {
    "section": "EXCEL",
    "level": "Medium",
    "question": "Rumus untuk menjumlahkan nilai pada sel B2 sampai B11 adalah ...",
    "options": [
      "=ADD(B2:B11)",
      "=SUM(B2:B11)",
      "=TOTAL(B2-B11)",
      "=COUNT(B2:B11)"
    ],
    "answer": "B",
    "explanation": "SUM menjumlahkan nilai dalam rentang sel.",
    "number": 16
  },
  {
    "section": "EXCEL",
    "level": "Medium",
    "question": "Fungsi AVERAGE digunakan untuk ...",
    "options": [
      "Menghitung nilai rata-rata",
      "Menghitung jumlah sel berisi teks",
      "Mencari nilai terbesar",
      "Menggabungkan teks"
    ],
    "answer": "A",
    "explanation": "AVERAGE menghasilkan rata-rata aritmetika dari data numerik.",
    "number": 17
  },
  {
    "section": "EXCEL",
    "level": "Medium",
    "question": "Jika nilai di C2 minimal 75 maka tampil LULUS, selain itu REMEDIAL. Rumus yang tepat adalah ...",
    "options": [
      "=IF(C2>=75,\"LULUS\",\"REMEDIAL\")",
      "=SUM(C2,75)",
      "=COUNTIF(C2,75)",
      "=MAX(C2,\"LULUS\")"
    ],
    "answer": "A",
    "explanation": "IF menguji kondisi logika dan mengembalikan hasil sesuai kondisi benar atau salah.",
    "number": 18
  },
  {
    "section": "EXCEL",
    "level": "Medium",
    "question": "Fungsi COUNT digunakan untuk menghitung ...",
    "options": [
      "Semua sel tidak kosong",
      "Sel yang berisi angka",
      "Sel yang berisi teks saja",
      "Jumlah karakter"
    ],
    "answer": "B",
    "explanation": "COUNT menghitung banyaknya sel yang berisi angka.",
    "number": 19
  },
  {
    "section": "EXCEL",
    "level": "Medium",
    "question": "Untuk mencari nilai tertinggi dari D2 sampai D31 digunakan ...",
    "options": [
      "=MIN(D2:D31)",
      "=HIGH(D2:D31)",
      "=MAX(D2:D31)",
      "=TOP(D2:D31)"
    ],
    "answer": "C",
    "explanation": "MAX mengembalikan nilai terbesar pada rentang.",
    "number": 20
  },
  {
    "section": "EXCEL",
    "level": "Medium",
    "question": "Referensi absolut pada Excel ditulis dengan tanda ...",
    "options": [
      "#",
      "$",
      "%",
      "&"
    ],
    "answer": "B",
    "explanation": "Tanda dolar mengunci kolom dan/atau baris, misalnya $A$1.",
    "number": 21
  },
  {
    "section": "EXCEL",
    "level": "Medium",
    "question": "Untuk menghitung jumlah siswa dengan nilai minimal 75 pada E2:E31, gunakan ...",
    "options": [
      "=COUNTIF(E2:E31,\">=75\")",
      "=SUM(E2:E31,75)",
      "=AVERAGE(E2:E31)",
      "=IF(E2:E31>=75)"
    ],
    "answer": "A",
    "explanation": "COUNTIF menghitung sel yang memenuhi satu kriteria.",
    "number": 22
  },
  {
    "section": "EXCEL",
    "level": "Hard",
    "question": "Rumus di F2 adalah =D2*$B$1 lalu disalin ke F3. Bagian $B$1 tetap ...",
    "options": [
      "Berubah menjadi B2",
      "Tetap mengacu ke B1",
      "Berubah menjadi C1",
      "Terhapus"
    ],
    "answer": "B",
    "explanation": "Referensi absolut $B$1 tidak berubah saat rumus disalin.",
    "number": 23
  },
  {
    "section": "EXCEL",
    "level": "Hard",
    "question": "Untuk menjumlahkan penjualan pada wilayah \"Timur\" saja dari B2:B100 berdasarkan wilayah A2:A100, gunakan ...",
    "options": [
      "SUMIF",
      "COUNT",
      "LEFT",
      "ROUND"
    ],
    "answer": "A",
    "explanation": "SUMIF menjumlahkan rentang berdasarkan kriteria pada rentang lain.",
    "number": 24
  },
  {
    "section": "EXCEL",
    "level": "Hard",
    "question": "Apa hasil logika dari =AND(A1>=70,B1=\"Hadir\") jika A1=80 dan B1=Hadir?",
    "options": [
      "TRUE",
      "FALSE",
      "80",
      "#VALUE!"
    ],
    "answer": "A",
    "explanation": "AND bernilai TRUE jika seluruh kondisi yang diuji bernilai benar.",
    "number": 25
  },
  {
    "section": "EXCEL",
    "level": "Hard",
    "question": "Untuk mengambil empat karakter paling kiri dari kode pada A2, fungsi yang tepat adalah ...",
    "options": [
      "RIGHT(A2,4)",
      "MID(A2,4)",
      "LEFT(A2,4)",
      "LEN(A2,4)"
    ],
    "answer": "C",
    "explanation": "LEFT mengambil sejumlah karakter dari sisi kiri teks.",
    "number": 26
  },
  {
    "section": "EXCEL",
    "level": "Hard",
    "question": "Mengapa fitur Sort sebaiknya diterapkan pada seluruh tabel, bukan hanya satu kolom nilai?",
    "options": [
      "Agar baris data tetap berpasangan dengan identitas yang benar",
      "Agar warna berubah otomatis",
      "Agar file lebih kecil",
      "Agar rumus dihapus"
    ],
    "answer": "A",
    "explanation": "Mengurutkan satu kolom saja dapat memisahkan nilai dari identitas siswa.",
    "number": 27
  },
  {
    "section": "EXCEL",
    "level": "Expert",
    "question": "Rumus untuk menghitung rata-rata nilai hanya pada kelas XI RPL A dengan kelas di A2:A50 dan nilai di C2:C50 adalah ...",
    "options": [
      "=AVERAGEIF(A2:A50,\"XI RPL A\",C2:C50)",
      "=COUNTIF(A2:A50,\"XI RPL A\")",
      "=SUM(A2:A50,C2:C50)",
      "=MAXIF(A2:A50,C2:C50)"
    ],
    "answer": "A",
    "explanation": "AVERAGEIF menghitung rata-rata pada rentang yang memenuhi kriteria.",
    "number": 28
  },
  {
    "section": "EXCEL",
    "level": "Expert",
    "question": "Rumus =IF(AND(B2>=75,C2=\"LENGKAP\"),\"TUNTAS\",\"PERIKSA\") menghasilkan PERIKSA jika ...",
    "options": [
      "B2=80 dan C2=LENGKAP",
      "B2=75 dan C2=LENGKAP",
      "B2=90 dan C2=KURANG",
      "B2=76 dan C2=LENGKAP"
    ],
    "answer": "C",
    "explanation": "AND mensyaratkan kedua kondisi benar; C2=KURANG membuat kondisi gabungan salah.",
    "number": 29
  },
  {
    "section": "EXCEL",
    "level": "Expert",
    "question": "Ketika rumus VLOOKUP menghasilkan #N/A, pemeriksaan awal yang paling masuk akal adalah ...",
    "options": [
      "Memastikan nilai kunci ditemukan di kolom pertama tabel referensi dan tipe datanya sesuai",
      "Mengubah semua angka menjadi warna merah",
      "Menghapus worksheet",
      "Menambah tinggi baris"
    ],
    "answer": "A",
    "explanation": "VLOOKUP mencari nilai pada kolom pertama tabel; perbedaan tipe data atau spasi dapat menyebabkan tidak ditemukan.",
    "number": 30
  },
  {
    "section": "DATABASE",
    "level": "Medium",
    "question": "Sebuah tabel SISWA memiliki kolom NIS, Nama, Kelas. Kolom yang paling tepat dijadikan primary key adalah ...",
    "options": [
      "Nama",
      "Kelas",
      "NIS",
      "Nama dan Kelas secara acak"
    ],
    "answer": "C",
    "explanation": "NIS dapat menjadi identitas unik untuk setiap siswa.",
    "number": 31
  },
  {
    "section": "DATABASE",
    "level": "Medium",
    "question": "Mengapa primary key tidak boleh bernilai sama pada dua baris berbeda?",
    "options": [
      "Agar data dapat diidentifikasi secara unik",
      "Agar tabel lebih berwarna",
      "Agar query lebih panjang",
      "Agar semua kolom wajib teks"
    ],
    "answer": "A",
    "explanation": "Primary key harus unik sehingga setiap record dapat dibedakan.",
    "number": 32
  },
  {
    "section": "DATABASE",
    "level": "Medium",
    "question": "Tabel PEMINJAMAN memiliki kolom id_pinjam, tanggal, nis_siswa. Kolom nis_siswa sebaiknya menjadi ...",
    "options": [
      "Foreign key yang mengacu ke SISWA.NIS",
      "Primary key pada tabel SISWA sekaligus",
      "Kolom hasil perhitungan",
      "Index gambar"
    ],
    "answer": "A",
    "explanation": "Foreign key menghubungkan record peminjaman dengan siswa pemilik transaksi.",
    "number": 33
  },
  {
    "section": "DATABASE",
    "level": "Medium",
    "question": "Perintah SQL untuk menampilkan semua kolom dari tabel SISWA adalah ...",
    "options": [
      "SHOW ALL SISWA;",
      "SELECT * FROM SISWA;",
      "GET SISWA ALL;",
      "OPEN TABLE SISWA;"
    ],
    "answer": "B",
    "explanation": "SELECT * FROM mengambil seluruh kolom dari tabel yang disebutkan.",
    "number": 34
  },
  {
    "section": "DATABASE",
    "level": "Medium",
    "question": "Jika ingin menampilkan siswa dari kelas XI RPL A, klausa SQL yang digunakan adalah ...",
    "options": [
      "ORDER BY",
      "GROUP BY",
      "WHERE",
      "INSERT"
    ],
    "answer": "C",
    "explanation": "WHERE menyaring baris berdasarkan kondisi.",
    "number": 35
  },
  {
    "section": "DATABASE",
    "level": "Medium",
    "question": "Apa tujuan relasi one-to-many antara tabel KELAS dan SISWA?",
    "options": [
      "Satu kelas dapat memiliki banyak siswa, setiap siswa terkait pada satu kelas",
      "Satu siswa wajib memiliki banyak kelas",
      "Setiap kelas hanya boleh satu kolom",
      "Semua siswa harus memiliki NIS sama"
    ],
    "answer": "A",
    "explanation": "Relasi one-to-many menghubungkan satu record kelas dengan banyak record siswa.",
    "number": 36
  },
  {
    "section": "DATABASE",
    "level": "Medium",
    "question": "Jika kolom tanggal_lahir menyimpan tanggal, tipe data yang paling sesuai adalah ...",
    "options": [
      "DATE",
      "BOOLEAN",
      "BLOB",
      "VARCHAR(2)"
    ],
    "answer": "A",
    "explanation": "DATE dirancang untuk menyimpan nilai tanggal.",
    "number": 37
  },
  {
    "section": "DATABASE",
    "level": "Medium",
    "question": "Perintah untuk menambahkan satu record baru ke tabel SISWA adalah ...",
    "options": [
      "UPDATE",
      "INSERT INTO",
      "DELETE",
      "SELECT"
    ],
    "answer": "B",
    "explanation": "INSERT INTO menambahkan baris baru ke tabel.",
    "number": 38
  },
  {
    "section": "DATABASE",
    "level": "Hard",
    "question": "Tabel NILAI menyimpan nis_siswa, nama_siswa, id_mapel, nama_mapel, nilai. Nama siswa berulang pada banyak baris. Desain lebih baik adalah ...",
    "options": [
      "Pisahkan SISWA dan MAPEL, lalu hubungkan melalui NILAI",
      "Simpan semua data dalam satu kolom",
      "Hapus NIS",
      "Jadikan nilai sebagai primary key"
    ],
    "answer": "A",
    "explanation": "Pemisahan entitas mengurangi redundansi dan anomali pembaruan.",
    "number": 39
  },
  {
    "section": "DATABASE",
    "level": "Hard",
    "question": "Dalam tabel DETAIL_PESANAN, satu pesanan dapat memiliki banyak produk. Kunci yang wajar untuk tiap detail adalah ...",
    "options": [
      "Nomor urut baris saja tanpa konteks",
      "Kombinasi id_pesanan dan id_produk atau id_detail tersendiri",
      "Nama pelanggan saja",
      "Harga produk saja"
    ],
    "answer": "B",
    "explanation": "Kunci gabungan atau id detail unik dapat mengidentifikasi setiap baris detail.",
    "number": 40
  },
  {
    "section": "DATABASE",
    "level": "Hard",
    "question": "Apa fungsi FOREIGN KEY?",
    "options": [
      "Menjaga keterkaitan dan integritas referensial antar tabel",
      "Mengurutkan hasil otomatis",
      "Mengenkripsi seluruh database",
      "Mengubah tipe data"
    ],
    "answer": "A",
    "explanation": "Foreign key memastikan nilai relasi merujuk pada record yang valid di tabel induk.",
    "number": 41
  },
  {
    "section": "DATABASE",
    "level": "Hard",
    "question": "Query untuk mengubah nilai kolom kelas siswa NIS '24011' menjadi 'XI RPL B' adalah ...",
    "options": [
      "UPDATE SISWA SET kelas='XI RPL B' WHERE NIS='24011';",
      "ALTER SISWA kelas='XI RPL B';",
      "INSERT SISWA kelas='XI RPL B';",
      "SELECT kelas='XI RPL B' FROM SISWA;"
    ],
    "answer": "A",
    "explanation": "UPDATE mengubah data, sedangkan WHERE membatasi baris yang diperbarui.",
    "number": 42
  },
  {
    "section": "DATABASE",
    "level": "Hard",
    "question": "Mengapa perintah UPDATE tanpa WHERE perlu sangat diwaspadai?",
    "options": [
      "Dapat mengubah seluruh baris dalam tabel",
      "Hanya mengubah baris pertama",
      "Tidak pernah berjalan",
      "Menghapus database otomatis"
    ],
    "answer": "A",
    "explanation": "Tanpa WHERE, semua baris dapat terkena perubahan.",
    "number": 43
  },
  {
    "section": "DATABASE",
    "level": "Hard",
    "question": "Tabel SISWA memiliki kolom NIS, Nama, Nama_Wali_Kelas. Banyak siswa dalam kelas yang sama mengulang nama wali kelas. Risiko desain ini adalah ...",
    "options": [
      "Redundansi data dan anomali pembaruan",
      "Tidak bisa menyimpan angka",
      "Primary key otomatis hilang",
      "Query SELECT tidak bisa digunakan"
    ],
    "answer": "A",
    "explanation": "Data wali kelas berulang; perubahan nama perlu dilakukan di banyak baris.",
    "number": 44
  },
  {
    "section": "DATABASE",
    "level": "Hard",
    "question": "Untuk menampilkan nama siswa beserta nama kelas dari tabel SISWA dan KELAS yang terhubung melalui id_kelas, operasi yang digunakan adalah ...",
    "options": [
      "JOIN",
      "DROP",
      "TRUNCATE",
      "COMMIT"
    ],
    "answer": "A",
    "explanation": "JOIN menggabungkan data dari tabel terkait.",
    "number": 45
  },
  {
    "section": "DATABASE",
    "level": "Expert",
    "question": "Diketahui SISWA(NIS, Nama, id_kelas) dan KELAS(id_kelas, nama_kelas). Query yang tepat untuk menampilkan nama siswa dan nama kelas adalah ...",
    "options": [
      "SELECT SISWA.Nama, KELAS.nama_kelas FROM SISWA JOIN KELAS ON SISWA.id_kelas=KELAS.id_kelas;",
      "SELECT Nama, nama_kelas FROM SISWA DELETE KELAS;",
      "SELECT * FROM SISWA WHERE KELAS;",
      "JOIN SISWA AND KELAS;"
    ],
    "answer": "A",
    "explanation": "JOIN menghubungkan kedua tabel melalui pasangan foreign key dan primary key.",
    "number": 46
  },
  {
    "section": "DATABASE",
    "level": "Expert",
    "question": "Satu transaksi pembayaran terdiri dari header transaksi dan beberapa detail barang. Mengapa tabel TRANSAKSI dan DETAIL_TRANSAKSI dipisah?",
    "options": [
      "Agar satu transaksi dapat memiliki banyak item tanpa mengulang data header di setiap kolom",
      "Agar tidak perlu primary key",
      "Agar harga tidak dapat berubah",
      "Agar semua data menjadi teks"
    ],
    "answer": "A",
    "explanation": "Pemisahan header-detail merepresentasikan relasi one-to-many dan mengurangi duplikasi.",
    "number": 47
  },
  {
    "section": "DATABASE",
    "level": "Expert",
    "question": "Dua pengguna memperbarui stok barang yang sama hampir bersamaan. Konsep database yang membantu menjaga konsistensi transaksi adalah ...",
    "options": [
      "Transaction dan kontrol konkurensi",
      "Mengubah nama tabel",
      "Menghapus foreign key",
      "Mengganti semua tipe data menjadi TEXT"
    ],
    "answer": "A",
    "explanation": "Transaksi dan mekanisme konkurensi membantu mencegah pembaruan saling menimpa dan menjaga konsistensi.",
    "number": 48
  },
  {
    "section": "DATABASE",
    "level": "Expert",
    "question": "Dalam normalisasi, tujuan utama 1NF adalah ...",
    "options": [
      "Setiap atribut menyimpan nilai atomik dan tidak ada kelompok berulang",
      "Semua tabel harus memiliki tepat dua kolom",
      "Semua data disimpan dalam satu tabel",
      "Semua kolom harus berupa angka"
    ],
    "answer": "A",
    "explanation": "1NF mengharuskan nilai atribut bersifat atomik dan struktur tidak memiliki repeating groups.",
    "number": 49
  },
  {
    "section": "DATABASE",
    "level": "Expert",
    "question": "Sebuah aplikasi mencatat detail nilai siswa per mata pelajaran. Ketergantungan yang tepat untuk mengidentifikasi nilai adalah pasangan NIS dan kode_mapel. Kunci yang paling masuk akal adalah ...",
    "options": [
      "NIS saja",
      "kode_mapel saja",
      "Kombinasi NIS dan kode_mapel",
      "Nama mata pelajaran dan nilai"
    ],
    "answer": "C",
    "explanation": "Kombinasi siswa dan mata pelajaran mengidentifikasi satu nilai per siswa per mapel, jika aturan bisnisnya demikian.",
    "number": 50
  }
];
