import React from "react";
import colors from "../../constants/colors";

import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
} from "react-native";

const ListItem = ({ isLast = false, title, posterSrc, onViewDetails }) => {
    const listItemStyles = isLast
        ? { ...stylesheet.listItem, ...stylesheet.lastItem }
        : { ...stylesheet.listItem };

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onViewDetails}>
            <View style={listItemStyles}>
                <View style={stylesheet.imageContainer}>
                    <ImageBackground
                        style={stylesheet.image}
                        source={{ uri: posterSrc }}
                    />
                </View>
                <Text style={stylesheet.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const listItemGap = 24;
const listItemWidth = Dimensions.get("window").width - listItemGap * 2;

const stylesheet = StyleSheet.create({
    listItem: {
        width: listItemWidth,
        marginLeft: listItemGap,
    },
    lastItem: {
        marginRight: listItemGap,
    },
    imageContainer: {
        height: 166,
        marginBottom: 16,
        borderRadius: 17,
        overflow: "hidden",
    },
    image: {
        height: "100%",
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 16,
        lineHeight: 19,
        color: colors.white_089,
        textTransform: "uppercase",
    },
});

export default ListItem;
