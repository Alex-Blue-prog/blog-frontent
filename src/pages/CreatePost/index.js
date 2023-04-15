import React, { useState, useRef } from 'react';
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { api } from '../../api';

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
    ],
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]


export const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const Imgfiles = useRef();
    const navigate = useNavigate();

    const createNewPost = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.set("title", title);
        data.set("summary", summary);
        data.set("content", content);
        data.set("file", Imgfiles.current.files[0]);
        
        const res = await api.createPost(data);
        
        if(res.statusText === "OK") {
            navigate("/");
            // navigate("/post/" + res.data._id);
        }
    }

    return (
        <form onSubmit={createNewPost} className={styles.postForm}>
            <input type="title" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
            <input type="summary" placeholder='Summary' value={summary} onChange={e => setSummary(e.target.value)} />
            <input type="file" accept='image/*' ref={Imgfiles} multiple={false} />
            <ReactQuill value={content} onChange={newValue => setContent(newValue)} modules={modules} formats={formats}/>
            <button>Create post</button>
        </form>
    )
}
