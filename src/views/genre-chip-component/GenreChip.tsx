import {Genre} from "../../domain/DetailedMovie";
import {ComponentSize} from "../../util/ComponentSize";
import style from './GenreChip.module.css';
import React from "react";

interface Props {
    genre: Genre,
    size?: ComponentSize
}

const GenreComponent = (props: Props) => {
    const componentSize = props.size === undefined ? ComponentSize.MEDIUM : props.size;
    return(
        <div key={props.genre.id} className={style.common + ' ' + style[`size-${componentSize}`]}>
            {props.genre.name}
        </div>
    );
}

export default GenreComponent;