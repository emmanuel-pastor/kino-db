import {Genre} from "../../domain/DetailedMovie";
import {ComponentSize} from "../../util/ComponentSize";
import style from './GenreChip.module.css';
import React, {CSSProperties} from "react";

interface Props {
    genre: Genre,
    size?: ComponentSize,
    isSelected?: boolean,
    onClick?: (genre: Genre, isSelected: boolean) => void
}

const GenreChip = (props: Props) => {
    const isSelected = props.isSelected ?? false

    const componentSize = props.size === undefined ? ComponentSize.MEDIUM : props.size;
    const handleClick = () => {
        if (props.onClick !== undefined) {
            props.onClick(props.genre, isSelected)
        }
    }

    const defaultStyle = props.onClick !== undefined ? {cursor: "pointer"} as CSSProperties : undefined;

    const selectedStyle = {
        cursor: "pointer",
        backgroundColor: "#fe6d8e",
        color: "white",
    } as CSSProperties

    return (
        <div key={props.genre.id} className={style.common + ' ' + style[`size-${componentSize}`]}
             style={isSelected ? selectedStyle : defaultStyle} onClick={handleClick}>
            {props.genre.name}
        </div>
    );
}

export default GenreChip;