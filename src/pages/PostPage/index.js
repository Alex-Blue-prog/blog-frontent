import React, { useContext, useEffect, useState } from 'react';
import styles from "./styles.module.css";
import {Link, useParams} from "react-router-dom";
import { api } from '../../api';
import {formatISO9075} from "date-fns";
import {Context} from "../../contexts/UserContext";

export const PostPage = () => {
    const params = useParams();
    const {id} = params;
    const {state} = useContext(Context);

    const [postInfo, setPostInfo] = useState(null);

    useEffect(() => {
        const getPost = async () => {
            try {
                const res = await api.getPost(id);
                setPostInfo(res);

            } catch(err) {
                console.log(err);
            }
            
        }

        getPost();
    }, [id]);

    const checkPostAuthor = postInfo?.author._id === state.user.id;

    if(!postInfo) return "";

  return (
    <div className={styles.postPage}>
        <h1>{postInfo.title}</h1>
        <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
        <div className={styles.author}>by @{postInfo.author.username}</div>

        {checkPostAuthor &&
        <div className={styles.editRow}>
            <Link className={styles.editBtn} to={`/create/${postInfo._id}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
                Edit post
            </Link>
        </div>
        }

        <div className={styles.image}>
            <img src={`http://localhost:5000/${postInfo.cover}`} alt="" />
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{__html:postInfo.content}} />
    </div>
  )
}
