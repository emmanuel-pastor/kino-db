const API_KEY = process.env.REACT_APP_TMBD_API_KEY;
const DEFAULT_BASE_URL = "https://api.themoviedb.org/3";

export enum RequestType {
    POPULAR_MOVIES = "/movie/popular",
    UPCOMING_MOVIES = "/movie/upcoming",
    MOVIE_SEARCH = "/search/movie",
    MULTI_SEARCH = "/search/multi",
    MOVIE_DETAILS = "/movie",
    MOVIE_CREDITS = "/credits",
    MOVIE_VIDEOS = "/videos",
    IMDB_RATING = "/rating"
}

interface Cacheable {
    timestamp: number;
    content: JSON;
}

export class Fetcher {
    private requestUrl: string;
    private readonly requestType: string;
    private readonly updateState: (it: any) => void;
    private cacheExpirationTime = 1000 * 60 * 60 * 12;

    constructor(requestType: RequestType | string, updateState: (it: any) => void, private baseUrl: string = DEFAULT_BASE_URL, private requiresApiKey: boolean = true) {
        const apiKeyParameter = requiresApiKey ? "?api_key=" + API_KEY : "";
        this.requestUrl = baseUrl + requestType + apiKeyParameter;
        this.requestType = requestType;
        this.updateState = updateState;
    }

    addParameter(name: string, value: string): Fetcher {
        const separator = this.requestUrl.includes("?") ? "&" : "?";
        this.requestUrl += separator + name + "=" + value;
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
            console.log(this.requestUrl)
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