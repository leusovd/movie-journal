import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ErrorIndicator = () => {
    return (
        <View style={stylesheet.container}>
            <Text>Error!</Text>
        </View>
    );
};

const stylesheet = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    }
});

export default ErrorIndicator;
