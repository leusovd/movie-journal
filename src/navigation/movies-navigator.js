import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import { MovieListScreen, MovieDetailsScreen } from "../screens";

const navigatorDefaultOpts = {
    headerShown: false
};

const { Navigator, Screen } = createStackNavigator();

const MoviesNavigator = () => {
    return (
        <Navigator 
            initialRouteName="Movies"
            screenOptions={navigatorDefaultOpts}
        >
            <Screen name="Movies" component={MovieListScreen} />
            <Screen name="MovieDetails" component={MovieDetailsScreen} />
        </Navigator>
    );
};

export default MoviesNavigator;
