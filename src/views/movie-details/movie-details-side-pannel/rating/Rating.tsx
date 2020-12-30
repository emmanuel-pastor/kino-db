import React from "react";
import style from "./Rating.module.css";
import IMDbLogo from "../../../../img/imdb.svg"
import TMDbLogo from "../../../../img/tmdb.svg"

interface Props {
    tmdb_vote_average: number,
    tmdb_vote_count: string
    imdb_vote_average: string,
    imdb_vote_count: string
}

const Rating = (props: Props) => {
    return (
        <div className={style.RowWrapper}>
            <div className={style.Wrapper}>
                <img src={TMDbLogo} alt={'Star Icon'}/>
                <h2>{props.tmdb_vote_average}/10</h2>
                <span>{props.tmdb_vote_count}</span>
            </div>
            <div className={style.Wrapper}>
                <img src={IMDbLogo} alt={'Star Icon'}/>
                <h2>{props.imdb_vote_average}/10</h2>
                <span>{props.imdb_vote_count}</span>
            </div>
        </div>
    );
}

export default Rating