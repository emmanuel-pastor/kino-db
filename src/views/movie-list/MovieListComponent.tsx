import MovieComponent from "../movie-component/MovieComponent";
import React, {useContext, useEffect} from "react";
import EmptyListComponent from "../empty-list-component/EmptyListComponent";
import {NavigationPath} from "../../util/NavigationUtil";
import {useLocation} from "react-router";
import style from './MovieList.module.css'
import {MovieListContext} from "./MovieListContext";
import TMDbAttribution from "../tmdb-attribution/TMDbAttribution";
import {GENRE_LIST} from "../../domain/DetailedMovie";
import GenreChip from "../genre-chip-component/GenreChip";

function MovieListComponent() {

    const {movies, fetchUpcomingMovies, fetchPopularMovies, fetchMovies} = useContext(MovieListContext);
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
                    fetchMovies(pathname.split(NavigationPath.SEARCH)[1].substring(1));
                break;
        }
    }, [pathname]);

    return (
        <div className={style.Wrapper}>
            {pathname === NavigationPath.POPULAR_MOVIES ?
                <div className={style.GenreList}>
                    {GENRE_LIST.map(genre => (
                        <GenreChip key={genre.id} genre={genre}/>
                    ))}
                </div> : null
            }

            <div className={style.MovieList}>
                {movies.map(movie => (
                    <MovieComponent key={movie.id} {...movie}/>
                ))}
            </div>

            <EmptyListComponent hidden={movies.length !== 0}/>
            <TMDbAttribution/>
        </div>
    );
}

export default MovieListComponent;