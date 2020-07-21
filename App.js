import React, { useState } from "react";
import { AppLoading } from "expo";
import { loadAsync } from "expo-font";
import store from "./src/store";

import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import ErrorBoundary from "./src/components/error-boundary";
import { MoviesServiceProvider } from "./src/components/movies-service-context";
import MoviesNavigator from "./src/navigation/movies-navigator";

import MoviesDummyService from "./src/services/movies-dummy-service";

const moviesService = new MoviesDummyService();

const fetchFonts = () => {
    return loadAsync({
        "open-sans-light": require("./assets/fonts/OpenSans-Light.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
    });
};

const App = () => {

    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => {
                    setFontLoaded(true);
                }}
            />
        );
    }

    return (
        <Provider store={store}>
            <ErrorBoundary>
                <MoviesServiceProvider value={moviesService}>
                    <NavigationContainer>
                        <MoviesNavigator />
                    </NavigationContainer>
                </MoviesServiceProvider>
            </ErrorBoundary>
        </Provider>
    );
};

export default App;
