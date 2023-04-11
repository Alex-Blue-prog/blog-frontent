import React from 'react';
import styles from "./styles.module.css";

export const Login = () => {
  return (
    <form className={styles.login} action="">
      <h1>Login</h1>
      <input type="text" placeholder='username' />
      <input type="password" placeholder='password' />
      <button>Enter</button>
    </form>
  )
}
