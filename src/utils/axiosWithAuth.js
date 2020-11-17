import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "https://african-marketplace-back-end.herokuapp.com/",
        headers: {
            authorization: token
        }
    })
}

export default axiosWithAuth;