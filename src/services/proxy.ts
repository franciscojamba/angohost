import axios from "axios"

const PROXY_BASE_URL =  import.meta.env.VITE_PROXY_PROD

const proxy = axios.create({
    baseURL: PROXY_BASE_URL
})

export default proxy;
