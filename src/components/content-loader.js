import React from 'react';
import Spinner from "./spinner";
import ErrorIndicator from "./error-indicator";

const ContentLoader = ({ loading, error, data, children }) => {

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <ErrorIndicator />;
    }

    if (data) {
        return children;
    }

    return null;

}

export default ContentLoader;