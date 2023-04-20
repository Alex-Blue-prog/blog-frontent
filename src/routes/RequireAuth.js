import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from "js-cookie";

const isLogged = () => {
    const token = Cookies.get("token");
    return token ? true : false;
}

export const RequireAuth = ({children, ...rest}) => {

    const logged = isLogged();

    if(logged) {
        return children;
    } else {
        <Navigate to={"/login"} />
    }
}
