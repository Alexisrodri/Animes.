import { Route } from 'wouter';
import Home from './Componentes/Home';
import './App.css';
import AnimesPages from './Componentes/Animes/Anime';
import Mangas from './Componentes/Mangas/Mangas';

function App() {


  return (
    <div className='main'>
    <Route path='/' component={Home} />
    <Route path='/Animes' component={AnimesPages} />
    <Route path='/Manga' component={Mangas} />
    <footer>
        <div class="left">
            <small>2017-2022 <b>Jikan.moe</b>
        </small></div><small>

        <div class="right">
                <small>This website is open-source. <a href="https://github.com/jikan-me/website"><b>Help by making it better.</b></a></small>
        </div>
    </small></footer>
    </div>
    )
}

export default App;
