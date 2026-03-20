import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

export const registerUser = async (userData) => {
    const response = await API.post('/user/signup', userData)
    return response.data;
};

export const loginUser = async (userData) => {
    const response = await API.post('/user/login', userData)
    return response.data;
};

export const getProfile = async () => {
    const res = await API.get('/user/profile')
    return res.data;
}

export const logoutUser = async () => {
    const res = await API.post('/user/logout')
    return res.data;
}