import React from 'react';
import style from './MoviePosterCaption.module.css'
import star from '../../../img/star.svg';

interface Props {
    title?: string
    vote_average: number
}

const MoviePosterCaption = (props: Props) => {
    return (
        <div className={style.Caption}>
            <h2 className={style.MovieTitle}>{props.title ?? "unknown title"}</h2>
            <div className={style.RatingRow}>
                <img className={style.RatingIcon} src={star} alt={''}/>
                <span>{props.vote_average ?? "NaN"}</span>
            </div>
        </div>
    );
}

export default MoviePosterCaption;