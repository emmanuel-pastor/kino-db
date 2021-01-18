import React, {createContext, ReactElement, useState} from "react";
import {Movie} from "../../domain/Movie";
import {Fetcher, RequestType} from "../../util/FetchUtil";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, {AlertProps} from "@material-ui/lab/Alert";
import {Genre} from "../../domain/DetailedMovie";


const defaultContext = {
    movies: Array<Movie>(1),
    search: "",
    genres: Array<Genre>(),
    setSearch: (value: string) => {},
    setGenres: (genres: Array<Genre>) => {},
    fetchUpcomingMovies: () => {},
    fetchPopularMovies: () => {},
    fetchMovies: (search: string) => {},
    fetchPopularMoviesByGenre: () => {}
}

export const MovieListContext = createContext(defaultContext);

interface Props {
    children: ReactElement
}

const MovieContextProvider = (props: Props) => {
    const [movies, setMovies] = useState(Array<Movie>(1));
    const [search, setSearch] = useState("");
    const [openSnackbar, setSnackbarOpen] = useState(false);
    const [genres, setGenres] = useState(Array<Genre>());

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

    const fetchMovies = (search: string) => {
        (new Fetcher(RequestType.MOVIE_SEARCH, (it) => {
            setMovies(it.results);
        })).addParameter("query", search).setCacheExpiration(0).fetch().catch(handleError);
    }

    const fetchPopularMoviesByGenre = () => {
        (new Fetcher(RequestType.POPULAR_MOVIES_BY_GENRE, (it) => {
            setMovies(it.results);
        })).addParameter("with_genres", genres?.map(genre => genre.id).join(", ")).setCacheExpiration(0).fetch().catch(handleError);
    }

    const handleError = () => {
        setSnackbarOpen(true);
    };

    function Alert(props: AlertProps) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleCloseSnackbar = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    return (
        <MovieListContext.Provider value={{movies, search, genres, setSearch, setGenres, fetchUpcomingMovies, fetchPopularMovies, fetchMovies, fetchPopularMoviesByGenre}}>
            {props.children}

            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="error">
                    Something went wrong
                </Alert>
            </Snackbar>
        </MovieListContext.Provider>
    );
};

export default MovieContextProvider;