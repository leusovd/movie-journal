import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ErrorIndicator = () => {
    return (
        <View style={stylesheet.container}>
            <Text style={stylesheet.indicatorText}>Error!</Text>
        </View>
    );
};

const stylesheet = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    indicatorText: {}
});

export default ErrorIndicator;
