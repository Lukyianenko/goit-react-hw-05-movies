import { NavLink, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import PropTypes from 'prop-types';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Reviews } from './Reviews/Reviews';
import { Cast } from './Cast/Cast';
import css from './App.module.css';

// 115673062d9a805a3df250beb0ca2927

export const App = () => {
  const [isActive, setIsActive] = useState('active');
  const [isActive2, setIsActive2] = useState('');
  const classActive = css["link"] + ' ' + css[isActive];
  const classActive2 = css["link"] + ' ' + css[isActive2];


const isActived = () => {
  setIsActive('active');
  setIsActive2('');
}
const isActived2 = () => {
  setIsActive2('active');
  setIsActive('');
}

  return (
    <div>
      <header className={css.header}>
      <nav className={css.NavList}>
        <NavLink to='/' className={classActive} onClick={isActived}>Home</NavLink>
        <NavLink to='/movies' className={classActive2} onClick={isActived2}>Movies</NavLink>
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

App.propTypes = {
  classActive: PropTypes.string,
  classActive2: PropTypes.string,
    state: PropTypes.arrayOf(PropTypes.exact({
      isActive: PropTypes.string.isRequired,
      isActive2: PropTypes.string.isRequired,
    }))
}