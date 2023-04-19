import React, { useEffect, useState } from 'react';
import styles from "./styles.module.css";
import { PostItem } from "../../components/partials/PostItem";
import { api } from '../../api';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [postsTotal, setPostsTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);

      try {
        const postsArray = await api.getPosts(limit);

        setPostsTotal(postsArray.postDocTotal);
        setPosts(postsArray.postsDoc);

      } catch(err) {
        console.log(err);
        alert("could not load the posts. try again later.");
      }

      setLoading(false);
    }

    getPosts();
  },[limit]);

  return (
    <div style={{marginTop: "-20px"}}>

      {posts.length > 0 && 
        posts.map((value) => (
          <PostItem key={value._id} data={value} />
        ))
      }

      {loading && 
        <div className={styles.loading}>Loading...</div>
      }

      {postsTotal > posts.length &&
        <div className={styles.showmore} onClick={() => setLimit(limit + 10)}>
          Show more
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
      </div>
      }
      
    </div>
  )
}