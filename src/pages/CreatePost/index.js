import React, { useState, useRef, useEffect } from 'react';
import styles from "./styles.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { api } from '../../api';
import { Editor } from '../../components/partials/Editor';
import { Loading } from '../../components/partials/Loading';


export const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const Imgfiles = useRef();
    const navigate = useNavigate();
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [erroMsg, setErrorMsg] = useState("");
    // const [cover, setCover] = useState("");

    const createNewPost = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg("");

        const data = new FormData();
        data.set("title", title);
        data.set("summary", summary);
        data.set("content", content);
        data.set("file", Imgfiles.current.files[0] || "");
        
        let res;
        try {
            if(!id) {
                res = await api.createPost(data);
      
            } else {
                res = await api.updatePost(data, id);
            }

            if(res.statusText === "OK") {
                // navigate("/post/" + id); 
                navigate("/post/" + res.data._id); 
            } 

        } catch(err) {
            setErrorMsg(err.response.data);
        } finally {
            setLoading(false);
        }
        
    }

    const deletePost = async () => {
        setLoading(true);
        
        try{
            await api.deletePost(id);
            navigate("/");

        } catch(err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    } 
    

    useEffect(() => {
        setTitle("");
        setContent("");
        setSummary("");

        if(id) {
            const getPost = async () => {
                setLoading(true)
                const res = await api.getPost(id);
                setTitle(res.title);
                setContent(res.content);
                setSummary(res.summary);
                setLoading(false);
            }
    
            getPost(); 
        } 
    },[id]);


    return (
        <>
        {loading && <Loading />}
        <div className={styles.erroMsg}>{erroMsg}</div>
        <form onSubmit={createNewPost} className={styles.postForm}>
            <input type="title" disabled={loading} placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
            <input type="summary" disabled={loading} placeholder='Summary' value={summary} onChange={e => setSummary(e.target.value)} />
            <input type="file" disabled={loading} accept='image/*' ref={Imgfiles} multiple={false} />
            <Editor content={content} setContent={setContent} />
            <button className={styles.btn} disabled={loading}>{id ? "Update post" : "Create post"}</button>
        </form>
        {id && <button onClick={deletePost} className={styles.btn} style={{marginTop: "5px", background: "red"}} disabled={loading}>Delete Post</button>}
        </>
    )
}
