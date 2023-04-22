import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
// import Cookies from "js-cookie";
import { Context } from '../contexts/UserContext';


export const RequireAuth = ({children, ...rest}) => {
    // const isLogged = () => {
    //     const token = Cookies.get("token");
    //     return token ? true : false;
    // }
    // const logged = isLogged();

  const {state} = useContext(Context);


    if(state.user.id) {
        return children;
    } else {
        <Navigate to={"/login"} />
    }
}
