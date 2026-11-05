FIX MESIN SERBU PROMO - VERCEL VERSION - JANGAN BIKIN BARU, EDIT YANG ADA!

BUG YANG HARUS DIBENERIN (DARI SCREENSHOT ASLI):

1. BUG PALING FATAL - LOGIKA D2 GROSIR SALAH!
Sekarang: D2 Grosir selalu lebih murah tapi TIDAK dihitung sebagai Termurah.
Contoh: Tropical Termurah Rp39.506 (Alfagift), D2 Rp39.000, tapi Cuan dihitung dari Alfagift.
Contoh: Telur Termurah Rp28.221, D2 Rp25.500, Cuan jadi cuma Rp1.279 padahal harusnya Rp4.000.

FIX:
- Harga Termurah = MIN(Alfagift, Klik Indomaret, Alfamidi, Yomart, Superindo, Lawson, D2 Grosir)
- D2 Grosir HARUS ikut diadu, bukan dipisah jadi kolom sendiri.
- Cuan = Harga Jual Warung - Harga Termurah (yang sudah termasuk D2)
- Persen Cuan = (Cuan / Harga Termurah) * 100
- Label Termurah harus berubah otomatis: Jika D2 paling murah, tulis "Termurah: D2 Grosir" dan tombol jadi "SERBU DI D2 GROSIR"
- Contoh bener: Telur D2 Rp25.500, Jual Rp29.500, Cuan Rp4.000, Persen 15.6%, Status SERBU! Bukan PANTAU!

2. BUG HARGA KARANGAN AI - HARGA HARUS BULET!
Sekarang harga aneh: Rp39.506, Rp37.810, Rp14.623, Rp19.144. Mana ada harga Alfamart kayak gitu!

FIX:
- Semua harga HARUS dibulatkan ke kelipatan 100 terdekat: Rp39.500, Rp37.800, Rp14.600, Rp19.100
- Jangan generate harga random dengan buntut 3 digit. Kalau scrape gagal, pakai harga fallback yang bulet dari data manual, dan kasih label "Harga Estimasi - Cek di Toko"
- Tambahkan di atas: "Scan terakhir: [tanggal + jam]" - Jika belum pernah scan, tulis "Belum pernah scan - Harga masih estimasi"

3. TAMBAH HITUNGAN CUAN BERSIH!
Sekarang Cuan masih kotor, belum potong bensin.

FIX:
- Tambah input: Biaya Bensin / Ongkir (default Rp5.000 per trip)
- Tambah input: Jumlah Beli (pcs)
- Hitung: Cuan Bersih = (Cuan per pcs * Jumlah Beli) - Biaya Bensin
- Tampilkan: "Beli minimal X pcs biar balik modal bensin" -> Rumus: ceil(Biaya Bensin / Cuan per pcs)
- Contoh: Indomie Cuan Rp2.877, Bensin Rp5.000, Minimal Beli = 2 pcs. Kalau beli 1 pcs, tampilkan warning merah: "RUGI! Bensin lebih gede dari cuan!"

4. TAMBAH INFO PROMO & STOK!
Di setiap kartu produk tambahkan:
- "Promo berakhir: [tanggal]" - input manual, default 7 hari dari sekarang
- "Stok: [Ada / Menipis / Habis]" - badge warna hijau/kuning/merah
- Jika promo sudah lewat tanggal, otomatis badge jadi "PROMO HABIS - JANGAN SERBU"

5. FIX UI YANG KEPOTONG!
- Judul "MESIN SERBU PRO..." kepotong di HP. Ganti jadi 2 baris penuh: Baris 1 "MESIN SERBU", Baris 2 "PROMO" atau kecilkan font jadi 22px agar muat.
- Tombol "SERBU DI ALFAGIFT - BUKA WEBSITE - CUAN RpX" terlalu panjang. Ganti jadi 2 baris: Baris 1 "🔥 SERBU DI [Nama Toko]", Baris 2 "Cuan RpX - Buka Website"
- Badge COD tetap ada, tapi tambahkan tooltip: "Bisa COD di Cimahi"

6. JANGAN UBAH YANG UDAH BAGUS!
- Pertahankan design dark #111, neon green, kartu produk, 6 toko (Alfagift, Klik Indomaret, Alfamidi, Yomart, Superindo, Lawson) + D2 Grosir
- Pertahankan produk yang sudah ada: Minyak Tropical, Rose Brand, Beras Ramos 5kg, Indomie Goreng 5pcs, Gula Pasir 1kg, Susu UHT 1L, Telur 1kg, Kopi Kapal Api 165g
- Jangan hapus filter, jangan bikin halaman baru, edit file yang sama: src/App.jsx

OUTPUT: Satu file App.jsx yang sudah diperbaiki, langsung deploy ke Vercel tanpa error.
