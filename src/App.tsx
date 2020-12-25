import React from 'react';
import './App.css';
import NavBar from "./views/nav-bar/NavBar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MovieListComponent from "./views/movie-list/MovieListComponent";
import {NavigationPath} from "./util/NavigationUtil";
import MovieContextProvider from "./views/movie-list/MovieListContext";
import MovieDetailsComponent from "./views/movie-details/MovieDetailsComponent";
import {DetailedMovieContextProvider} from "./views/movie-details/DetailedMovieContext";

const App = () => {

    return (
        <MovieContextProvider>
            <div className="App">
                <DetailedMovieContextProvider>
                    <Router basename={'kino-db'}>
                        <NavBar/>
                        <Switch>

                            <Route path={NavigationPath.MOVIE_DETAILS} component={() => MovieDetailsComponent()}/>

                            <Route
                                path={[NavigationPath.ROOT, NavigationPath.UPCOMING_MOVIES, NavigationPath.POPULAR_MOVIES, NavigationPath.SEARCH]}
                                component={() => MovieListComponent()}/>
                        </Switch>
                    </Router>
                </DetailedMovieContextProvider>
            </div>
        </MovieContextProvider>
    );
}

export default App;