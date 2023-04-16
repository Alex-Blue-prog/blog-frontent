import React, { useState, useRef, useEffect } from 'react';
import styles from "./styles.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { api } from '../../api';
import { Editor } from '../../components/partials/Editor';


export const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const Imgfiles = useRef();
    const navigate = useNavigate();
    const {id} = useParams();
    // const [cover, setCover] = useState("");

    const createNewPost = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.set("title", title);
        data.set("summary", summary);
        data.set("content", content);
        data.set("file", Imgfiles.current.files[0] || "");
        
        let res;
        if(!id) {
            res = await api.createPost(data);
        } else {
            res = await api.updatePost(data, id);
        }
        
        if(res.statusText === "OK") {
            // navigate("/post/" + id); 
            navigate("/post/" + res.data._id); 
            // navigate("/");
        }
    }

    useEffect(() => {
        if(id) {
            const getPost = async () => {
                const res = await api.getPost(id);
                setTitle(res.title);
                setContent(res.content);
                setSummary(res.summary);
            }
    
            getPost(); 
        }
    },[id]);


    return (
        <form onSubmit={createNewPost} className={styles.postForm}>
            <input type="title" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
            <input type="summary" placeholder='Summary' value={summary} onChange={e => setSummary(e.target.value)} />
            <input type="file" accept='image/*' ref={Imgfiles} multiple={false} />
            <Editor content={content} setContent={setContent} />
            <button>{id ? "Update post" : "Create post"}</button>
        </form>
    )
}
