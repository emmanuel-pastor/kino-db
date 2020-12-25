import React from "react";
import style from "./ActorComponent.module.css";
import ActorPhoto from "./actor-photo/ActorPhoto";

interface Props {
    name: string,
    character: string,
    profile_path: string
}

const ActorComponent = (props: Props) => {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
    const profileUrl = props.profile_path == null ? null : IMAGE_BASE_URL + '/w185' + props.profile_path;
    return (
        <div className={style.ActorWrapper}>
            <ActorPhoto image_url={profileUrl} />
            <p className={style.TextCommon + ' ' + style.Name}>{props.name}</p>
            <p className={style.TextCommon + ' ' + style.Character}>{props.character}</p>
        </div>
    );
}

export default ActorComponent;