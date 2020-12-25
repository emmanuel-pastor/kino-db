import {Cast} from "../../../domain/MovieCredits";
import ActorComponent from "./actor-component/ActorComponent";
import React from "react";
import style from "./MovieDetailsActorsSection.module.css"

interface Props {
    actors: Cast[]
}

const MovieDetailsActorsSection = (props: Props) => {
    return(
        <div className={style.WrapperRow}>
            {props.actors?.map((actor) => (
                <ActorComponent name={actor.name} character={actor.character} profile_path={actor.profile_path} />
            ))}
        </div>
    )
}

export default MovieDetailsActorsSection;