import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from "js-cookie";


export const RequireAuth = ({children, ...rest}) => {
    
    const isLogged = () => {
        const token = Cookies.get("token");
        return token ? true : false;
    }
    
    const logged = isLogged();
    console.log(logged);

    if(logged) {
        return children;
    } else {
        <Navigate to={"/login"} />
    }
}
