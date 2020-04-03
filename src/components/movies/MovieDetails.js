import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import MovieRatings from "./MovieRatings";

function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    async function getMovieById(id) {
        const res = await axios('https://ancient-caverns-16784.herokuapp.com/movies/' + id);
        setMovie(res.data);
        setRatings(res.data.results);
    }


    let [ratings, setRatings] = useState([]);

    
    useEffect(() => { 
        getMovieById(movieId); 
    }, [movieId]);


    if(movie) {
        console.log(movie);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <h1>{ movie.Title }</h1>
                        <h3>({ movie.Year })</h3>
                    </div>
                
                    <div className="col-3">
                        { ratings.map(movie => <MovieRatings film={ movie } key={ movie._id } />) }         
                    </div>

                    {/* <div>
                        <MovieRatings/>
                    </div> */}

                    <div className="col-3">
                        <h6>IMDb Rating: { movie.imdbRating } /10</h6>
                        <p>{ movie.imdbVotes }</p>
                        <p>Votes:{ movie.imdbVotes }</p>
                        <p>Rated: { movie.Rated }</p>
                        <p>Metascore: { movie.Metascore }</p>
                    </div>
                </div>

                <div className="row">
                        <p><b>Genre:</b> { movie.Genre } |</p>
                        <p><b>Runtime:</b> { movie.Runtime } |</p>
                        <p><b>Released:</b> { movie.Released }</p>
                </div>

                <div className="col-9">
                    <img className="card-img-top" src={ movie.Poster } alt="Movie Poster" />
                </div>

                <div className="col-9">
                    <p><b>Movie plot:</b> { movie.Plot }</p>
                    <p><b>Director:</b> { movie.Director }</p>
                    <p><b>Writers:</b> { movie.Writer }</p>
                    <p><b>Stars:</b> { movie.Actors }</p>
                </div>
                
            </div>
        );
    } else {
        return <h1>Loading ...</h1>;
    }
}

export default MovieDetails;