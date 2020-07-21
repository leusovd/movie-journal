import React from "react";
import { StyleSheet, FlatList } from "react-native";
import ListItem from "./list-item";

const SimilarMovies = ({ movies, onViewDetails }) => {
    const renderItem = ({ item, index }) => {
        const { title, posterSrc } = item;
        const isLast = index === movies.length - 1;

        return (
            <ListItem
                title={title}
                posterSrc={posterSrc}
                isLast={isLast}
                onViewDetails={() => onViewDetails(item)}
            />
        );
    };

    return (
        <FlatList
            data={movies}
            keyExtractor={({ id }) => id.toString()}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    );
};

const stylesheet = StyleSheet.create({});

export default SimilarMovies;
