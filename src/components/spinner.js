import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Spinner = () => {
    return (
        <View style={stylesheet.container}>
            <Text>loading...</Text>
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

export default Spinner;
