import React, {useContext, useState} from 'react';
import styles from "./styles.module.css";
import { api } from '../../api';
import { useNavigate } from "react-router-dom";
import { Context } from '../../contexts/UserContext';


export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {dispatch} = useContext(Context);

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await api.login({username, password});

      if(response.id !== undefined) {
        dispatch({type: "LOGIN", payload: response});
        navigate("/");
        
      } else {
        alert("wrong credentials");
      }

    } catch(err) {
      alert("Login failed.");
    }

  }

  return (
    
    <form className={styles.login} onSubmit={login}>
      <h1>Login</h1>
      <input type="text" placeholder='username' value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
      <button>Enter</button>
    </form>
  )
}
