import React from "react";

import {
    StyleSheet,
    FlatList,
    View,
    Text
} from "react-native";
import ListItem from './list-item';
import MovieItem from "../movie-item";

const MovieList = ({ movies, onViewDetails }) => {

    const renderListItem = ({ item, index }) => {
        const { title, posterSrc, releaseYear } = item;

        return (
            <ListItem 
                index={index} 
                data={item}
            >
                <MovieItem
                    title={title}
                    posterSrc={posterSrc}
                    releaseYear={releaseYear}
                    onViewDetails={() => onViewDetails(Object.assign({}, item))}
                />
            </ListItem>
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
                showsVerticalScrollIndicator={false}           
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
        paddingBottom: 20
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        lineHeight: 29,
        textTransform: 'uppercase'
    }
});

export default MovieList;
