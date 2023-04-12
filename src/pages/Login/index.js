import React, {useState} from 'react';
import styles from "./styles.module.css";
import { api } from '../../api';


export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await api.login({username, password});
      console.log(response);
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
