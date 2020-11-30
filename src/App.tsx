import React from 'react';
import './App.css';
import NavBar from "./views/nav-bar/NavBar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MovieListComponent from "./views/MovieList/MovieListComponent";
import {NavigationPath} from "./util/NavigationUtil";

const App = () => {

    return (
        <div className="App">
            <Router>
                <NavBar/>

                <Switch>
                    <Route path={[NavigationPath.ROOT, NavigationPath.UPCOMING_MOVIES, NavigationPath.POPULAR_MOVIES]}
                           exact component={() => MovieListComponent()}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;