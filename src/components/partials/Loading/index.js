import React from 'react';
import styles from "./styles.module.css";

export const Loading = () => {
  return (
    <div className={styles.blackScreen}>
        <div className={styles.container}>
            <p className={styles.text}>Loading...</p> 
        </div>
    </div>
  )
}
