const moviesRequested = () => {
    return { type: "FETCH_MOVIES_REQUEST" };
};

const moviesLoaded = (movies) => {
    return {
        type: "FETCH_MOVIES_SUCCESS",
        payload: movies
    };
};

const moviesFetchError = (error) => {
    return {
        type: "FETCH_MOVIES_FAILURE",
        payload: error
    };
};

const fetchAllMovies = (dispatch, moviesService) => () => {
    dispatch(moviesRequested());
    moviesService.getAll()
        .then((data) => dispatch(moviesLoaded(data)))
        .catch((err) => dispatch(moviesFetchError(err)));
};

export { fetchAllMovies, moviesRequested };