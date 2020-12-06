import React from 'react';
import './App.css';
import NavBar from "./views/nav-bar/NavBar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MovieListComponent from "./views/MovieList/MovieListComponent";
import {NavigationPath} from "./util/NavigationUtil";
import MovieContextProvider from "./MovieContext";

const App = () => {

    return (
        <MovieContextProvider>
            <div className="App">
                <Router>
                    <NavBar />

                    <Switch>
                        <Route
                            path={[NavigationPath.ROOT, NavigationPath.UPCOMING_MOVIES, NavigationPath.POPULAR_MOVIES, NavigationPath.SEARCH]}
                            component={() => MovieListComponent()}/>
                    </Switch>
                </Router>
            </div>
        </MovieContextProvider>
    );
}

export default App;