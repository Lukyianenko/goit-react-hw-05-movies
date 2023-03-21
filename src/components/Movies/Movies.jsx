import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './Movies.module.css';

const KEY = '115673062d9a805a3df250beb0ca2927';

const Movies = () => {
    const [movies, setMovies] = useState({});
    const [searchParams, setSearchParams] = useSearchParams('');
    const [moviesId, setMoviesId] = useState('');
    const [value, setValue] = useState('');
    const location = useLocation();
    let query = searchParams.get('moviesId') ?? '';
    
     const searchMoviesSubmit = async (e) => {
        e.preventDefault();
        setSearchParams({moviesId: value});
        query = searchParams.get('moviesId');

        if(query !== null) {
            setMoviesId(query.trim());

            if(query.trim() === '' || query.trim() === null) {
                alert('please enter name movies');
                setMovies([]);
                if(query === '') {
                    setSearchParams({});
                 }
                return;
            }
        }
    }

    useEffect(() => {
        if(query === '') return;

        function fetchData() {
            return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}`)
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
    }, [query]); 

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
            <form onSubmit={searchMoviesSubmit}>
            <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
            <button type='submit'>Search</button>
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