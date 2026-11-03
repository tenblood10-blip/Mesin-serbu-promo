import { useState, useMemo } from 'react';
const marketLink=(m,p)=>{const q=encodeURIComponent(p);const x=m.toLowerCase();if(x.includes('alfagift')||x==='alfa')return`https://www.alfagift.id/search?q=${q}`;if(x.includes('klik')||x.includes('indomaret'))return`https://www.klikindomaret.com/search?keyword=${q}`;if(x.includes('alfamidi')||x==='midi')return`https://www.alfamidi.co.id/search?query=${q}`;if(x.includes('yomart'))return`https://www.yomart.co.id/search?search=${q}`;if(x.includes('superindo'))return`https://www.superindo.co.id/search?q=${q}`;return`https://www.lawson.co.id/search?search=${q}`;}
const DATA=[
{produk:'Minyak Sovia 2L',kategori:'minyak',alfagift:40900,klikindomaret:41800,alfamidi:41200,yomart:41500,superindo:42500,lawson:43000},
{produk:'Minyak Alfamart 2L',kategori:'minyak',alfagift:40200,klikindomaret:41500,alfamidi:40500,yomart:41000,superindo:42000,lawson:42800},
{produk:'Beras Ramos 5kg',kategori:'beras',alfagift:62500,klikindomaret:63500,alfamidi:63000,yomart:64000,superindo:62000,lawson:65000},
{produk:'Indomie Goreng',kategori:'mie',alfagift:3100,klikindomaret:3000,alfamidi:3200,yomart:3150,superindo:3300,lawson:3200},
{produk:'Gula Rose 1kg',kategori:'sembako',alfagift:16500,klikindomaret:16800,alfamidi:16600,yomart:17000,superindo:16400,lawson:17200},
{produk:'Telur 1kg',kategori:'sembako',alfagift:28500,klikindomaret:29000,alfamidi:28700,yomart:29200,superindo:28000,lawson:29500},
{produk:'Aqua 600ml',kategori:'minuman',alfagift:3000,klikindomaret:2800,alfamidi:3000,yomart:3000,superindo:2900,lawson:3100},
];
export default function App(){
const [cat,setCat]=useState('semua');const [q,setQ]=useState('');
const processed=useMemo(()=>DATA.map(d=>{const p={alfagift:d.alfagift,klikindomaret:d.klikindomaret,alfamidi:d.alfamidi,yomart:d.yomart,superindo:d.superindo,lawson:d.lawson};const t=Object.entries(p).sort((a,b)=>a[1]-b[1])[0];return{...d,termurah:t[0],hargaTermurah:t[1],prices:p}}).filter(d=>(cat==='semua'||d.kategori===cat)&&d.produk.toLowerCase().includes(q.toLowerCase())
