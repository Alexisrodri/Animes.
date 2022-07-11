import Paginacion from "../Paginacion"
import React from "react"

const AnimeList = ({animes,page,cargando,setPage,total}) =>{
    const nextPages = () =>{
        const nextpage = Math.min(page + 1, total)
        setPage(nextpage)
        console.log("Mamut+1");
    }

    const lastPages = () =>{
        const lastpage = Math.max(page - 1,0)
        setPage(lastpage)
        console.log("Mamut-1");
    }
    
    
    return(
        <>
            <Paginacion pages={page} totalPages={total} clickDerecho={lastPages} clickIzquierdo={nextPages} />
        <section className="Anime-List">
        {cargando ?
        <div className="Cont-Loading">
            <h3 className="Cargando">Cargando Animes...</h3>
        </div>
        :
        animes.map((anime)=>{
            return(
                <picture className="cont-images" key={anime.mal_id}>
                <img src={anime.images.jpg.image_url} className="anime-images" alt={anime.title} />
                <a href={anime.url} className='anime-links' >{anime.title}</a>
                </picture>
            )
        })
        }
        </section>
        </>
    )
}


export default AnimeList