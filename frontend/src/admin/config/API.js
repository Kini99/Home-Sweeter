import Axios from 'axios';

export const API = Axios.create({
    baseURL: "http://localhost:8080",
});
