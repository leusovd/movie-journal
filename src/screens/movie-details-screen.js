import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { moviesRequested } from '../store/actions/movie-list';
import { fetchAllSimilar } from "../store/actions/similar-movies";
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

const MovieDetailsScreen = (props) => {
    const { route, fetchSimilarMovies, dropMoviesData } = props;
    const { posterSrc, rate, releaseYear, title, overview } = route.params.movie;

    useEffect(() => {
        fetchSimilarMovies();
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
                    <Text style={stylesheet.subtitle}>Overview:</Text>
                    <Text style={stylesheet.regularText}>{overview}</Text>
                    <Text style={stylesheet.subtitle}>Similar movies:</Text>
                </View>
            </ScrollView>
        </Screen>
    );
};

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
        paddingBottom: 50,
        paddingHorizontal: 24,
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
        marginVertical: 30,
        fontFamily: "open-sans-bold",
        fontSize: 18,
        lineHeight: 23,
        color: colors.white_089,
        textTransform: "uppercase",
    },
});

const mapStateToProps = ({ similarMovies: { movies } }) => {
    return { movies };
};

const mapDispatchToProps = (dispatch, { moviesService }) => {
    return {
        fetchSimilarMovies: fetchAllSimilar(dispatch, moviesService),
        dropMoviesData: () => dispatch(moviesRequested())
    };
};

export default compose(
    withMoviesService(),
    connect(mapStateToProps, mapDispatchToProps)
)(MovieDetailsScreen);
