import React from 'react';
import colors from '../constants/colors';
import Spinner from "./spinner";
import ErrorIndicator from "./error-indicator";

const ContentLoader = ({ loading, error, children, mode = 'black' }) => {

    if (loading) {
        const spinnerColor = mode === 'white' ? colors.white : colors.black;
        return <Spinner color={spinnerColor} />;
    }

    if (error) {
        return <ErrorIndicator />;
    }

    return children;

}

export default ContentLoader;