import axiosInstance from "../../axios/axiosInterceptor";


export const getUserAccount = async () => {
    try {
        let response = await axiosInstance.get('user/list-account');
        return response;
    } catch (error) {
        console.log(error.response.data)
        throw error
    }
}