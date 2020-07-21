import React from "react";
import colors from '../constants/colors';
import { StyleSheet, View, Text } from "react-native";

const Spinner = ({ color = colors.black }) => {
    return (
        <View style={stylesheet.container}>
            <Text style={{ ...stylesheet.indicatorText, color }}>loading...</Text>
        </View>
    );
};

const stylesheet = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    indicatorText: {
        color: colors.black
    }
});

export default Spinner;
