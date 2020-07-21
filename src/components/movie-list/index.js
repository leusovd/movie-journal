import React from "react";

import {
    Dimensions,
    StyleSheet,
    FlatList,
    View,
    Text
} from "react-native";
import ListItem from './list-item';

const MovieList = ({ movies }) => {
    const renderListItem = ({ item, index }) => {
        return (
            <ListItem index={index} data={item} />
        );
    };

    return (
        <View style={stylesheet.container}>
            <View style={stylesheet.header}>
                <Text style={stylesheet.title}>Movies</Text>
            </View>
            <FlatList
                data={movies}
                keyExtractor={({ id }) => id.toString()}
                renderItem={renderListItem}
                numColumns={2}
                columnWrapperStyle={stylesheet.row}            
            />
        </View>
    );
};

const stylesheet = StyleSheet.create({
    container: {
        height: '100%'
    },
    header: {
        paddingLeft: 30,
        paddingTop: 48,
        paddingBottom: 30
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        lineHeight: 29,
        textTransform: 'uppercase'
    }
});

export default MovieList;
