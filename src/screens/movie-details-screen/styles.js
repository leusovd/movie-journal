import { StyleSheet } from 'react-native';
import colors from "../../constants/colors";

const horizontalGap = 24;

export default StyleSheet.create({
    screen: {
        backgroundColor: colors.primary
    },
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