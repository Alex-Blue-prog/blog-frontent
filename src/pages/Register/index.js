import React, { useState } from 'react';
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { api } from '../../api';

export const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();

    try {
      const response = await api.register({username, password});
      console.log(response);
      navigate(`/login`);
      
    } catch(err) {
      alert("Registration failed.");
    }

  }

  return (
    <form className={styles.register} onSubmit={register}>
      <h1>Register</h1>
      <input type="text" placeholder='username' value={username} onChange={e => setUsername(e.target.value)}  />
      <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
      <button>Register</button>
    </form>
  )
}
