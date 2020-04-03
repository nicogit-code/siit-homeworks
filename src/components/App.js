import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './header/Header';
import MovieList from './movies/MovieList';
import MovieDetails from './movies/MovieDetails';
import MovieRatings from './movies/MovieRatings';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>
            <Header user="Alexandru" />
            <Route exact path="/">
                <MovieList />
            </Route>
            <Route path="/movies/:movieId"> 
                <MovieDetails />
            </Route>
        </BrowserRouter>
    );
}

//movieId e o denumire random, aleasa de noi

//default export
export default App;

// const settings = 'my settings';

// //named export
// export { 
//     App,
//     settings
// }
