import React from 'react';
import styles from "./styles.module.css";
import {Link} from "react-router-dom";
import {formatISO9075} from "date-fns";

export const PostItem = ({data}) => {
  
  return (
    <div className={styles.post}>
        <div className={styles.image}>
          <Link to={`/post/${data._id}`}>
          <img src={`http://localhost:5000/${data.cover}`} alt="post" />
          </Link>
        </div>

        <div className={styles.texts}>
          <Link to={`/post/${data._id}`}>
          <h2>{data.title}</h2>
          </Link>

          <p className={styles.info}>
            <span className={styles.author}>@{data.author.username}</span>
            <time>{formatISO9075( new Date(data.createdAt) )}</time>
          </p>
          <p className={styles.summary}>{data.summary}</p>
        </div>
    </div>
  )
}
