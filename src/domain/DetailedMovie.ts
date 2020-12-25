export interface Genre {
    id: number;
    name: string;
}

export interface DetailedMovie {
    adult: boolean;
    backdrop_path: string;
    budget: number;
    genres: Genre[];
    id: number;
    imdb_id: string;
    overview: string;
    popularity: number;
    poster_path?: any;
    release_date: string;
    revenue: number;
    runtime: number;
    status: string;
    tagline: string;
    title: string;
    vote_average: number;
    vote_count: number;
}