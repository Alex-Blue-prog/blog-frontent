import React from 'react';
import { Navigate } from 'react-router-dom';


export const RequireAuth = ({children, ...rest}) => {

  const token = localStorage.getItem("token");

  return (
    <>
        {token ? 
            children
        :
            <Navigate to={"/login"} />
        }
    </>
  )
   
}
