import {Genre} from "../../domain/DetailedMovie";
import {ComponentSize} from "../../util/ComponentSize";
import style from './GenreChip.module.css';
import React, {CSSProperties, useState} from "react";

interface Props {
    genre: Genre,
    size?: ComponentSize
    onClick?: (genre: Genre) => void
}

const GenreChip = (props: Props) => {
    const [isClicked, setClicked] = useState(false);

    const componentSize = props.size === undefined ? ComponentSize.MEDIUM : props.size;
    const handleClick = () => {
        if (props.onClick !== undefined) {
            setClicked(!isClicked)
            props.onClick(props.genre)
        }
    }

    const defaultStyle = props.onClick!==undefined ? {cursor: "pointer"} as CSSProperties : undefined;

    const clickedStyle = {
        cursor: "pointer",
        backgroundColor: "#fe6d8e",
        color: "white",
    } as CSSProperties

    return (
            <div key={props.genre.id} className={style.common + ' ' + style[`size-${componentSize}`]} style={isClicked ? clickedStyle : defaultStyle} onClick={() => handleClick()}>
                {props.genre.name}
            </div>
    );
}

export default GenreChip;