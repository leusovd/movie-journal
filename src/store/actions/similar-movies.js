const similarMoviesRequested = () => {
    return { type: "FETCH_SIMILAR_REQUEST" };
};

const similarMoviesLoaded = (movies) => {
    return {
        type: "FETCH_SIMILAR_SUCCESS",
        payload: movies
    };
};

const similarMoviesFetchError = (error) => {
    return {
        type: "FETCH_SIMILAR_FAILURE",
        payload: error
    };
};

const fetchAllSimilar = (dispatch, moviesService) => () => {
    dispatch(similarMoviesRequested());
    moviesService.getAllSimilar()
        .then((data) => dispatch(similarMoviesLoaded(data)))
        .catch((err) => dispatch(similarMoviesFetchError(err)));
}

export { fetchAllSimilar, similarMoviesRequested };