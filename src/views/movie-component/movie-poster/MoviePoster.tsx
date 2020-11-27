import React from 'react';
import style from './MoviePoster.module.css'
import logo from '../../../img/logo.svg'

interface Props {
    poster_path: string;
}

const MoviePoster = (props: Props) => {

    if (props.poster_path == null ) {
        return (
            <div className={style.Image + ' ' + style.EmptyImage}>
                <img className={style.EmptyLogo} src={logo} alt={""}/>
            </div>
        );
    } else {
        const POSTER_BASE_URL = "https://image.tmdb.org/t/p";
        const url = POSTER_BASE_URL + "/w185" + props.poster_path;
        return (
            <div>
                <img className={style.Image} src={url} alt={"Movie Poster"}/>
            </div>
        );
    }
}

export default MoviePoster;