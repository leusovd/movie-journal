import React from "react";

const withCallback = (cb) => (Wrapped) => {
    return (props) => {
        cb(props);
        return <Wrapped {...props} />;
    };
};

export default withCallback;