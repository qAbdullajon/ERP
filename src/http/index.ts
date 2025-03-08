import axios from "axios";
// import { getAccessToken } from "@utils/token-service";

const VITE_BASE_URL = "http://localhost:8000/"
const axiosInstatce = axios.create({
  baseURL: VITE_BASE_URL
})

// axiosInstatce.interceptors.request.use((config) => {
//   const access_token = getAccessToken()
//   if(access_token) {
//     config.headers['Authorization'] = `Bearer ${access_token}`
//   }
//   return config
// })
export default axiosInstatce