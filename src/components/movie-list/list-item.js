import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

const ListItem = ({ index, children }) => {
    const listItemStylesheet = index === 0 || index === 1 ?
        stylesheet.listItemTop : stylesheet.listItem;

    return (
        <View style={listItemStylesheet}>
            {children}
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
        ...listItemStyles,
    },
    listItemTop: {
        ...listItemStyles,
        height: 230,
        paddingTop: 10,
    },
});

export default ListItem;
