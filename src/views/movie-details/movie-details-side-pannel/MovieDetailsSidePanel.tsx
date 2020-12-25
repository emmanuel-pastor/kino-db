import React from "react";
import style from "./MovieDetailsSidePanel.module.css";
import SidePanelInfoBlock from "./side-panel-info-block/SidePanelInfoBlock";
import Rating from "./rating/Rating";
import TrailerButton from "./trailer-button/TrailerButton";

interface Props {
    vote_average: number,
    vote_count: number,
    director: string,
    release_date: string,
    budget: number,
    revenue: number
}

const formatPrice = (price: number) => {
    return '$' + Intl.NumberFormat('en-US', {maximumSignificantDigits: 3}).format(price)
}

const formatDate = (stringDate: string) => {
    const date = new Date(stringDate);
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    return date.toLocaleDateString("en-IN", options);
}

const formatVoteCount = (count: number) => {
    return Intl.NumberFormat('en-US', {maximumSignificantDigits: 3}).format(count);
}

const MovieDetailsSidePanel = (props: Props) => {
    const director = {name: "Director", value: props.director};
    const releaseDate = {name: "Release Date", value: formatDate(props.release_date)};
    const budget = {name: "Budget", value: formatPrice(props.budget)};
    const revenue = {name: "Revenue", value: formatPrice(props.revenue)};
    const infoList = [director, releaseDate, budget, revenue];

    const ratingObject = {vote_average: props.vote_average?.toString(), vote_count: formatVoteCount(props.vote_count)}

    return (
        <div className={style.SidePanel}>
            <Rating {...ratingObject}/>
            {infoList.map((info, index) => (
                <SidePanelInfoBlock key={index} {...info}/>
            ))}
            <TrailerButton />
        </div>
    );
}

export default MovieDetailsSidePanel;