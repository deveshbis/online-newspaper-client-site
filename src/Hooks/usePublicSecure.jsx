import axios from "axios";



export const axiosPublicSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const usePublicSecure = () => {

    return axiosPublicSecure;
};

export default usePublicSecure;