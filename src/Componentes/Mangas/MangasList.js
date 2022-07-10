import Paginacion from "../Paginacion"



const MangasList = ({mangas,page,cargando,setPage,total}) =>{
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
        <div className="box-cargando">
            <h3 className="Cargando">cargando...</h3>
        </div>
        :
        mangas.data.map((manga)=>{
            return(
                <picture className="cont-images" key={manga.mal_id}>
                <img src={manga.images.jpg.image_url}  className="anime-images" alt={manga.title} />
                <a href={manga.url} className='anime-links' >{manga.title}</a>
                </picture>
            )
        })}
        </section>
        </>
    )
}


export default MangasList;