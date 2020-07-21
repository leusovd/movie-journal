import React from "react";
import colors from "../constants/colors";
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
} from "react-native";

const MovieItem = ({ title, posterSrc, releaseYear, onViewDetails }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onViewDetails}>
            <View style={stylesheet.container}>
                <ImageBackground
                    style={stylesheet.backgroundImage}
                    source={{ uri: posterSrc }}
                >
                    <View style={stylesheet.details}>
                        <Text style={stylesheet.title}>{title}</Text>
                        <Text style={stylesheet.releaseYear}>
                            {releaseYear}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
};

const stylesheet = StyleSheet.create({
    container: {
        position: "relative",
        height: "100%",
        backgroundColor: colors.white,
        borderRadius: 15,
        elevation: 10,
        overflow: "hidden",
    },
    backgroundImage: {
        height: "100%",
    },
    details: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 70,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: colors.white_089,
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 16,
        lineHeight: 19,
    },
    releaseYear: {
        fontFamily: "open-sans-light",
        fontSize: 14,
        lineHeight: 17,
    },
});

export default MovieItem;
