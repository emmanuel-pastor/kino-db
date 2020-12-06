import MovieComponent from "../movie-component/MovieComponent";
import React, {useContext, useEffect} from "react";
import EmptyListComponent from "../empty-list-component/EmptyListComponent";
import {NavigationPath} from "../../util/NavigationUtil";
import {useLocation} from "react-router";
import style from './MovieList.module.css'
import {MovieContext} from "../../MovieContext";

function MovieListComponent() {

    const {movies, fetchUpcomingMovies, fetchPopularMovies, fetchMultiSearch} = useContext(MovieContext);
    const {pathname} = useLocation();

    useEffect(() => {
        switch (pathname) {
            case NavigationPath.ROOT:
                fetchUpcomingMovies();
                break;
            case NavigationPath.UPCOMING_MOVIES:
                fetchUpcomingMovies();
                break;
            case NavigationPath.POPULAR_MOVIES:
                fetchPopularMovies();
                break;
            default:
                if (pathname.startsWith(NavigationPath.SEARCH))
                    fetchMultiSearch(pathname.split(NavigationPath.SEARCH)[1].substring(1));
                break;
        }
    }, [pathname]);

    return (
        <div className={style.Wrapper}>
            <div className={style.MovieList}>
                {movies.map(movie => (
                    <MovieComponent key={movie.id} {...movie}/>
                ))}
            </div>

            <EmptyListComponent hidden={movies.length !== 0}/>
        </div>
    );
}

export default MovieListComponent;