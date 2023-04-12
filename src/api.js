import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:5000"
});

export const api = {
    register: async (user) => {
        let res = await http.post(`/register`, user);
        return res.data;
    },
    login: async (user) => {
        let res = await http.post("/login", user, {withCredentials: true});
        return res.data;
    }
}