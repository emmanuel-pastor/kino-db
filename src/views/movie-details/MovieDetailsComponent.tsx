import React, {CSSProperties, useContext, useEffect} from "react";
import {useHistory} from "react-router";
import {DetailedMovieContext} from "./DetailedMovieContext";
import style from './MovieDetailsComponent.module.css';
import MovieDetailsMainSection from "./movie-details-main-section/MovieDetailsMainSection";
import MovieDetailsSidePanel from "./movie-details-side-pannel/MovieDetailsSidePanel";
import {Crew} from "../../domain/MovieCredits";
import MovieDetailsActorsSection from "./movie-details-actors-section/MovieDetailsActorsSection";
import useWindowDimensions from "../../util/WindowDimensionUtil";

const MovieDetailsComponent = () => {
    const movieUrl = useHistory();
    const movieId = parseInt(movieUrl.location.pathname.split('/').slice(-1)[0]);
    const {height, width} = useWindowDimensions();

    const {detailedMovie, rating, movieCredits, fetchMovieDetails, fetchMovieCredits, fetchMovieVideos} = useContext(DetailedMovieContext);

    useEffect(() => {
        fetchMovieDetails(movieId);
        fetchMovieCredits(movieId);
        fetchMovieVideos(movieId);
    }, []);

    const POSTER_BASE_URL = "https://image.tmdb.org/t/p";
    let imageUrl = detailedMovie.poster_path === undefined ? '' : `${POSTER_BASE_URL}/w1280${detailedMovie.backdrop_path}`;

    const notDesktop = width <= 800 || (width/height < 16/9) || (width/height >= 16/9 && height <= 700)// || height <= 480
    const mainDivStyle = {
        display: 'flex',
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        width: '100%',
        height: notDesktop? '' : '100%',
        maxHeight: notDesktop ? '' : 'calc(100% - 76px)'
    } as CSSProperties

    const extractDirectorsName = (crew: Crew[]): string => {
        if (crew !== undefined && crew.length > 0) {
            const directors = crew.filter(value => value.job?.toLowerCase() === 'director');

            let out = '';
            if (directors.length !== 0) {
                for (let director of directors) {
                    out += `${director.name} & `
                }
            }
            return out.substring(0,out.length-3);
        } else {
            return '';
        }
    }

    const mainSectionObject = {
        title: detailedMovie.title,
        release_year: detailedMovie.release_date?.split('-')[0],
        runtime: detailedMovie.runtime,
        genres: detailedMovie.genres,
        overview: detailedMovie.overview,
        poster_path: detailedMovie.poster_path
    }

    const sidePanelObject = {
        tmdb_vote_average: detailedMovie.vote_average,
        tmdb_vote_count: detailedMovie.vote_count,
        imdb_vote_average: rating.averageRating,
        imdb_vote_count: rating.numVotes,
        director: extractDirectorsName(movieCredits.crew),
        release_date: detailedMovie.release_date,
        budget: detailedMovie.budget,
        revenue: detailedMovie.revenue
    }

    return (
        <div style={mainDivStyle}>
            <div className={style.InnerDiv}>
                <div className={style.MainSection}>
                    <MovieDetailsMainSection {...mainSectionObject} />
                    <MovieDetailsActorsSection actors={movieCredits.cast} />
                </div>
                <MovieDetailsSidePanel {...sidePanelObject}/>
            </div>
        </div>
    );
}

export default MovieDetailsComponent;