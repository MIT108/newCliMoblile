import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://172.105.149.21/api/v1",
    headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data"
    }
});


axiosInstance.interceptors.request.use( async (config) => {
    let token = await AsyncStorage.getItem("misceoUserToken")
    
    token = JSON.parse(token)

    config.headers.Authorization = `Bearer ${token}`;

    return config;
}, error => Promise.reject(error));
export default axiosInstance;