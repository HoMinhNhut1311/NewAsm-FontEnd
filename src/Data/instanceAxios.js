import axios from 'axios';

// Tạo một instance của Axios
const instance = axios.create({
    baseURL: 'http://localhost:1311/mnw/',
});


// Method Get
export const get = async (url, options={}) => {
    const response = await instance.get(url, options);
    return response;
}

// Method Post
export const post = async (url, data) => {
    const response = await instance.post(url, data).catch(error => {
        console.log(error);
        // Lỗi Server
        if (error.request.status === 0) {
            return {
                status : 0,
            }
        }  

        return {
            status : error.response.status,
            data : error.response.data
        }
    });
    return response;
}

export default instance;
