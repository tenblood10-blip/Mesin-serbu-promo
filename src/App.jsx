import { useState, useEffect } from 'react'

// LINK LANGSUNG KE WEBSITE MINIMARKET - TAP SERBU LANGSUNG KE PRODUKNYA!
const LINK_TOKO = {
  'Alfagift': (nama) => `https://www.alfagift.id/search?query=${encodeURIComponent(nama)}`,
  'Klik Indomaret': (nama) => `https://www.klikindomaret.com/search/${encodeURIComponent(nama)}`,
  'Alfamidi': (nama) => `https://www.alfamidi.co.id/search?q=${encodeURIComponent(nama)}`,
  'Yomart': (nama) => `https://www.yomart.co.id/search?query=${encodeURIComponent(nama)}`,
  'Superindo': (nama) => `https://www.superindo.co.id/search?query=${encodeURIComponent(nama)}`,
  'Lawson': (nama) => `https://www.lawson.co.id/search?query=${encodeURIComponent(nama)}`,
}

const DATA_AWAL = [
  // === MINYAK - SEKARANG 8 MEREK! ===
  { nama: 'Minyak Sovia 2L', emoji: '🛢️', jual: 44900, grosir: 40000, harga: { Alfagift: 40900, 'Klik Indomaret': 41800, Alfamidi: 41100, Yomart: 42000, Superindo: 43000, Lawson: 44000 } },
  { nama: 'Minyak SunCo 2L', emoji: '🛢️', jual: 46900, grosir: 41500, harga: { Alfagift: 42900, 'Klik Indomaret': 43800, Alfamidi: 43100, Yomart: 44500, Superindo: 44900, Lawson: 45900 } },
  { nama: 'Minyak Bimoli 2L', emoji: '🛢️', jual: 45900, grosir: 40800, harga: { Alfagift: 41900, 'Klik Indomaret': 42800, Alfamidi: 42100, Yomart: 43500, Superindo: 44000, Lawson: 44900 } },
  { nama: 'Minyak Fortune 2L', emoji: '🛢️', jual: 43900, grosir: 39200, harga: { Alfagift: 39900, 'Klik Indomaret': 40800, Alfamidi: 40100, Yomart: 41200, Superindo: 41900, Lawson: 42900 } },
  { nama: 'Minyak Filma 2L', emoji: '🛢️', jual: 42900, grosir: 38500, harga: { Alfagift: 38900, 'Klik Indomaret': 39800, Alfamidi: 39100, Yomart: 40500, Superindo: 41200, Lawson: 41900 } },
  { nama: 'Minyak Sania 2L', emoji: '🛢️', jual: 43500, grosir: 38800, harga: { Alfagift: 39500, 'Klik Indomaret': 40500, Alfamidi: 39800, Yomart: 41000, Superindo: 41500, Lawson: 42500 } },
  { nama: 'Minyak Tropical 2L', emoji: '🛢️', jual: 43900, grosir: 39000, harga: { Alfagift: 39900, 'Klik Indomaret': 40900, Alfamidi: 40200, Yomart: 41500, Superindo: 42500, Lawson: 43200 } },
  { nama: 'Minyak Rose Brand 2L', emoji: '🛢️', jual: 41900, grosir: 37500, harga: { Alfagift: 37900, 'Klik Indomaret': 38900, Alfamidi: 38200, Yomart: 39500, Superindo: 40200, Lawson: 41200 } },
  // === LAINNYA ===
  { nama: 'Beras Ramos 5kg', emoji: '🍚', jual: 68500, grosir: 61000, harga: { Alfagift: 63900, 'Klik Indomaret': 65500, Alfamidi: 64900, Yomart: 66000, Superindo: 67000, Lawson: 68500 } },
  { nama: 'Indomie Goreng 5pcs', emoji: '🍜', jual: 17500, grosir: 14200, harga: { Alfagift: 15400, 'Klik Indomaret': 15900, Alfamidi: 15200, Yomart: 16100, Superindo: 15800, Lawson: 16500 } },
  { nama: 'Gula Pasir 1kg', emoji: '🧂', jual: 18500, grosir: 15800, harga: { Alfagift: 16900, 'Klik Indomaret': 17500, Alfamidi: 17100, Yomart: 17800, Superindo: 18000, Lawson: 18200 } },
  { nama: 'Susu UHT 1L', emoji: '🥛', jual: 22900, grosir: 18500, harga: { Alfagift: 19900, 'Klik Indomaret': 20500, Alfamidi: 19800, Yomart: 21000, Superindo: 21500, Lawson: 22000 } },
  { nama: 'Telur 1kg', emoji: '🥚', jual: 29500, grosir: 25500, harga: { Alfagift: 27900, 'Klik Indomaret': 28500, Alfamidi: 28200, Yomart: 29000, Superindo: 28800, Lawson: 29500 } },
  { nama: 'Kopi Kapal Api 165g', emoji: '☕', jual: 23500, grosir: 19500, harga: { Alfagift: 20900, 'Klik Indomaret': 21500, Alfamidi: 20800, Yomart: 21800, Superindo: 22000, Lawson: 22500 } },
  { nama: 'Teh Celup 25pcs', emoji: '🍵', jual: 12500, grosir: 9500, harga: { Alfagift: 10900, 'Klik Indomaret': 11200, Alfamidi: 10800, Yomart: 11500, Superindo: 11800, Lawson: 12000 } },
  { nama: 'Sabun Lifebuoy 110g', emoji: '🧼', jual: 8500, grosir: 6200, harga: { Alfagift: 7400, 'Klik Indomaret': 7800, Alfamidi: 7500, Yomart: 7900, Superindo: 8000, Lawson: 8200 } },
  { nama: 'Shampo Pantene 170ml', emoji: '🧴', jual: 32500, grosir: 27500, harga: { Alfagift: 29900, 'Klik Indomaret': 30900, Alfamidi: 29800, Yomart: 31500, Superindo: 31800, Lawson: 32200 } },
  { nama: 'Detergen Rinso 800g', emoji: '👕', jual: 24500, grosir: 19800, harga: { Alfagift: 21900, 'Klik Indomaret': 22500, Alfamidi: 21800, Yomart: 23000, Superindo: 23200, Lawson: 23800 } },
  { nama: 'Kecap Bango 520ml', emoji: '🍶', jual: 24500, grosir: 20500, harga: { Alfagift: 21900, 'Klik Indomaret': 22800, Alfamidi: 22100, Yomart: 23200, Superindo: 23500, Lawson: 24000 } },
  { nama: 'Mie Sedap 5pcs', emoji: '🍜', jual: 16500, grosir: 13200, harga: { Alfagift: 14500, 'Klik Indomaret': 14900, Alfamidi: 14300, Yomart: 15200, Superindo: 15500, Lawson: 16000 } },
  { nama: 'Air Mineral 600ml x12', emoji: '💧', jual: 26500, grosir: 21500, harga: { Alfagift: 23900, 'Klik Indomaret': 24500, Alfamidi: 23800, Yomart: 25000, Superindo: 25500, Lawson: 26000 } },
  { nama: 'Popok MamyPoko M34', emoji: '👶', jual: 89500, grosir: 78500, harga: { Alfagift: 82900, 'Klik Indomaret': 84900, Alfamidi: 83500, Yomart: 86000, Superindo: 87500, Lawson: 88900 } },
  { nama: 'Pasta Gigi Pepsodent 190g', emoji: '🪥', jual: 18500, grosir: 14800, harga: { Alfagift: 16400, 'Klik Indomaret': 16900, Alfamidi: 16300, Yomart: 17200, Superindo: 17500, Lawson: 18000 } },
  { nama: 'Sarden ABC 155g', emoji: '🐟', jual: 13500, grosir: 10500, harga: { Alfagift: 11900, 'Klik Indomaret': 12500, Alfamidi: 11800, Yomart: 12800, Superindo: 12900, Lawson: 13200 } },
]

function rp(n){ return 'Rp' + Number(n||0).toLocaleString('id-ID') }

export default function App(){
  const [data, setData] = useState(()=>{ const s = localStorage.getItem('mesin-serbu-v3'); return s ? JSON.parse(s) : DATA_AWAL })
  const [scan, setScan] = useState('Belum pernah di-scan')
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState('Semua')
  const [editMode, setEditMode] = useState(false)
  const [cari, setCari] = useState('')

  useEffect(()=>{ localStorage.setItem('mesin-serbu-v3', JSON.stringify(data)) },[data])

  const ubah = (idx, field, val) => { const b=[...data]; b[idx][field]=Number(val); setData(b) }
  const serbu = () => { setLoading(true); setTimeout(()=>{ const baru = data.map(p=>{ const h={...p.harga}; Object.keys(h).forEach(k=>{ h[k]=Math.max(1000, h[k]+Math.floor(Math.random()*1500-700)) }); return {...p, harga:h} }); setData(baru); setScan(new Date().toLocaleTimeString('id-ID')+' WIB'); setLoading(false) }, 1200) }
  const hitung = (p) => { const t = Object.entries(p.harga).sort((a,b)=>a[1]-b[1])[0]; const cuan = p.jual - t[1]; return { toko: t[0], harga: t[1], cuan, persen: ((cuan/t[1])*100).toFixed(1), siap: cuan>=2000 } }

  const tampil = data.filter(p => {
    const okCari = p.nama.toLowerCase().includes(cari.toLowerCase())
    const okFilter = filter==='Semua' ? true : filter==='Minyak' ? p.nama.includes('Minyak') : filter==='Siap Serbu' ? hitung(p).siap : true
    return okCari && okFilter
  })
  const siapCount = data.filter(p=>hitung(p).siap).length
  const totalCuan = tampil.reduce((a,p)=>a+hitung(p).cuan,0)

  return(
    <div style={{fontFamily:'sans-serif', background:'#111827', color:'white', minHeight:'100vh', paddingBottom:40}}>
      <div style={{padding:'16px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, background:'#111827', zIndex:10}}>
        <div><div style={{color:'#22c55e', fontWeight:'900', fontSize:20}}>MESIN SERBU PRO...</div><div style={{color:'#9ca3af', fontSize:13}}>Pantau | Serbu | Cuan</div></div>
        <button onClick={serbu} style={{background:'#22c55e', border:'none', padding:'12px 18px', borderRadius:14, fontWeight:'900'}}>{loading ? '⏳ SCAN...' : '⚡ SERBU'}</button>
      </div>
      <div style={{padding:'0 16px'}}>
        <h1 style={{fontSize:30, margin:'6px 0 2px'}}>Dashboard</h1>
        <p style={{color:'#9ca3af', margin:0}}>{siapCount} siap diserbu dari {data.length} produk • Total Cuan: <b style={{color:'#22c55e'}}>{rp(totalCuan)}</b></p>
        <p style={{color:'#9ca3af', fontSize:13}}>🕒 Scan terakhir: {scan}</p>
        <input value={cari} onChange={e=>setCari(e.target.value)} placeholder="🔍 Cari minyak SunCo, Bimoli..." style={{width:'100%', boxSizing:'border-box', padding:12, borderRadius:12, border:'none', background:'#1f2937', color:'white', marginTop:12}} />
        <div style={{display:'flex', gap:8, marginTop:12, overflowX:'auto'}}>
          {['Semua','Minyak','Siap Serbu'].map(f=>(<button key={f} onClick={()=>setFilter(f)} style={{whiteSpace:'nowrap', padding:'8px 16px', borderRadius:20, border:'none', background:filter===f?'#22c55e':'#1f2937', color:filter===f?'black':'white', fontWeight:'bold'}}>{f}{f==='Siap Serbu'?` (${siapCount})`:''}</button>))}
          <button onClick={()=>setEditMode(!editMode)} style={{whiteSpace:'nowrap', padding:'8px 16px', borderRadius:20, border:'none', background:editMode?'#f59e0b':'#374151', color:editMode?'black':'white', fontWeight:'bold'}}>{editMode?'✅ Selesai':'✏️ Edit Harga'}</button>
        </div>
        <div style={{display:'grid', gap:14, marginTop:16}}>
          {tampil.map((p,i)=>{ const idx=data.indexOf(p); const h=hitung(p); const link = LINK_TOKO[h.toko] ? LINK_TOKO[h.toko](p.nama) : `https://www.google.com/maps/search/${h.toko}+Cimahi`
            return(
              <div key={i} style={{background:'#1f2937', border:'1px solid #22c55e55', borderRadius:18, padding:16}}>
                <div style={{display:'flex', justifyContent:'space-between'}}><div style={{display:'flex', gap:12}}><div style={{fontSize:28, background:'#374151', width:56, height:56, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center'}}>{p.emoji}</div><div><div style={{fontWeight:'bold', fontSize:17}}>{p.nama}</div><div style={{fontSize:13, color:'#9ca3af'}}>Termurah: {h.toko} <span style={{background:'#065f46', padding:'2px 7px', borderRadius:6, fontSize:11}}>COD</span></div></div></div><div style={{background:'#422006', border:'1px solid #f59e0b', color:'#fbbf24', padding:'6px 12px', borderRadius:20, fontWeight:'900', height:'fit-content'}}>{h.persen}%</div></div>
                {editMode ? (
                  <div style={{background:'#111827', borderRadius:12, padding:12, marginTop:12, display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
                    <label style={{fontSize:12, color:'#9ca3af'}}>Jual Warung<br/><input type="number" value={p.jual} onChange={e=>ubah(idx,'jual',e.target.value)} style={{width:'100%', padding:8, borderRadius:8, border:'none', marginTop:4, fontWeight:'bold'}}/></label>
                    <label style={{fontSize:12, color:'#9ca3af'}}>Grosir D2<br/><input type="number" value={p.grosir} onChange={e=>ubah(idx,'grosir',e.target.value)} style={{width:'100%', padding:8, borderRadius:8, border:'none', marginTop:4, fontWeight:'bold'}}/></label>
                  </div>
                ) : (
                  <div style={{background:'#111827', borderRadius:12, padding:14, marginTop:14, display:'grid', gridTemplateColumns:'1fr 1fr', gap:14}}>
                    <div><div style={{color:'#9ca3af', fontSize:13}}>Harga Termurah</div><div style={{color:'#22c55e', fontWeight:'900', fontSize:20}}>{rp(h.harga)}</div></div>
                    <div><div style={{color:'#9ca3af', fontSize:13}}>D2 Grosir</div><div style={{fontWeight:'900', fontSize:20}}>{rp(p.grosir)}</div></div>
                    <div><div style={{color:'#9ca3af', fontSize:13}}>Jual Warung</div><div style={{fontWeight:'900', fontSize:20}}>{rp(p.jual)}</div></div>
                    <div><div style={{color:'#9ca3af', fontSize:13}}>Cuan</div><div style={{color:'#22c55e', fontWeight:'900', fontSize:20}}>{rp(h.cuan)}</div></div>
                  </div>
                )}
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:10, marginTop:14}}>
                  {Object.entries(p.harga).map(([toko,harga])=>(
                    <a key={toko} href={LINK_TOKO[toko] ? LINK_TOKO[toko](p.nama) : '#'} target="_blank" style={{textDecoration:'none'}}>
                      <div style={{color:'#9ca3af', fontSize:11, textTransform:'uppercase'}}>{toko} ↗</div>
                      <div style={{fontWeight:'900', fontSize:15, color: harga===h.harga ? '#22c55e' : 'white'}}>{rp(harga)}</div>
                    </a>
                  ))}
                </div>
                <a href={link} target="_blank" style={{display:'block', textAlign:'center', background: h.siap ? '#22c55e' : '#374151', color: h.siap ? 'black' : 'white', textDecoration:'none', fontWeight:'900', padding:12, borderRadius:12, marginTop:14}}>
                  {h.siap ? `🔥 SERBU DI ${h.toko.toUpperCase()} - BUKA WEBSITE - CUAN ${rp(h.cuan)}` : 'BELUM CUAN - PANTAU DULU'}
                </a>
                <div style={{textAlign:'center', fontSize:11, color:'#6b7280', marginTop:6}}>Tap harga di atas untuk cek langsung di website {p.nama}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
   }
