import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const KEY = '115673062d9a805a3df250beb0ca2927';

export const MovieDetails = () => {
    const { moviesId } = useParams();
    const [movie, setMovie] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        function fetchData() {
            return fetch(`https://api.themoviedb.org/3/movie/${moviesId}?api_key=${KEY}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
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
            <img src={image} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>User score: {movie.vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
            <div>
                <h4>Additional information</h4>
                <ul>
                    <li>Cast</li>
                    <li>Reviews</li>
                </ul>
            </div>
            </> }
        </main>
    )
}