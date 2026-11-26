PAKET WEBSITE REFLEKSI XI RPL - 50 SOAL - 30 MENIT

FILE:
- index.html
- style.css
- questions.js
- script.js
- Code.gs
- README.txt

ISI BANK SOAL:
- 15 soal Microsoft Word
- 15 soal Microsoft Excel
- 20 soal logika Basis Data untuk XI RPL
Tingkat kesulitan: Medium, Hard, Expert.
Durasi: 30 menit.

A. MENJALANKAN WEBSITE SECARA LOKAL
1. Ekstrak ZIP.
2. Pastikan keenam file berada dalam satu folder (Code.gs dan README boleh ikut tetapi tidak dipanggil browser).
3. Buka index.html melalui Live Server di VS Code, atau deploy ke GitHub Pages.
4. Jangan membuka script.js secara terpisah.
5. Urutan pemanggilan script di index.html sudah diatur: questions.js lalu script.js (keduanya defer).
6. Isi identitas lalu klik MULAI REFLEKSI.

B. MENGHUBUNGKAN GOOGLE SHEETS
1. Buat Google Spreadsheet baru.
2. Salin ID dari URL:
   https://docs.google.com/spreadsheets/d/ID_SPREADSHEET/edit
3. Buka https://script.google.com, buat project, lalu tempel isi Code.gs.
4. Ganti TEMPEL_ID_SPREADSHEET_DI_SINI dengan ID spreadsheet.
5. Simpan project.
6. Pilih fungsi setupSheets lalu klik Run. Beri izin akses.
7. Deploy > New deployment > Web app.
8. Execute as: Me.
9. Who has access: Anyone.
10. Deploy, selesaikan otorisasi, lalu salin URL /exec.
11. Buka script.js, ganti TEMPEL_URL_WEB_APP_APPS_SCRIPT_DI_SINI dengan URL tersebut.
12. Simpan dan unggah ulang seluruh file website ke GitHub Pages.

C. MEMERIKSA DATA
- RESULTS: satu baris rekap per ujian, termasuk skor Word, Excel, Basis Data, nilai akhir, durasi, dan status.
- ANSWERS: 50 baris detail jawaban untuk setiap ujian, termasuk jawaban siswa dan kunci.
- Jika data tidak masuk, periksa Apps Script > Executions dan pastikan URL /exec benar.
- Browser menggunakan no-cors sehingga tidak dapat membaca respons server. Pesan di halaman menyatakan permintaan dikirim; tetap verifikasi baris pada Google Sheets.

CATATAN KEAMANAN:
Versi ini menghitung nilai di browser dan mengirim hasil serta jawaban ke Apps Script. Untuk latihan/refleksi kelas, ini praktis. Namun, siswa yang mengerti JavaScript dapat mengubah jawaban/nilai sebelum pengiriman. Jangan gunakan sebagai sistem ujian berisiko tinggi tanpa autentikasi siswa dan pemindahan kunci jawaban serta perhitungan nilai ke server. Jangan menaruh password rahasia di file JavaScript publik.
