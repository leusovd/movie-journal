import React from "react";
import Constants from "expo-constants";
import colors from "../constants/colors";

import { StyleSheet, View } from "react-native";

const Screen = ({ style, children }) => {
    return <View style={{...stylesheet.screen, ...style}}>{children}</View>;
};

const stylesheet = StyleSheet.create({
    screen: {
        height: "100%",
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.white,
    },
});

export default Screen;
