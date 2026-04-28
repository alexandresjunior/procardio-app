import axios from "axios";

const API_URL = 'http://192.168.15.31:3000';

const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
});

export default api;