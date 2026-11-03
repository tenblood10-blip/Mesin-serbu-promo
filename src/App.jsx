import { useState, useMemo } from 'react'
const marketLink = (q, p) => {
  const query = encodeURIComponent(`${q} ${p} promo`.trim())
  return `https://www.google.com/search?q=${query}&tbm=shop`
}
const DATA = [
  {produk:'Minyak Sovia 2L',kategori:'minyak',harga:26000},
  {produk:'Minyak Alfamart 2L',kategori:'minyak',harga:28000},
  {produk:'Beras Ramos 5kg',kategori:'sembako',harga:62000},
  {produk:'Indomie Goreng',kategori:'mie',harga:3100},
  {produk:'Gula Rose 1kg',kategori:'sembako',harga:17500},
  {produk:'Telur 1kg',kategori:'sembako',harga:28000},
  {produk:'Aqua 600ml',kategori:'minuman',harga:3500},
]
export default function App(){
  const [cat,setCat]=useState('semua')
  const [search,setSearch]=useState('')
  const processed=useMemo(()=>DATA.filter(d=>{
    const okCat = cat==='semua' || d.kategori===cat
    const okSearch = d.produk.toLowerCase().includes(search.toLowerCase())
    return okCat && okSearch
  }),[cat,search])
  return (
    <div style={{padding:20,fontFamily:'sans-serif',background:'#f8fafc',minHeight:'100vh'}}>
      <h1>🔥 Mesin Serbu Promo</h1>
      <input placeholder="Cari produk..." value={search} onChange={e=>setSearch(e.target.value)} style={{padding:10,width:'90%',marginBottom:10}}/>
      <div style={{display:'flex',gap:8,marginBottom:15,flexWrap:'wrap'}}>
        {['semua','minyak','sembako','mie','minuman'].map(c=><button key={c} onClick={()=>setCat(c)} style={{padding:'6px 12px',background:cat===c?'black':'white',color:cat===c?'white':'black',border:'1px solid black',borderRadius:20}}>{c}</button>)}
      </div>
      <div style={{display:'grid',gap:10}}>
        {processed.map((d,i)=><div key={i} style={{background:'white',padding:15,borderRadius:10}}>
          <b>{d.produk}</b><br/>Rp {d.harga.toLocaleString()}<br/>
          <a href={marketLink(d.produk,'')} target="_blank" style={{color:'blue'}}>Cek Promo →</a>
        </div>)}
      </div>
    </div>
  )
    }
