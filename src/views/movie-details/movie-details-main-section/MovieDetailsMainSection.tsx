import MoviePoster, {PosterQuality} from "../../movie-component/movie-poster/MoviePoster";
import React from "react";
import {Genre} from "../../../domain/DetailedMovie";
import style from "./MovieDetailsMainSection.module.css";
import {ComponentSize} from "../../../util/ComponentSize";
import GenreChip from "../../genre-chip-component/GenreChip";

interface Props {
    title: string,
    release_year: string,
    runtime: number,
    genres: Array<Genre>,
    overview: string,
    poster_path: string
}

const MovieDetailsMainSection = (props: Props) => {

    const runtimeHours = Math.floor(props.runtime / 60)
    const runtimeInHourMinutes = (runtimeHours).toString() + 'h ' + (props.runtime - runtimeHours * 60).toString() + 'min'
    return (
        <div className={style.Wrapper}>
            <MoviePoster poster_path={props.poster_path} size={ComponentSize.LARGE} quality={PosterQuality.MEDIUM}/>
            <div className={style.RightSection}>
                <div className={style.Header}>
                    <h1>{props.title}</h1>
                    <div className={style.YearAndRuntime}>
                        <span>{props.release_year}</span><span>{runtimeInHourMinutes}</span>
                    </div>
                    <div className={style.GenreList}>
                        {props.genres?.map((genre) => (
                            GenreChip({genre: genre, size: ComponentSize.MEDIUM})
                        ))}
                    </div>
                </div>

                <div className={style.PlotSummary}>
                    <h2>Plot Summary</h2>
                    <p>{props.overview}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailsMainSection;