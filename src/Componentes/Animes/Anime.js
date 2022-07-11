import AnimeList from './ListaAnime'
import React,{ useState, useEffect } from 'react'
import { AnimeApi } from '../../Fetch'

export default function AnimesPages() {
  const [animes, setAnimes] = useState()
  const [total, setTotal] = useState()
  const [cargando, setCargando] = useState(true)
  const [page, setPage] = useState(1)

const FetchAnime = async() =>{
  try{
    setCargando(true);
    const Datos = await AnimeApi(25,  page);
    setAnimes(Datos.data);
    setCargando(false);  
    const Paginas = Math.floor(Datos.meta.last_page/25);
    setTotal(Paginas);
  }catch(error){}
}



useEffect(()=>{
  FetchAnime()
},[page])


  
  return (
    <div className='Anime-cont'>
    <div className='Main-Anime'>
    <AnimeList animes={animes} setPage={setPage} page={page} total={total} cargando={cargando} />
    </div>
    </div>
  )
}