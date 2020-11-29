import React from 'react'
import MoviePoster from "./movie-poster/MoviePoster";
import MoviePosterCaption from "./movie-poster-caption/MoviePosterCaption";
import style from './MovieComponent.module.css'
import {Movie} from "../../Movie";


const MovieComponent = (movie: Movie) => {
    return (
        <div className={style.Component}>
            <MoviePoster poster_path={movie.poster_path}/>
            <MoviePosterCaption title={movie.title ?? movie.name} vote_average={movie.vote_average}/>
        </div>
    );
}

export default MovieComponent;