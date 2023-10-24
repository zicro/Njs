import axios from "axios";

const axio = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers:{
        "X-Requested-With": "XMLHttpRequest"
    },
    withCredentials:false
});

export default axio;