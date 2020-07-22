import React from 'react';
import colors from '../constants/colors';
import Spinner from "./spinner";
import ErrorIndicator from "./error-indicator";

const ContentLoader = ({ loading, error, children, theme = 'black' }) => {

    const indicatorColor = theme === 'white' ? colors.white : colors.black;

    if (loading) {
        return <Spinner color={indicatorColor} />;
    }

    if (error) {
        return <ErrorIndicator color={indicatorColor} />;
    }

    return children;

}

export default ContentLoader;