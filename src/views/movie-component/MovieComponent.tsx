import React from 'react'
import MoviePoster from "./movie-poster/MoviePoster";
import MoviePosterCaption from "./movie-poster-caption/MoviePosterCaption";
import style from './MovieComponent.module.css'
import {Movie} from "../../domain/Movie";
import {NavigationPath} from "../../util/NavigationUtil";
import {NavLink} from "react-router-dom";


const MovieComponent = (movie: Movie) => {
    return (
        <NavLink to={`${NavigationPath.MOVIE_DETAILS}/${movie.id}`} className={style.Component}>
            <MoviePoster poster_path={movie.poster_path}/>
            <MoviePosterCaption title={movie.title ?? movie.name} vote_average={movie.vote_average}/>
        </NavLink>
    );
}

export default MovieComponent;