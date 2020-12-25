import React from "react";
import style from "./SidePanelInfoBlock.module.css";

interface Props {
    name: string,
    value: string
}

const SidePanelInfoBlock = (props: Props) => {
    return (
        <div className={style.Block}>
            <h2>{props.name}</h2>
            <p>{props.value}</p>
        </div>
    );
}

export default SidePanelInfoBlock;