import React, {createContext, ReactElement, useState} from "react";
import {Movie} from "../../domain/Movie";
import {Fetcher, RequestType} from "../../util/FetchUtil";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, {AlertProps} from "@material-ui/lab/Alert";


const defaultContext = {
    movies: Array<Movie>(1),
    search: "",
    setSearch: (value: string) => {},
    fetchUpcomingMovies: () => {},
    fetchPopularMovies: () => {},
    fetchMultiSearch: (search: string) => {}
}

export const MovieListContext = createContext(defaultContext);

interface Props {
    children: ReactElement
}

const MovieContextProvider = (props: Props) => {
    const [movies, setMovies] = useState(Array<Movie>(1));
    const [search, setSearch] = useState("");
    const [openSnackbar, setSnackbarOpen] = useState(false);

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

    const fetchMultiSearch = (search: string) => {
        (new Fetcher(RequestType.MULTI_SEARCH, (it) => {
            const filteredList = it.results.filter((element: { media_type: string; }) => element.media_type === 'movie' || element.media_type === 'tv');
            setMovies(filteredList);
        })).addParameter("query", search).setCacheExpiration(0).fetch().catch(handleError);
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
        <MovieListContext.Provider value={{movies, search, setSearch, fetchUpcomingMovies, fetchPopularMovies, fetchMultiSearch}}>
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