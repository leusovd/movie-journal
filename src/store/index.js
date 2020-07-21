import { createStore } from "redux";
import movieListReducer from './reducers/movie-list';
import similarMoviesReducer from './reducers/similar-movies';

const reducer = (state, action) => {
    return {
        movieList: movieListReducer(state, action),
        similarMovies: similarMoviesReducer(state, action)
    };
};

const store = createStore(reducer);

export default store;