const API_KEY = process.env.REACT_APP_TMBD_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export enum RequestType {
    POPULAR_MOVIES = "/movie/popular",
    UPCOMING_MOVIES = "/movie/upcoming",
    MOVIE_SEARCH = "/search/movie",
    MULTI_SEARCH = "/search/multi"
}

interface Cacheable {
    timestamp: number;
    content: JSON;
}

export class Fetcher {
    private requestUrl: string;
    private readonly requestType: string;
    private readonly updateState: (it: any) => void;
    private cacheExpirationTime = 1000 * 60 * 60 * 24;

    constructor(requestType: RequestType, updateState: (it: any) => void) {
        this.requestUrl = BASE_URL + requestType + "?api_key=" + API_KEY;
        this.requestType = requestType;
        this.updateState = updateState;
    }

    addParameter(name: string, value: string): Fetcher {
        this.requestUrl += "&" + name + "=" + value;
        return this;
    }

    setCacheExpiration(time: number): Fetcher {
        this.cacheExpirationTime = time;
        return this;
    }

    async fetch() {
        const cachedValue: any = localStorage.getItem(this.requestType) ? JSON.parse(localStorage.getItem(this.requestType) as string) : "";

        if (cachedValue !== "" && !this.isCacheExpired(cachedValue.timestamp)) {
            this.updateState(cachedValue.content);
        } else {
            const response = await fetch(this.requestUrl);
            if (response.ok) {
                const jsonResponse = await response.json();
                const cache: Cacheable = {timestamp: new Date().getTime(), content: jsonResponse}
                localStorage.setItem(this.requestType, JSON.stringify(cache));
                this.updateState(jsonResponse);
            } else {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        }
    }

    private isCacheExpired(timestamp: number): boolean {
        const now = new Date().getTime();
        return (now - timestamp) > this.cacheExpirationTime;
    }
}