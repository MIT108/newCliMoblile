import axiosInstance from "../../axios/axiosInterceptor";
import {setVariable} from '../../AsyncStorageMethods'

export const loginAction = async (postData) => {
    try {
        var data = postData
        let response = await axiosInstance.post('auth/login', data);
        
        const userInfo = response.data.data
        setVariable(userInfo, "misceoUserInformation")
        const userToken = response.data.token
        setVariable(userToken, "misceoUserToken")
            return response;
    } catch (error) {
        
        if (error.response.status == 423 || error.response.status == 424) {
            const userInfo = error.response.data.data
            setVariable(userInfo, "misceoUserInformation")
        } 
        console.log(error.response.data)

        throw error
    }
}

export const sendOtpAction = async (postData) => {
    try {
        var id = postData
        let response = await axiosInstance.get('auth/send-otp/'+id);
        return response;
    } catch (error) {
        console.log(error.response.data)
        throw error
    }
}


export const verifyOtpAction = async (postData) => {
    try {
        var data = postData
        let response = await axiosInstance.post('auth/send-otp/'+data.id, data);
        return response;
    } catch (error) {
        if (error.response.status == 423 || error.response.status == 424) {
            const userInfo = error.response.data.data
            setVariable(userInfo, "misceoUserInformation")
        } 
        console.log(error.response.data)

        throw error
    }
}

export const changeStartupPasswordAction = async (postData) => {
    try {
        var data = postData
        let response = await axiosInstance.post('auth/change-startup-password/'+data.id, data);
        const userInfo = response.data.data
        setVariable(userInfo, "misceoUserInformation")
        const userToken = response.data.token
        setVariable(userToken, "misceoUserToken")
        return response;
    } catch (error) {
        console.log(error.response.data)
        throw error
    }
}


export const logoutAction = async () => {
    try {
        let response = await axiosInstance.get('auth/logout');
        setVariable(null, "misceoUserInformation")
        setVariable(null, "misceoUserToken")
        return response;
    } catch (error) {
        console.log(error)
        console.log(error.response.data)

        throw error
    }
}