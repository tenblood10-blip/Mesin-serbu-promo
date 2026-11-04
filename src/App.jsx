import { useState, useEffect } from 'react'

const DATA_AWAL = [
  { nama: 'Minyak Sovia 2L', emoji: '🛢️', jual: 44900, grosir: 40000, harga: { Alfagift: 40900, 'Klik Indomaret': 41800, Alfamidi: 41100, Yomart: 42000, Superindo: 43000, Lawson: 44000 } },
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
  { nama: 'Minyak Tropical 2L', emoji: '🛢️', jual: 43900, grosir: 39000, harga: { Alfagift: 39900, 'Klik Indomaret': 40900, Alfamidi: 40200, Yomart: 41500, Superindo: 42500, Lawson: 43200 } },
  { nama: 'Sarden ABC 155g', emoji: '🐟', jual: 13500, grosir: 10500, harga: { Alfagift: 11900, 'Klik Indomaret': 12500, Alfamidi: 11800, Yomart: 12800, Superindo: 12900, Lawson: 13200 } },
  { nama: 'Kecap Bango 520ml', emoji: '🍶', jual: 24500, grosir: 20500, harga: { Alfagift: 21900, 'Klik Indomaret': 22800, Alfamidi: 22100, Yomart: 23200, Superindo: 23500, Lawson: 24000 } },
  { nama: 'Saus Sambal ABC 335ml', emoji: '🌶️', jual: 18500, grosir: 14800, harga: { Alfagift: 16400, 'Klik Indomaret': 16900, Alfamidi: 16200, Yomart: 17200, Superindo: 17500, Lawson: 18000 } },
  { nama: 'Mie Sedap 5pcs', emoji: '🍜', jual: 16500, grosir: 13200, harga: { Alfagift: 14500, 'Klik Indomaret': 14900, Alfamidi: 14300, Yomart: 15200, Superindo: 15500, Lawson: 16000 } },
  { nama: 'Biskuit Roma 300g', emoji: '🍪', jual: 15500, grosir: 12200, harga: { Alfagift: 13900, 'Klik Indomaret': 14200, Alfamidi: 13800, Yomart: 14500, Superindo: 14800, Lawson: 15200 } },
  { nama: 'Air Mineral 600ml x12', emoji: '💧', jual: 26500, grosir: 21500, harga: { Alfagift: 23900, 'Klik Indomaret': 24500, Alfamidi: 23800, Yomart: 25000, Superindo: 25500, Lawson: 26000 } },
  { nama: 'Popok MamyPoko M34', emoji: '👶', jual: 89500, grosir: 78500, harga: { Alfagift: 82900, 'Klik Indomaret': 84900, Alfamidi: 83500, Yomart: 86000, Superindo: 87500, Lawson: 88900 } },
  { nama: 'Pasta Gigi Pepsodent 190g', emoji: '🪥', jual: 18500, grosir: 14800, harga: { Alfagift: 16400, 'Klik Indomaret': 16900, Alfamidi: 16300, Yomart: 17200, Superindo: 17500, Lawson: 18000 } },
]

function rp(n){ return 'Rp' + Number(n||0).toLocaleString('id-ID') }

export default function App(){
  const [data, setData] = useState(()=>{
    const simpan = localStorage.getItem('mesin-serbu-v2')
    return simpan ? JSON.parse(simpan) : DATA_AWAL
  })
  const [scan, setScan] = useState('Belum pernah di-scan')
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState('Semua')
  const [editMode, setEditMode] = useState(false)

  useEffect(()=>{ localStorage.setItem('mesin-serbu-v2', JSON.stringify(data)) },[data])

  const ubah = (idx, field, val) => {
    const baru = [...data]
    baru[idx][field] = Number(val)
    setData(baru)
  }

  const serbu = () => {
    setLoading(true)
    setTimeout(()=>{
      const baru = data.map(p => {
        const h = {...p.harga}
        Object.keys(h).forEach(k => { h[k] = Math.max(1000, h[k] + Math.floor(Math.random()*1500 - 700)) })
        return {...p, harga: h}
      })
      setData(baru); setScan(new Date().toLocaleTimeString('id-ID') + ' WIB'); setLoading(false)
    }, 1200)
  }

  const hitung = (p) => {
    const termurah = Object.entries(p.harga).sort((a,b)=>a[1]-b[1])[0]
    const cuan = p.jual - termurah[1]
    const persen = ((cuan / termurah[1]) * 100).toFixed(1)
    return { toko: termurah[0], harga: termurah[1], cuan, persen, siap: cuan >= 2000 }
  }

  const tampil = data.filter(p => filter==='Siap Serbu' ? hitung(p).siap : true)
  const siapCount = data.filter(p => hitung(p).siap).length
  const totalCuan = tampil.reduce((a,p)=>a+hitung(p).cuan,0)

  return(
    <div style={{fontFamily:'sans-serif', background:'#111827', color:'white', minHeight:'100vh', paddingBottom:40}}>
      <div style={{padding:'16px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, background:'#111827', zIndex:10}}>
        <div><div style={{color:'#22c55e', fontWeight:'900', fontSize:20}}>MESIN SERBU PRO...</div><div style={{color:'#9ca3af', fontSize:13}}>Pantau | Serbu | Cuan</div></div>
        <button onClick={serbu} style={{background:'#22c55e', border:'none', padding:'12px 18px', borderRadius:14, fontWeight:'900'}}>{loading ? '⏳ SCAN...' : '⚡ SERBU'}</button>
      </div>
      <div style={{padding:'0 16px'}}>
        <h1 style={{fontSize:30, margin:'6px 0 2px'}}>Dashboard</h1>
        <p style={{color:'#9ca3af', margin:0}}>{siapCount} produk siap diserbu dari {data.length} produk pantauan • Total Cuan Potensi: <b style={{color:'#22c55e'}}>{rp(totalCuan)}</b></p>
        <p style={{color:'#9ca3af', fontSize:13}}>🕒 Scan terakhir: {scan}</p>
        <div style={{display:'flex', gap:8, marginTop:12}}>
          <button onClick={()=>setFilter('Semua')} style={{padding:'8px 16px', borderRadius:20, border:'none', background:filter==='Semua'?'#22c55e':'#1f2937', color:filter==='Semua'?'black':'white', fontWeight:'bold'}}>Semua</button>
          <button onClick={()=>setFilter('Siap Serbu')} style={{padding:'8px 16px', borderRadius:20, border:'none', background:filter==='Siap Serbu'?'#22c55e':'#1f2937', color:filter==='Siap Serbu'?'black':'white', fontWeight:'bold'}}>Siap Serbu ({siapCount})</button>
          <button onClick={()=>setEditMode(!editMode)} style={{padding:'8px 16px', borderRadius:20, border:'none', background: editMode?'#f59e0b':'#374151', color:editMode?'black':'white', fontWeight:'bold'}}>{editMode ? '✅ Selesai Edit' : '✏️ Edit Harga'}</button>
        </div>
        {editMode && <div style={{background:'#fef3c7', color:'#92400e', padding:12, borderRadius:12, marginTop:12, fontSize:13, fontWeight:'bold'}}>✏️ Mode Edit AKTIF - Ubah Harga Jual & Grosir di bawah, otomatis ke-save!</div>}
        <div style={{display:'grid', gap:14, marginTop:16}}>
          {tampil.map((p,i)=>{
            const idx = data.indexOf(p); const h = hitung(p)
            return(
              <div key={i} style={{background:'#1f2937', border:'1px solid #22c55e55', borderRadius:18, padding:16}}>
                <div style={{display:'flex', justifyContent:'space-between'}}><div style={{display:'flex', gap:12}}><div style={{fontSize:28, background:'#374151', width:56, height:56, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center'}}>{p.emoji}</div><div><div style={{fontWeight:'bold', fontSize:17}}>{p.nama}</div><div style={{fontSize:13, color:'#9ca3af'}}>Termurah: {h.toko} <span style={{background:'#065f46', padding:'2px 7px', borderRadius:6, fontSize:11}}>COD</span></div></div></div><div style={{background:'#422006', border:'1px solid #f59e0b', color:'#fbbf24', padding:'6px 12px', borderRadius:20, fontWeight:'900', height:'fit-content'}}>{h.persen}%</div></div>
                {editMode ? (
                  <div style={{background:'#111827', borderRadius:12, padding:12, marginTop:12, display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
                    <label style={{fontSize:12, color:'#9ca3af'}}>Harga Jual Warung<br/><input type="number" value={p.jual} onChange={e=>ubah(idx,'jual',e.target.value)} style={{width:'100%', padding:8, borderRadius:8, border:'none', marginTop:4, fontWeight:'bold'}}/></label>
                    <label style={{fontSize:12, color:'#9ca3af'}}>Harga Grosir D2<br/><input type="number" value={p.grosir} onChange={e=>ubah(idx,'grosir',e.target.value)} style={{width:'100%', padding:8, borderRadius:8, border:'none', marginTop:4, fontWeight:'bold'}}/></label>
                  </div>
                ) : (
                  <div style={{background:'#111827', borderRadius:12, padding:14, marginTop:14, display:'grid', gridTemplateColumns:'1fr 1fr', gap:14}}>
                    <div><div style={{color:'#9ca3af', fontSize:13}}>Harga Termurah</div><div style={{color:'#22c55e', fontWeight:'900', fontSize:20}}>{rp(h.harga)}</div></div>
                    <div><div style={{color:'#9ca3af', fontSize:13}}>D2 Grosir</div><div style={{fontWeight:'900', fontSize:20}}>{rp(p.grosir)}</div></div>
                    <div><div style={{color:'#9ca3af', fontSize:13}}>Jual Warung</div><div style={{fontWeight:'900', fontSize:20}}>{rp(p.jual)}</div></div>
                    <div><div style={{color:'#9ca3af', fontSize:13}}>Cuan</div><div style={{color:'#22c55e', fontWeight:'900', fontSize:20}}>{rp(h.cuan)}</div></div>
                  </div>
                )}
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:12, marginTop:14}}>{Object.entries(p.harga).map(([toko,harga])=>(<div key={toko}><div style={{color:'#9ca3af', fontSize:11, textTransform:'uppercase'}}>{toko}</div><div style={{fontWeight:'900', fontSize:15, color: harga===h.harga ? '#22c55e' : 'white'}}>{rp(harga)}</div></div>))}</div>
                <a href={`https://www.google.com/maps/search/${h.toko}+Cimahi`} target="_blank" style={{display:'block', textAlign:'center', background: h.siap ? '#22c55e' : '#374151', color: h.siap ? 'black' : 'white', textDecoration:'none', fontWeight:'900', padding:12, borderRadius:12, marginTop:14}}>{h.siap ? `🔥 SERBU DI ${h.toko.toUpperCase()} - CUAN ${rp(h.cuan)}` : 'BELUM CUAN - PANTAU DULU'}</a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
                                                                            }
