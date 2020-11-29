export interface Movie {
    id: number;
    vote_average: number;
    popularity: number;
    vote_count: number;
    release_date: string;
    title?: string;
    name?: string;
    backdrop_path: string;
    overview: string;
    poster_path: string;
    genre_ids: number[];
}