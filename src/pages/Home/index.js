import React, { useEffect, useState } from 'react';
import { PostItem } from "../../components/partials/PostItem";
import { api } from '../../api';

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsArray = await api.getPosts();
        setPosts(postsArray);

      } catch(err) {
        console.log(err);
        alert("could not load the posts. try again later.");
      }
    }

    getPosts();
  },[]);

  return (
    <div style={{marginTop: "-20px"}}>
      {posts.length > 0 && 
        posts.map((value) => (
          <PostItem key={value._id} data={value} />
        ))
      }
    </div>
  )
}