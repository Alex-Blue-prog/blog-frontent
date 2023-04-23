import axios from "axios";

const http = axios.create({
    baseURL: process.env.REACT_APP_API //"http://localhost:5000"
});

export const api = {
    register: async (user) => {
        let res = await http.post(`/register`, user);
        return res.data;
    },
    login: async (user) => {
        // let res = await http.post("/login", user, {withCredentials: true});
        let res = await http.post("/login", user);
        return res.data;
    },
    profile: async () => {
        // let res = await http.get("/profile", {withCredentials: true});
        let res = await http.get("/profile", {headers: { "Authorization" : `token ${localStorage.getItem("token")}` }});
        return res.data;
    },
    logout: async () => {
        // let res = await http.post("/logout", {}, {withCredentials: true});
        // return res.data;
        localStorage.removeItem("token");
    },
    createPost: async (postObj) => {
        let res = await http.post("/post", postObj, {headers: {"Authorization": `token ${localStorage.getItem("token")} `}});
        return res;
    },
    getPosts: async (limit) => {
        let res = await http.get(`/post?limit=${limit}`);
        return res.data;
    },
    getPost: async (postId) => {
        let res = await http.get(`/post/${postId}`);
        return res.data;
    },
    updatePost: async (postObj, postId) => {
        let res = await http.put(`/post/${postId}`, postObj, {headers: {"Authorization": `token ${localStorage.getItem("token")} `}});
        return res;
    },
    deletePost: async (postId) => {
        let res = await http.delete(`/post/${postId}`, {headers: {"Authorization": `token ${localStorage.getItem("token")} `}});
        return res.data;
    }
}