import React from "react";
import { Navigate } from "react-router-dom";
import { getLocalStorage } from "../utils/localStorage";
type PrivateRouterProps = {
    children: JSX.Element;
};

const PrivateRouter = (props: PrivateRouterProps) => {
    const {
        user: { role },
    } = getLocalStorage();
    if (!role) {
        return <Navigate to="/signin" />;
    }

    return props.children;
};

export default PrivateRouter;
