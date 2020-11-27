import React from 'react'
import MoviePoster from "./movie-poster/MoviePoster";
import MoviePosterCaption from "./movie-poster-caption/MoviePosterCaption";
import {Movie} from "../../App";
import style from './MovieComponent.module.css'

const MovieComponent = (movie: Movie) => {

    return (
        <div key={movie.id} className={style.Component}>
            <MoviePoster poster_path={movie.poster_path} />
            <MoviePosterCaption title={movie.title} vote_average={movie.vote_average} />
        </div>
    );
}

export default MovieComponent;