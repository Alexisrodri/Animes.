import { useState, useEffect } from 'react'
import { MangasApi } from '../../Fetch'
import MangasList from './MangasList'

const Mangas = () => {

    const [mangas, setMangas] = useState([])
    const [total, setTotal] = useState()
    const [cargando, setCargando] = useState(true)
    const [page, setPage] = useState(1)

    const FetchMangas = async() =>{
        try{
        setCargando(true);
        const Data = await MangasApi(25, page)
        setMangas(Data);
        setCargando(false);  
        const Paginas = Math.floor(Data.meta.last_page/25);
        setTotal(Paginas);
        }catch(error){}
      }

      useEffect(()=>{
        FetchMangas()
      },[page])
    
    return(
        <div className='Main'>
        <MangasList mangas={mangas} setPage={setPage} page={page} total={total} cargando={cargando} />
        </div>
    )
}

export default Mangas;