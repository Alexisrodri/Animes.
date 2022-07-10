import { useState } from "react";
import  {AnimeFind}  from "../Fetch";

const Busqueda = () => {
    
const [anime, setAnime] = useState("");


const ApiFind = async (anime) => {  
    const res = await AnimeFind(anime);
    if( anime.length <= 3 ){
    alert('al menos 4 letras')
    }else{
        setAnime(res.data)
    }
    }


const Enter = (e) => {
    if(e.key === "Enter"){
        BuscadorClick();
    }
}

const buscador = (e) =>{
    setAnime(e.target.value);
    }

const BuscadorClick =async() => {
     ApiFind(anime)
}




    return(
        <section className="Buscador">
        <article className="Articulo-find">
        <h1 className="articulo-titulo">API de Jikan</h1>
        <h2 className="articulo-sub">API NO OFICIAL DE MYANIMELIST</h2>
        <p className="articulo-des" >Jikan 時間 es una API PHP y REST de código abierto para la comunidad y base de datos de anime + manga en línea más activa : MyAnimeList.net . Analiza el sitio web para satisfacer la necesidad de una API.</p>
        </article>
        <div className="cont-buscador">
        <h1 className="buscado-titulo">Prueba la API de búsqueda de anime</h1>
        <div className="formulario">
        <input className="input-buscador" onChange={buscador} placeholder="Buscador..."   onKeyDown={Enter}></input>
        <button className="buscador-btn" onClick={BuscadorClick}>🔍</button>
        </div>
        <div className="Busqueda-animes">
        { (!Array.isArray(anime))   ?
        <><h1 className="Texto-busqueda">Busca un anime</h1></>
        :
        (
        anime.map((animes,idx)=>{
            return(
                <div key={idx} className='cont-busqueda'>
                    <img src={animes.images.jpg.image_url} className="anime-busqueda" alt={anime.title} />
                    <a className="anime-name" href={animes.url} >{animes.title}</a>
                </div>
            )
        })
        )
    }
        </div>
    </div>
        </section>
    )
}

export default Busqueda;