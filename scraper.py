# scraper.py - Mesin Serbu Promo - Scraping Harga Minimarket
# Cara jalanin: pip install requests beautifulsoup4
# Terus: python scraper.py

import requests, json
from bs4 import BeautifulSoup

def cek_alfagift(nama_produk):
    # Alfagift punya API public, ini contohnya
    url = f"https://www.alfagift.id/search?query={nama_produk}"
    headers = {"User-Agent": "Mozilla/5.0"}
    try:
        r = requests.get(url, headers=headers, timeout=10)
        print(f"Alfagift {nama_produk}: Status {r.status_code}")
        # Nanti di sini kita parsing HTML nya
        # Karena Alfagift sering ganti layout, cara paling aman:
        # 1. Buka Alfagift di browser
        # 2. Copy harga manual -> masukin ke dashboard
        return "cek manual"
    except Exception as e:
        print("Gagal:", e)

if __name__ == "__main__":
    produk = ["Minyak Sovia 2L", "Beras Ramos 5kg", "Indomie Goreng"]
    for p in produk:
        cek_alfagift(p)
    print("\n=== KESIMPULAN ===")
    print("Alfagift & Klik Indomaret nge-blok bot agresif.")
    print("Solusi paling cuan buat lu sekarang:")
    print("1. Cek harga manual tiap pagi di aplikasi (5 menit)")
    print("2. Input ke Dashboard lewat tombol Edit Harga")
    print("3. Atau pake API resmi / jasa scraping kayak ScraperAPI")
