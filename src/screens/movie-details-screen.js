import React, { useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { compose } from "redux";
import { connect } from "react-redux";
import { moviesRequested } from "../store/actions/movie-list";
import {
    fetchAllSimilar,
    similarMoviesRequested,
} from "../store/actions/similar-movies";
import colors from "../constants/colors";

import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    ImageBackground,
} from "react-native";

import { withMoviesService } from "../components/hoc";
import Screen from "../components/screen";
import ContentLoader from "../components/content-loader";
import SimilarMovies from "../components/similar-movies";

const MovieDetailsScreen = (props) => {
    const {
        navigation,
        route,
        movies,
        fetchSimilarMovies,
        dropMoviesData,
    } = props;
    const {
        posterSrc,
        rate,
        releaseYear,
        title,
        overview,
    } = route.params.movie;

    let loading = props.loading;

    useFocusEffect(
        useCallback(() => {
            fetchSimilarMovies();
            loading = true;
        }, [])
    );

    useEffect(() => {
        dropMoviesData();
    }, []);

    return (
        <Screen style={{ backgroundColor: colors.primary }}>
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
                    <ContentLoader {...props} mode="white" loading={loading}>
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

const horizontalGap = 24;

const stylesheet = StyleSheet.create({
    poster: {
        position: "relative",
        height: 240,
    },
    posterImage: {
        width: "100%",
        height: "100%",
    },
    rateBadge: {
        position: "absolute",
        bottom: -38,
        right: 30,
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 80,
        backgroundColor: colors.darkGray,
        borderRadius: 40,
    },
    rateText: {
        fontFamily: "open-sans-bold",
        fontSize: 24,
        lineHeight: 29,
        color: colors.white,
    },
    details: {
        paddingTop: 16,
        paddingBottom: 30,
        paddingHorizontal: horizontalGap,
    },
    regularText: {
        fontFamily: "open-sans-light",
        fontSize: 18,
        lineHeight: 22,
        color: colors.white_089,
    },
    title: {
        marginTop: 6,
        fontFamily: "open-sans-bold",
        fontSize: 24,
        lineHeight: 29,
        color: colors.white_089,
        textTransform: "uppercase",
    },
    subtitle: {
        marginBottom: 30,
        fontFamily: "open-sans-bold",
        fontSize: 18,
        lineHeight: 23,
        color: colors.white_089,
        textTransform: "uppercase",
    },
    subtitleOverview: {
        marginTop: 30,
    },
    subtitleSimilar: {
        marginLeft: horizontalGap,
    },
    similar: {
        paddingBottom: 50,
    },
});

const mapStateToProps = ({ similarMovies: { movies, loading, error } }) => {
    return { movies, loading, error };
};

const mapDispatchToProps = (dispatch, { moviesService }) => {
    return {
        fetchSimilarMovies: fetchAllSimilar(dispatch, moviesService),
        dropMoviesData: () => dispatch(moviesRequested()),
        dropSimilarMovies: () => dispatch(similarMoviesRequested()),
    };
};

export default compose(
    withMoviesService(),
    connect(mapStateToProps, mapDispatchToProps)
)(MovieDetailsScreen);
