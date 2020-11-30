import MovieComponent from "../movie-component/MovieComponent";
import React, {useEffect, useState} from "react";
import {Movie} from "../../Movie";
import {Fetcher, RequestType} from "../../util/FetchUtil";
import MuiAlert, {AlertProps} from "@material-ui/lab/Alert";
import EmptyListComponent from "../empty-list-component/EmptyListComponent";
import Snackbar from "@material-ui/core/Snackbar";
import {NavigationPath} from "../../util/NavigationUtil";
import {useLocation} from "react-router";
import style from './MovieList.module.css'

function MovieListComponent() {

    const fetchPopularMovies = () => {
        (new Fetcher(RequestType.POPULAR_MOVIES, (it) => {
            setMovies(it.results)
        })).fetch().catch(handleError);
    }

    const fetchUpcomingMovies = () => {
        (new Fetcher(RequestType.UPCOMING_MOVIES, (it) => {
            setMovies(it.results)
        })).fetch().catch(handleError);
    }

    const [movies, setMovies] = useState(Array<Movie>(1));
    const [openSnackbar, setSnackbarOpen] = useState(false);
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
        }
    }, [pathname]);

    function Alert(props: AlertProps) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleError = () => {
        setSnackbarOpen(true);
    };

    const handleCloseSnackbar = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    return (
        <div style={style}>
            <div className={style.MovieList}>
                {movies.map(movie => (
                    <MovieComponent key={movie.id} {...movie}/>
                ))}
            </div>

            <EmptyListComponent hidden={movies.length !== 0}/>

            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="error">
                    Something went wrong
                </Alert>
            </Snackbar>
        </div>
    );
}

export default MovieListComponent;