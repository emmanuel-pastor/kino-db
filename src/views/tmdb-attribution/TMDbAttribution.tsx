import React, {CSSProperties} from "react";
import TMDbIcon from "../../img/tmdb.svg";

const TMDbAttribution = () => {
    const mainStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2em"
    } as CSSProperties;

    const imageStyle = {
        maxHeight: "6vh",
        width: "auto",
        marginBottom: "0.4em"
    } as CSSProperties

    return (
        <div style={mainStyle}>
            <img style={imageStyle} src={TMDbIcon} alt={"TMDB logo"}/>
            <span>This product uses the TMDb API but is not endorsed or certified by TMDb.</span>
        </div>
    );
}

export default TMDbAttribution;