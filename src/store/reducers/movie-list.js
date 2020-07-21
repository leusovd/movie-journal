const movieListReducer = (state, action) => {
    if (state === undefined) {
        return {
            movies: [],
            loading: true,
            error: null,
        };
    }

    switch (action.type) {
        case "FETCH_MOVIES_REQUEST":
            console.log(state.movieList.movies.length);
            return {
                movies: [],
                loading: true,
                error: null,
            };

        case "FETCH_MOVIES_SUCCESS":
            console.log(state.movieList.movies.length);
            return {
                movies: action.payload,
                loading: false,
                error: null,
            };

        case "FETCH_MOVIES_FAILURE":
            console.log(state.movieList.movies.length);
            return {
                movies: [],
                loading: false,
                error: action.payload,
            };

        default:
            return state.movieList;
    }
};

export default movieListReducer;
