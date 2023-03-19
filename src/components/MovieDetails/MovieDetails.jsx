import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import css from './MovieDetails.module.css';

const KEY = '115673062d9a805a3df250beb0ca2927';

const MovieDetails = () => {
    const { moviesId } = useParams();
    const [movie, setMovie] = useState(null);
    const [image, setImage] = useState(null);
    const location = useLocation();
    const backLink = useRef(location.state?.from ?? '/movies');
    let num;

    console.log(backLink);
    console.log(location)
    if(movie){
    num = Math.round(movie.vote_average * 10);
    }

    useEffect(() => {
        function fetchData() {
            return fetch(`https://api.themoviedb.org/3/movie/${moviesId}?api_key=${KEY}`)
            .then(resp => resp.json())
            .then(data => {
                setMovie(data);
                setImage(`https://image.tmdb.org/t/p/w500${data.poster_path}`);
            })
              .catch(erorr => alert(erorr));
          }
          fetchData();
    }, [moviesId]);

    return (
            <main>
                { movie &&
                <>
                <Link to={backLink.current}>Back</Link>
              <section className={css.sectionMovie}>
            <img src={image} alt={movie.title} className={css.imageMovies}/>
            <div className={css.contList}>
            <h2>{movie.title}</h2>
            <p>User score: {num} %</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
            </div>
            </section>
            <div className={css.containerInfo}>
                <h4>Additional information</h4>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>    
                    </li>
                </ul>
            </div>
            </>
            }
            <Outlet /> 
        </main>
    )
}

export default MovieDetails;

MovieDetails.propTypes = {
    moviesId: PropTypes.number,
    num: PropTypes.number,
    state: PropTypes.arrayOf(PropTypes.exact({
        movie: PropTypes.array,
        image: PropTypes.string
    }))
}