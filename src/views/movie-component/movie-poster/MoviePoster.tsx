import React from 'react';
import style from './MoviePoster.module.css'
import logo from '../../../img/logo.svg'
import {ComponentSize} from "../../../util/ComponentSize";

interface Props {
    poster_path: string,
    size?: ComponentSize,
    quality?: PosterQuality
}

export enum PosterQuality {
    LOW = "/w185",
    MEDIUM = "/w500",
    HIGH = "/w780"
}

const MoviePoster = (props: Props) => {

    const size = (props.size === undefined || props.size !== ComponentSize.LARGE) ? ComponentSize.MEDIUM : props.size;

    if (props.poster_path == null) {
        return (
            <div className={style[`poster-${size}`] + ' ' + style[`EmptyImage-${size}`]}>
                <img className={style[`EmptyLogo-${size}`]} src={logo} alt={""}/>
            </div>
        );
    } else {
        const quality = props.quality === undefined ? PosterQuality.LOW : props.quality;
        const POSTER_BASE_URL = "https://image.tmdb.org/t/p";
        const url = POSTER_BASE_URL + quality + props.poster_path;
        return (
            <div>
                <img className={style[`poster-${size}`]} src={url} alt={"Movie Poster"}/>
            </div>
        );
    }
}

export default MoviePoster;