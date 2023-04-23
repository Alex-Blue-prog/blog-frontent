import React, {useContext, useState} from 'react';
import styles from "./styles.module.css";
import { api } from '../../api';
import { useNavigate } from "react-router-dom";
import { Context } from '../../contexts/UserContext';


export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const {dispatch} = useContext(Context);

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await api.login({username, password});

      if(response.id !== undefined) {
        const {token} = response;
        console.log(token);
        dispatch({type: "LOGIN", payload: response});
        localStorage.setItem("token", token);
        navigate("/");
        
      } 

    } catch(err) {
      setErrorMsg(err.response.data);
    }

  }

  return (
    
    <form className={styles.login} onSubmit={login}>
      <h1>Login</h1>
      <div className={styles.erroMsg}>{errorMsg}</div>
      <input type="text" placeholder='username' value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
      <button>Enter</button>
    </form>
  )
}
