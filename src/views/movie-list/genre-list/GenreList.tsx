import {Genre, GENRE_LIST} from "../../../domain/DetailedMovie";
import style from "../MovieList.module.css";
import GenreChip from "../../genre-chip-component/GenreChip";
import React from "react";

interface Props {
    genres: Array<Genre>,
    setGenres: (genres: Array<Genre>) => void
}

const GenreList = (props: Props) => {
    const genres = props.genres
    const setGenres = props.setGenres

    return (
        <div className={style.GenreList}>
            {GENRE_LIST.map(genre => (
                <GenreChip key={genre.id} genre={genre} isSelected={genres.includes(genre)}
                           onClick={(genre, isSelected) => {
                               const newGenres = genres.slice()
                               if (!isSelected) {
                                   if(newGenres.indexOf(genre) === -1)
                                       newGenres.push(genre);
                               } else {
                                   const index = newGenres.indexOf(genre)
                                   if (index !== -1)
                                       newGenres.splice(index, 1)
                               }
                               setGenres(newGenres)
                           }}
                />
            ))}
        </div>
    );
}

export default GenreList;