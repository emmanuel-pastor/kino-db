
const API_KEY = process.env.REACT_APP_TMBD_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export enum RequestType {
    POPULAR_MOVIES = "/movie/popular",
    UPCOMING_MOVIES = "/movie/upcoming",
    MOVIE_SEARCH = "/search/movie",
    MULTI_SEARCH = "/search/multi"
}

export class Fetcher {
    private requestUrl: string;
    private readonly updateState: (it: any) => void;

    constructor(requestType: RequestType, updateState: (it: any) => void) {
        this.requestUrl = BASE_URL + requestType + "?api_key=" + API_KEY;
        this.updateState = updateState;
    }

    addParameter(name: string, value: string): Fetcher {
        this.requestUrl += "&" + name + "=" + value;
        return this;
    }

    async fetch() {
        const response = await fetch(this.requestUrl);
        if (response.ok) {
            const jsonResponse = await response.json();
            this.updateState(jsonResponse);
        } else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    }
}