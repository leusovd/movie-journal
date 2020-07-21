const similarMoviesReducer = (state, action) => {
    if (state === undefined) {
        return {
            movies: [],
            loading: true,
            error: null,
        };
    }

    switch (action.type) {
        case "FETCH_SIMILAR_REQUEST":
            return {
                movies: [],
                loading: true,
                error: null,
            };

        case "FETCH_SIMILAR_SUCCESS":
            return {
                movies: action.payload,
                loading: false,
                error: null,
            };

        case "FETCH_SIMILAR_FAILURE":
            return {
                movies: [],
                loading: false,
                error: action.payload,
            };

        default:
            return state.similarMovies;
    }
};

export default similarMoviesReducer;
