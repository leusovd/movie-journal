import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import Constants from 'expo-constants';
import { fetchAllMovies } from "../store/actions/movie-list";
import colors from '../constants/colors';

import { StyleSheet, View } from "react-native";

import { withMoviesService } from "../components/hoc";
import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";
import MovieList from "../components/movie-list";

class MovieListScreen extends Component {

    componentDidMount() {
        this.props.fetchMovies();
    }

    renderContent() {
        const { movies, loading, error } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return <MovieList movies={movies} />;
    }

    render() {
        const content = this.renderContent();

        return (
            <View style={stylesheet.screen}>
                <View style={stylesheet.content}>{content}</View>
            </View>
        );
    }
}

const stylesheet = StyleSheet.create({
    screen: {
        height: '100%',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.white      
    }
});

const mapStateToProps = ({ movieList: { movies, loading, error } }) => {
    return { movies, loading, error };
};

const mapDispatchToProps = (dispatch, { moviesService }) => {
    return {
        fetchMovies: fetchAllMovies(dispatch, moviesService),
    };
};

export default compose(
    withMoviesService(),
    connect(mapStateToProps, mapDispatchToProps)
)(MovieListScreen);
