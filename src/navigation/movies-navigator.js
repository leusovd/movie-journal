import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import { MovieListScreen } from "../screens";

const navigatorDefaultOpts = {
    headerShown: false,
    headerStyle: {
        backgroundColor: '#fff'
    }
};

const { Navigator, Screen } = createStackNavigator();

const MoviesNavigator = () => {
    return (
        <Navigator 
            initialRouteName="Movies"
            screenOptions={navigatorDefaultOpts}
        >
            <Screen name="Movies" component={MovieListScreen} />
        </Navigator>
    );
};

export default MoviesNavigator;
