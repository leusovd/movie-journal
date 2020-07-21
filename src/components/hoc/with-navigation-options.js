import React from "react";

const withNavigationOptions = (options) => (Wrapped) => {
    return (props) => {
        props.navigation.setOptions(options);
        return <Wrapped {...props} />;
    };
};

export default withNavigationOptions;
