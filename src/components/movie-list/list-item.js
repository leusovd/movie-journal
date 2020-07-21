import React from "react";
import { Dimensions, StyleSheet, View } from 'react-native';
import MovieItem from "../movie-item";

const ListItem = ({ index, data }) => {
    
    const listItemStylesheet = index === 0 || index === 1
            ? stylesheet.listItemTop
            : stylesheet.listItem;

    return (
        <View style={listItemStylesheet}>
            <MovieItem {...data} />
        </View>
    );
};

const listItemGap = 30;
const listItemWidth = (Dimensions.get("window").width - listItemGap * 3) / 2;
const listItemStyles = {
    width: listItemWidth,
    height: 220,
    paddingBottom: 20,
    marginLeft: listItemGap,
};

const stylesheet = StyleSheet.create({
    listItem: {
        ...listItemStyles
    },
    listItemTop: {
        ...listItemStyles,
        height: 230,
        paddingTop: 10
    }
})

export default ListItem;
