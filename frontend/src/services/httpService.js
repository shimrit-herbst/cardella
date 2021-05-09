import Axios from 'axios';
// import { useHistory } from "react-router-dom";

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:3030/'
    // ? '/api/'
    // : '//localhost:3030/api/'

var axios = Axios.create({
    withCredentials: true
});

export default {
    get(endpoint, data) {
        return Ajax(endpoint, 'GET', data)
    },
    post(endpoint, data) {
        return Ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        return Ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        return Ajax(endpoint, 'DELETE', data)
    }
}

async function Ajax(endpoint, method = 'get', data = null) {
    // let history = useHistory();
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data
        })
        return res.data;
    }
    catch (err) {
        // if (err.response.status === 401) {
        // history.push('/');
        // }
        console.log(`Had issues ${method}ing to server`, err)
        throw err;
    }
}
