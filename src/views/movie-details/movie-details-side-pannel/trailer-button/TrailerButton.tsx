import Play from "../../../../img/play.svg";
import style from "./TrailerButton.module.css";
import {useContext, useState} from "react";
import {DetailedMovieContext} from "../../DetailedMovieContext";

const TrailerButton = () => {
    const {trailer} = useContext(DetailedMovieContext);
    const [link, setLink] = useState("#");

    const handleClick = () => {
        console.log(trailer);
        switch (trailer?.site?.toLowerCase()) {
            case 'youtube':
                setLink(`https://www.youtube.com/watch?v=${trailer?.key}`);
                break;
            case 'vimeo':
                setLink(`https://vimeo.com/${trailer?.key}`);
                break;
        }
    }

    if (trailer == null) {
        return (
            <></>
        );
    } else {
        return (
            <>
                <a href={link} className={style.WrappingLink} target="_blank" rel="noreferrer">
                    <button className={style.PlayButton} onClick={handleClick}>
                        <img src={Play} alt={'Play Button Icon'}/>
                        <span>Play Trailer</span>
                    </button>
                </a>
            </>
        );
    }

}

export default TrailerButton;