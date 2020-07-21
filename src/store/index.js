import { createStore } from "redux";
import movieListReducer from './reducers/movie-list';

const reducer = (state, action) => {
    return {
        movieList: movieListReducer(state, action)
    };
};

const store = createStore(reducer);

export default store;