import { NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Reviews } from './Reviews/Reviews';
import { Cast } from './Cast/Cast';

// 115673062d9a805a3df250beb0ca2927

export const App = () => {
  return (
    <div>
      <header>
      <nav>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
      </nav>
      </header>
      

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/movies/:moviesId' element={<MovieDetails />}>
          <Route path='cast' element={<Cast />}/>
          <Route path='reviews' element={<Reviews />}/>
        </Route>
      </Routes>
    </div>
  );
};
