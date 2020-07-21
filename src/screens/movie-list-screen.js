import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { fetchAllMovies } from "../store/actions/movie-list";

import { withMoviesService } from "../components/hoc";
import Screen from "../components/screen";
import ContentLoader from "../components/content-loader";
import MovieList from "../components/movie-list";

const MovieListScreen = (props) => {

    let { navigation, movies, loading, error } = props;

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            props.fetchMovies();
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <Screen>
            <ContentLoader loading={loading} error={error} data={movies}>
                <MovieList
                    movies={movies}
                    onViewDetails={(movie) => 
                            navigation.navigate("MovieDetails", { movie })
                        }
                />
            </ContentLoader>
        </Screen>
    );
}

const mapStateToProps = ({ movieList: { movies, loading, error } }) => {
    return { movies, loading, error };
};

const mapDispatchToProps = (dispatch, { moviesService }) => {
    return {
        fetchMovies: fetchAllMovies(dispatch, moviesService)
    };
};

export default compose(
    withMoviesService(),
    connect(mapStateToProps, mapDispatchToProps)
)(MovieListScreen);
