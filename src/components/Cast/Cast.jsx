import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import css from './Cast.module.css';

const KEY = '115673062d9a805a3df250beb0ca2927';

export const Cast = () => {
    const { moviesId } = useParams();
    const [casts, setCasts] = useState(null);

    useEffect(() => {
        async function fetchData() {
            return await fetch(`https://api.themoviedb.org/3/movie/${moviesId}/credits?api_key=${KEY}`)
            .then(resp => resp.json())
            .then(data => {
                setCasts(data.cast);
            })
              .catch(erorr => alert(erorr));
          }
          fetchData();
    }, [moviesId]);


    return (
        <div>
           { casts &&
            <ul className={css.actorList}>
                {
                  casts.map(item => {
                    let image;
                    if(item.profile_path) {
                        image = `https://image.tmdb.org/t/p/w500/${item.profile_path}`;
                    }
                    return(
                        <li key={item.id} className={css.itemActor}>
                            <div className={css.imgNot}>
                            <img src={image} alt={item.original_name} className={css.imgActor}/>
                            </div>
                       
                    <p>{item.original_name}</p>
                    <p>Character: {item.character}</p>
                        </li>
                    )
                  })  
                }
            </ul>}
        </div>
    )
}

Cast.propTypes = {
    moviesId: PropTypes.number,
    state: PropTypes.arrayOf(PropTypes.exact({
        casts: PropTypes.array
    }))
}