import axios from "axios"

const PROXY_BASE_URL =  import.meta.env.VITE_PROXY_PROD || "http://192.168.1.52:4005"

const proxy = axios.create({
    baseURL: PROXY_BASE_URL
})

export default proxy;
