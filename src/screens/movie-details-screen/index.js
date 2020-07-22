import React, { useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { compose } from "redux";
import { connect } from "react-redux";
import { moviesRequested } from "../../store/actions/movie-list";
import {
    fetchAllSimilar,
    similarMoviesRequested,
} from "../../store/actions/similar-movies";
import colors from "../../constants/colors";

import {
    StatusBar,
    ScrollView,
    Text,
    View,
    ImageBackground,
} from "react-native";

import stylesheet from './styles';

import { withMoviesService } from "../../components/hoc";
import Screen from "../../components/screen";
import ContentLoader from "../../components/content-loader";
import SimilarMovies from "../../components/similar-movies";

const MovieDetailsScreen = (props) => {
    const {
        navigation,
        route,
        movies,
        fetchSimilarMovies,
        dropMoviesData,
    } = props;
    const {
        id: movieId,
        posterSrc,
        rate,
        releaseYear,
        title,
        overview,
    } = route.params.movie;

    useFocusEffect(
        useCallback(() => {
            fetchSimilarMovies(movieId);
        }, [])
    );

    useEffect(() => {
        dropMoviesData();
    }, []);

    return (
        <Screen style={{ ...stylesheet.screen }}>
            <StatusBar barStyle = "light-content" backgroundColor={colors.primary} translucent={true}/>
            <ScrollView>
                <View style={stylesheet.poster}>
                    <ImageBackground
                        style={stylesheet.posterImage}
                        source={{ uri: posterSrc }}
                    />
                    <View style={stylesheet.rateBadge}>
                        <Text style={stylesheet.rateText}>{rate * 10}%</Text>
                    </View>
                </View>

                <View style={stylesheet.details}>
                    <Text style={stylesheet.regularText}>{releaseYear}</Text>
                    <Text style={stylesheet.title}>{title}</Text>
                    <Text
                        style={{
                            ...stylesheet.subtitle,
                            ...stylesheet.subtitleOverview,
                        }}
                    >
                        Overview:
                    </Text>
                    <Text style={stylesheet.regularText}>{overview}</Text>
                </View>

                <View style={stylesheet.similar}>
                    <Text
                        style={{
                            ...stylesheet.subtitle,
                            ...stylesheet.subtitleSimilar,
                        }}
                    >
                        Similar movies:
                    </Text>
                    <ContentLoader {...props} theme="white">
                        <SimilarMovies
                            movies={movies}
                            onViewDetails={(movie) =>
                                navigation.push("MovieDetails", { movie })
                            }
                        />
                    </ContentLoader>
                </View>
            </ScrollView>
        </Screen>
    );
};

const mapStateToProps = ({ similarMovies: { movies, loading, error } }) => {
    return { movies, loading, error };
};

const mapDispatchToProps = (dispatch, { moviesService, route}) => {
    return {
        fetchSimilarMovies: fetchAllSimilar(dispatch, moviesService, route.params.movie.id),
        dropMoviesData: () => dispatch(moviesRequested()),
        dropSimilarMovies: () => dispatch(similarMoviesRequested()),
    };
};

export default compose(
    withMoviesService(),
    connect(mapStateToProps, mapDispatchToProps)
)(MovieDetailsScreen);
