import React, { useContext, useEffect } from 'react';
import {Link, useNavigate} from "react-router-dom";
import { api } from '../../../api';
import { Context } from '../../../contexts/UserContext';

export const Header = () => {
  const {state, dispatch} = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const profile = async () => {
      const res = await api.profile();
      if(res === "You are not authenticated" || res === "Token is not valid") return;
      dispatch( { type: "LOGIN", payload: res } );
    }

    profile();
  },[dispatch]);

  const logout = async () => {
    await api.logout();
    dispatch( { type: "LOGOUT", payload: {} } );
    navigate("/");
  }

  return (
    <header>
        <Link to={"/"} className="logo">MyBlog</Link>
        <nav>
          {state.user.username && (
            <>
            <Link to={"/create"}>Create new post</Link>
            <span onClick={logout}>Logout</span>
            </>
          )}
          {!state.user.username && (
            <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </>
          )}
        
        </nav>
    </header>
  )
}
