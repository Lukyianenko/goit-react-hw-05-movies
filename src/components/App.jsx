import { NavLink, Route, Routes } from 'react-router-dom';
import { useState, lazy, Suspense } from "react";
import PropTypes from 'prop-types';
import css from './App.module.css';

const Home = lazy(() => import('../components/Home/Home'));
const Movies = lazy(() => import('../components/Movies/Movies'));
const MovieDetails = lazy(() => import('../components/MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const Cast = lazy(() => import('../components/Cast/Cast'));

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
      
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/movies/:moviesId' element={<MovieDetails />}>
          <Route path='cast' element={<Cast />}/>
          <Route path='reviews' element={<Reviews />}/>
        </Route>
      </Routes>
      </Suspense>
      
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