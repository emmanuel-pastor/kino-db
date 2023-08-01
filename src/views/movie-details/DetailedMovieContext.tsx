import React, {createContext, ReactElement, useState} from "react";
import {DetailedMovie} from "../../domain/DetailedMovie";
import {Fetcher, RequestType} from "../../util/FetchUtil";
import {MovieCredits} from "../../domain/MovieCredits";
import {Video} from "../../domain/Video";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, {AlertProps} from "@material-ui/lab/Alert";
import {IMDbRating} from "../../domain/IMDbRating";

const defaultContext = {
    detailedMovie: {} as DetailedMovie,
    rating: {id: "", averageRating: "0", numVotes: 0} as IMDbRating,
    movieCredits: {} as MovieCredits,
    trailer: {} as Video | null,
    fetchMovieDetails: (movieId: number) => {
    },
    fetchMovieCredits: (movieId: number) => {
    },
    fetchMovieVideos: (movieId: number) => {
    }
}

export const DetailedMovieContext = createContext(defaultContext);

interface Props {
    children: ReactElement
}

export const DetailedMovieContextProvider = (props: Props) => {
    const [detailedMovie, setDetailedMovie] = useState({} as DetailedMovie);
    const [rating, setRating] = useState({} as IMDbRating)
    const [credits, setCredits] = useState({} as MovieCredits);
    const [trailer, setTrailer] = useState(null as Video | null);
    const [openSnackbar, setSnackbarOpen] = useState(false);

    const fetchMovieDetails = (movieId: number) => {
        (new Fetcher(`${RequestType.MOVIE_DETAILS}/${movieId}`, (it) => {
            setDetailedMovie(it);
        })).fetch().catch(handleError);
    }

    const fetchMovieCredits = (movieId: number) => {
        (new Fetcher(`${RequestType.MOVIE_DETAILS}/${movieId}${RequestType.MOVIE_CREDITS}`, (it) => {
            setCredits(it)
        })).fetch().catch(handleError);
    }

    const fetchMovieVideos = (movieId: number) => {
        (new Fetcher(`${RequestType.MOVIE_DETAILS}/${movieId}${RequestType.MOVIE_VIDEOS}`, (it) => {
            extractTrailer(it.results);
        })).fetch().catch(handleError);
    }

    const extractTrailer = (videos: Video[]) => {
        if (videos !== undefined && videos.length > 0) {
            const trailers = videos.filter(value => value.type?.toLowerCase() === 'trailer');
            if (trailers.length !== 0) {
                setTrailer(trailers[0]);
            } else {
                setTrailer(null);
            }
        } else {
            setTrailer(null);
        }
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
        <DetailedMovieContext.Provider value={{
            detailedMovie,
            rating,
            movieCredits: credits,
            trailer: trailer,
            fetchMovieDetails,
            fetchMovieCredits,
            fetchMovieVideos
        }}>
            <>
                {props.children}

                <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity="error">
                        Something went wrong
                    </Alert>
                </Snackbar>
            </>
        </DetailedMovieContext.Provider>
    );
}