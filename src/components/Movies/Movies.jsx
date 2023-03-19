import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './Movies.module.css';

const KEY = '115673062d9a805a3df250beb0ca2927';

const Movies = () => {
    const [movies, setMovies] = useState({});
    const [searchParams, setSearchParams] = useSearchParams('');
    const [moviesId, setMoviesId] = useState('');
    const location = useLocation();

    const searchMovies = (e) => {
        e.preventDefault();

        if(searchParams.get('moviesId') !== null) {
            setMoviesId(searchParams.get('moviesId').trim());

            if(searchParams.get('moviesId').trim() === '' || searchParams.get('moviesId').trim() === null) {
                alert('please enter name movies');
                setMovies([]);
                if(e.target.value === '') {
                    setSearchParams({});
                 }
                return;
            }
        }

                


        
    }

    useEffect(() => {
        if(moviesId === null || moviesId === '') {
            return
        }

        function fetchData() {
            return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${moviesId}`)
            .then(resp => resp.json())
            .then(data => {
                if(data.results.length === 0) {
                    alert('Not found movies with this name! Please, try again.');
                    return;
                }
                setMovies(data.results);
            })
              .catch(erorr => alert(erorr));
          }
          fetchData();
    }, [moviesId]);   
    
    return (
        <main className={css.Movies}>
            <form>
            <input type="text" value={searchParams.get('moviesId') ? searchParams.get('moviesId') : ''} onChange={e => setSearchParams({ moviesId: e.target.value})}/>
            <button onClick={searchMovies}>Search</button>
            </form>
            
            { movies.length > 0 &&
            <ul>
            { movies.map(item => 
            { return (<li key={item.id}>
                <Link to={`/movies/${item.id}`} state={{ from: location }}>{item.title}</Link>
                </li>)}
            )}
            </ul>}
            { movies.length === 0 &&
                <p>Not found movies with this name! Please, try again.</p>
            }
        </main>
    )
}

export default Movies;

Movies.propTypes = {
    state: PropTypes.arrayOf(PropTypes.exact({
        searchParams: PropTypes.string,
        movies: PropTypes.array,
        moviesId: PropTypes.number,
    }))
}