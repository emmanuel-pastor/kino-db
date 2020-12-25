import React from "react";
import star from '../../../../img/star.svg';
import style from "./Rating.module.css";

interface Props {
    vote_average: string,
    vote_count: string
}

const Rating = (props: Props) => {
    return(
        <div className={style.Wrapper}>
            <img src={star} alt={'Star Icon'} />
            <h2>{props.vote_average}/10</h2>
            <span>{props.vote_count}</span>
        </div>
    );
}

export default Rating