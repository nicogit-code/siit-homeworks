import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './header/Header';
import MovieList from './movies/MovieList';
import MovieDetails from './movies/MovieDetails';
import Register from './auth/Register';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        
        <BrowserRouter>
            <Header user="Alexandru" />
            <div className="container">
                <Route exact path="/">
                    <MovieList />
                </Route>
                <Route path="/movies/:movieId">
                    <MovieDetails />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
            </div>
        </BrowserRouter>
    );
}

//default export
export default App;

// const settings = 'my settings';

// //named export
// export { 
//     App,
//     settings
// }
