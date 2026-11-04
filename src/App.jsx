import { useState } from 'react'

const PRODUK = [
  { nama: 'Minyak Sovia 2L', harga: 26000, emoji: '🛢️', promo: 'Promo Minyak!' },
  { nama: 'Beras Ramos 5kg', harga: 62000, emoji: '🍚', promo: 'Promo Beras!' },
  { nama: 'Indomie Goreng', harga: 3100, emoji: '🍜', promo: 'Promo Indomie!' },
]

function formatRp(n) {
  return 'Rp ' + n.toLocaleString('id-ID')
}

export default function App() {
  const [cari, setCari] = useState('')
  const hasil = PRODUK.filter(p => p.nama.toLowerCase().includes(cari.toLowerCase()))
  const noWA = '6289526193272' // GANTI NOMOR INI SAMA NOMOR WA LU

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#fff7ed', minHeight: '100vh', paddingBottom: 40 }}>
      <div style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)', color: 'white', padding: '28px 20px 32px', borderRadius: '0 0 28px 28px', textAlign: 'center' }}>
        <div style={{ fontSize: 42 }}>🔥</div>
        <h1 style={{ margin: '4px 0', fontSize: 28 }}>Mesin Serbu Promo</h1>
        <p style={{ margin: 0, opacity: 0.9 }}>Promo warung paling murah di Cimahi!</p>
        <div style={{ background: 'white', color: '#ea580c', display: 'inline-block', marginTop: 14, padding: '8px 14px', borderRadius: 20, fontWeight: 'bold', fontSize: 13 }}>
          ⚡ SERBU HARI INI - STOK TERBATAS!
        </div>
      </div>

      <div style={{ padding: '0 16px', marginTop: -0 }}>
        <input
          value={cari}
          onChange={e => setCari(e.target.value)}
          placeholder="🔍 Cari produk... contoh: beras"
          style={{ width: '100%', boxSizing: 'border-box', marginTop: 16, padding: '14px 16px', borderRadius: 14, border: '1px solid #fed7aa', fontSize: 15, outline: 'none' }}
        />

        <div style={{ marginTop: 16, display: 'grid', gap: 14 }}>
          {hasil.map((p) => (
            <div key={p.nama} style={{ background: 'white', borderRadius: 18, padding: 16, display: 'flex', gap: 14, alignItems: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: 44, background: '#fff7ed', width: 72, height: 72, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{p.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 'bold', fontSize: 16 }}>{p.nama}</div>
                <div style={{ color: '#ea580c', fontWeight: 'bold', fontSize: 18, margin: '4px 0' }}>{formatRp(p.harga)}</div>
                <a
                  href={`https://wa.me/${noWA}?text=${encodeURIComponent('Halo, mau order ' + p.nama + ' ' + formatRp(p.harga))}`}
                  target="_blank"
                  style={{ display: 'inline-block', background: '#22c55e', color: 'white', textDecoration: 'none', padding: '8px 14px', borderRadius: 10, fontSize: 13, fontWeight: 'bold' }}
                >
                  💬 Order via WA
                </a>
              </div>
              <div style={{ background: '#fee2e2', color: '#dc2626', fontSize: 11, fontWeight: 'bold', padding: '5px 8px', borderRadius: 20 }}>PROMO</div>
            </div>
          ))}
        </div>

        {hasil.length === 0 && <p style={{ textAlign: 'center', marginTop: 30, color: '#888' }}>Produk gak ketemu, coba kata lain LG 😅</p>}

        <p style={{ textAlign: 'center', marginTop: 24, color: '#16a34a', fontWeight: 'bold', fontSize: 13 }}>✅ BUILD SUKSES - Siap jual ke warung Cimahi!</p>
      </div>
    </div>
  )
      }
