import React from 'react';

function MovieRatings({ film }) {


    return(
        <div className="row">
            <p>IMDb Rating: { film.imdbRating } /10</p>
            <p>Votes:{ film.imdbVotes }</p>
            <p>Rated: { film.Rated }</p>
            <p>Ratings: { film.Rated }</p>
            <p>Metascore: { film.Metascore }</p>
        </div>
    )

    

}

export default MovieRatings;