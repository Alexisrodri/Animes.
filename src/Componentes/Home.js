import {Link } from 'wouter';
import Busqueda from './/Busqueda';

function Home() {


  return (
    <div className='main'>
    <nav className='Links'>
      <ul className="content__item">
			<button className="button button--mimas">
      <span>
      <Link href="/Animes" className='Home-Links'>
        <a className='nav-links' href='/Animes'>Animes</a>
      </Link>
        </span>
      </button>
				</ul>
      <ul className="content__item">
			<button className="button button--mimas">
      <span>
      <Link href="/Manga" className='Home-Links'>
        <a className='nav-links' href='/Manga' >Mangas</a> 
      </Link>
        </span>
      </button>
			</ul>
      </nav>
      <Busqueda />
    </div>
    )
}

export default Home;
