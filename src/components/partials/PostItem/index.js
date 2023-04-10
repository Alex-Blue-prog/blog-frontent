import React from 'react';
import styles from "./styles.module.css";

export const PostItem = () => {
  return (
    <div className={styles.post}>
        <div className={styles.image}>
          <img src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg" alt="" />
        </div>
        <div className={styles.texts}>
          <h2>Full-house battery backup coming later this year</h2>
          <p className={styles.info}>
            <a className={styles.author} href="">Dawid Paszko</a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className={styles.summary}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima doloribus libero perspiciatis animi dolor quasi.</p>
        </div>
    </div>
  )
}
