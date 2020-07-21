import axios from "axios";
import { MovieModel } from "../models";

export default class MoviesService {
    constructor() {
        this.allMoviesBaseUrl = "https://api.themoviedb.org/3/discover/movie";
        this.oneMovieBaseUrl = "https://api.themoviedb.org/3/movie";
        this.posterBaseUrl = "https://image.tmdb.org/t/p/original";

        this.defaultParams = {
            api_key: "e8ae59d95e445da13e5a518624ac0972",
            language: "en-US",
            sort_by: "popularity.desc",
            include_adult: "false",
            include_video: "false",
            page: "1",
        };
    }

    getAll() {
        const paramKeys = Object.keys(this.defaultParams);
        const url = paramKeys.reduce((prev, cur, index) => {
            let result = prev + `${cur}=${this.defaultParams[cur]}`;
            if (index !== paramKeys.length - 1) {
                result += "&";
            }
            return result;
        }, `${this.allMoviesBaseUrl}?`);

        return axios
            .get(url)
            .then(({ data }) => {
                return data.results.map((dataItem) =>
                    this.transformMovie(dataItem)
                );
            })
            .catch((err) => console.error(err));
    }

    getById(movieId) {
        const { api_key, language } = this.defaultParams;
        const url = `${this.oneMovieBaseUrl}/${movieId}?api_key=${api_key}&language=${language}`;
        return axios
            .get(url)
            .then(({ data }) => this.transformMovie(data));
    }

    getAllSimilar(movieId) {
        const { api_key, language, page } = this.defaultParams;
        const url = `${this.oneMovieBaseUrl}/${movieId}/similar?api_key=${api_key}&language=${language}&page=${page}`;
        return axios
            .get(url)
            .then(({ data }) => {
                return data.results.map((dataItem) =>
                    this.transformMovie(dataItem)
                );
            });
    }

    transformMovie(data) {
        const {
            id,
            title,
            backdrop_path,
            poster_path,
            release_date,
            overview,
            vote_average,
        } = data;

        const releaseYear = release_date.slice(0, 4);
        const posterSrc = backdrop_path
            ? `${this.posterBaseUrl}${backdrop_path}`
            : poster_path
            ? `${this.posterBaseUrl}${poster_path}`
            : null;

        return new MovieModel(
            id,
            title,
            posterSrc,
            releaseYear,
            overview,
            vote_average
        );
    }
}
