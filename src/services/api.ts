import axios from "axios"

const API_BASE_URL =  import.meta.env.VITE_API_PROD || "https://api2.angohost.ao/v1/api"

const api=axios.create({
    baseURL: API_BASE_URL
})
export default api;
