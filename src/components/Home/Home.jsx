import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const KEY = '115673062d9a805a3df250beb0ca2927';

const Home = () => {
    const [movies, setMovies] = useState(null);
    const location = useLocation();

    useEffect(() => {
        function fetchData() {
            return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`)
            .then(resp => resp.json())
            .then(data => {
              setMovies(data.results)
            })
              .catch(erorr => alert(erorr));
          }
          fetchData();
    }, []);
    

    return (
        <main>
            { movies &&
            <ul>
            { movies.map(item => 
            { return (<li key={item.id}>
                <Link to={`/movies/${item.id}`} state={{ from: location }}>{item.title}</Link>
                </li>)}
            )}
            </ul>}
        </main>
    )
}

export default Home;

Home.propTypes = {
    state: PropTypes.arrayOf(PropTypes.exact({
        movies: PropTypes.array
    }))
}