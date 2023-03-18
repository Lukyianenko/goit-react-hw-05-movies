import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const KEY = '115673062d9a805a3df250beb0ca2927';

export const Reviews = () => {
    const { moviesId } = useParams();
    const [review, setReview] = useState({});

    useEffect(() => {
        async function fetchData() {
            return await fetch(`https://api.themoviedb.org/3/movie/${moviesId}/reviews?api_key=${KEY}`)
            .then(resp => resp.json())
            .then(data => {
                setReview(data.results);
            })
              .catch(erorr => alert(erorr));
          }
          fetchData();
    }, [moviesId]);

    return (
        <div>
            { review.length > 0 &&
            <ul>
                {
                  review.map(item => {
                    return(
                        <li key={item.id}>
                       <h3>{item.author}</h3>
                    <p>{item.content}</p>
                        </li>
                    )
                  })  
                }
            </ul>}
            {
                review.length === 0 && 
                <p>We don`t have any reviews for this movie.</p>
            }
        </div>
    )
}