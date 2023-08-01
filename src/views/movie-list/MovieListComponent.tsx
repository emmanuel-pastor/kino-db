import MovieComponent from "../movie-component/MovieComponent";
import React, {useContext, useEffect} from "react";
import EmptyListComponent from "../empty-list-component/EmptyListComponent";
import {NavigationPath} from "../../util/NavigationUtil";
import {useLocation} from "react-router-dom";
import style from './MovieList.module.css'
import {MovieListContext} from "./MovieListContext";
import TMDbAttribution from "../tmdb-attribution/TMDbAttribution";
import {Genre, GENRE_LIST} from "../../domain/DetailedMovie";
import GenreChip from "../genre-chip-component/GenreChip";
import GenreList from "./genre-list/GenreList";

function MovieListComponent() {

    const {
        movies,
        genres,
        setGenres,
        fetchUpcomingMovies,
        fetchPopularMovies,
        fetchMovies,
        fetchPopularMoviesByGenre
    } = useContext(MovieListContext);
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
                if (!(genres?.length > 0)) {
                    fetchPopularMovies();
                } else {
                    fetchPopularMoviesByGenre()
                }
                break;
            default:
                if (pathname.startsWith(NavigationPath.SEARCH))
                    fetchMovies(pathname.split(NavigationPath.SEARCH)[1].substring(1));
                break;
        }
    }, [pathname]);

    useEffect(() => {
        if (genres !== undefined) {
            if (genres.length > 0) {
                fetchPopularMoviesByGenre()
            } else if (pathname === NavigationPath.POPULAR_MOVIES) {
                fetchPopularMovies()
            }
        }
    }, [genres])

    const onSetGenres = (genres: Array<Genre>) => {
        setGenres(genres)
    }

    return (
        <div className={style.Wrapper}>
            {pathname === NavigationPath.POPULAR_MOVIES ? <GenreList genres={genres} setGenres={onSetGenres}/> : null}

            <div className={style.MovieList}>
                {movies?.map(movie => (
                    <MovieComponent key={movie.id} {...movie}/>
                ))}
            </div>

            <EmptyListComponent hidden={movies?.length !== 0}/>
            <TMDbAttribution/>
        </div>
    );
}

export default MovieListComponent;