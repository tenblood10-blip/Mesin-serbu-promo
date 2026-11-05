import { useState } from 'react'
const DATA=[
{n:"Minyak Tropical 2L",e:"🛢️",j:43900,h:{Alfagift:39500,Indomaret:41300,Alfamidi:39700,Yomart:42100,Superindo:42100,Lawson:43600,D2:39000}},
{n:"Telur 1kg",e:"🥚",j:29500,h:{Alfagift:28600,Indomaret:29100,Alfamidi:28400,Yomart:29500,Superindo:28200,Lawson:29600,D2:25500}},
{n:"Beras Ramos 5kg",e:"🍚",j:68500,h:{Alfagift:64200,Indomaret:65800,Alfamidi:66100,Yomart:67000,Superindo:66500,Lawson:69000,D2:61000}},
{n:"Indomie Goreng 5pcs",e:"🍜",j:17500,h:{Alfagift:15000,Indomaret:15900,Alfamidi:14600,Yomart:16400,Superindo:15900,Lawson:16900,D2:14200}},
{n:"Gula Pasir 1kg",e:"🧂",j:18500,h:{Alfagift:16400,Indomaret:18000,Alfamidi:16600,Yomart:17500,Superindo:17600,Lawson:18800,D2:15800}},
{n:"Kopi Kapal Api 165g",e:"☕",j:23500,h:{Alfagift:21400,Indomaret:22300,Alfamidi:21000,Yomart:21300,Superindo:22400,Lawson:22200,D2:19500}},
{n:"Susu UHT 1L",e:"🥛",j:22900,h:{Alfagift:20700,Indomaret:20100,Alfamidi:19100,Yomart:21300,Superindo:22200,Lawson:22400,D2:18500}},
{n:"Minyak Rose Brand 2L",e:"🛢️",j:41900,h:{Alfagift:37800,Indomaret:38400,Alfamidi:38900,Yomart:39900,Superindo:40000,Lawson:41200,D2:37500}},
];
const rp=n=>"Rp"+n.toLocaleString("id-ID");
export default function App(){
return(<div style={{background:"#0f172a",minHeight:"100vh",color:"white",padding:16,fontFamily:"sans-serif"}}>
<div style={{display:"flex",justifyContent:"space-between"}}><div><div style={{color:"#22c55e",fontWeight:900,fontSize:22,lineHeight:1.1}}>MESIN SERBU<br/>PROMO</div><div style={{color:"#94a3b8",fontSize:13}}>Pantau | Serbu | Cuan</div></div><button style={{background:"#22c55e",border:"none",padding:"12px 20px",borderRadius:14,fontWeight:800}}>⚡ SERBU</button></div>
<div style={{fontSize:12,color:"#94a3b8",marginTop:10}}>Scan terakhir: {new Date().toLocaleString("id-ID")} • Bensin Rp5.000/trip</div>
{DATA.map((p,i)=>{
const e=Object.entries(p.h); const [toko,termurah]=e.reduce((a,b)=>b[1]<a[1]?b:a);
const cuan=p.j-termurah; const persen=(cuan/termurah*100); const minBeli=Math.max(1,Math.ceil(5000/cuan));
return(<div key={i} style={{background:"#1e293b",border:"1px solid #22c55e55",borderRadius:18,padding:14,marginTop:14}}>
<div style={{display:"flex",justifyContent:"space-between"}}><div><span style={{fontSize:28}}>{p.e}</span> <b>{p.n}</b><br/><span style={{color:"#94a3b8",fontSize:12}}>Termurah: {toko} • COD</span></div><div style={{background:"#422006",color:"#fbbf24",border:"1px solid #f59e0b",padding:"6px 10px",borderRadius:20,fontWeight:800,height:26}}>{persen.toFixed(1)}%</div></div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",background:"#0f172a",borderRadius:12,padding:12,marginTop:12}}><div><div style={{color:"#94a3b8",fontSize:12}}>Harga Termurah</div><b style={{color:"#22c55e",fontSize:20}}>{rp(termurah)}</b></div><div><div style={{color:"#94a3b8",fontSize:12}}>D2 Grosir</div><b style={{fontSize:20}}>{rp(p.h.D2)}</b></div><div><div style={{color:"#94a3b8",fontSize:12}}>Jual Warung</div><b style={{fontSize:20}}>{rp(p.j)}</b></div><div><div style={{color:"#94a3b8",fontSize:12}}>Cuan</div><b style={{color:"#22c55e",fontSize:20}}>{rp(cuan)}</b></div></div>
<div style={{fontSize:12,color:"#fbbf24",marginTop:8}}>💡 Beli minimal {minBeli} pcs biar balik modal bensin! Cuan bersih 1 pcs: {rp(cuan-5000)}</div>
<button style={{width:"100%",background:persen>=10?"#22c55e":"#334155",border:"none",padding:14,borderRadius:12,marginTop:12,fontWeight:900}}> {persen>=10?`🔥 SERBU DI ${toko.toUpperCase()} - CUAN ${rp(cuan)}`:`BELUM CUAN - PANTAU DULU`} </button>
<div style={{textAlign:"center",fontSize:11,color:"#64748b",marginTop:6}}>Promo berakhir: 7 hari lagi • Stok: Ada</div>
</div>)})}</div>)}
