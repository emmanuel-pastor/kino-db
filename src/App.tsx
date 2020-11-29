import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from "./views/nav-bar/NavBar";
import MovieComponent from "./views/movie-component/MovieComponent";
import {RequestType, Fetcher} from "./util/FetchUtil";
import {Movie} from "./Movie";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import EmptyListComponent from "./views/empty-list-component/EmptyListComponent";

const App = () => {

    const fetchUpcomingMovies = () => {
        (new Fetcher(RequestType.UPCOMING_MOVIES, (it) => {
            setMovies(it.results)
        })).fetch().catch(handleError);
    }

    const [movies, setMovies] = useState(Array<Movie>(1));
    const [openSnackbar, setSnackbarOpen] = useState(false);

    useEffect(() => {
        fetchUpcomingMovies()
    });

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
        <div className="App">
            <NavBar/>
            <div className={'MovieList'}>
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

export default App;
