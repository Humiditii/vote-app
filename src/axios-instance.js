import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3300/api/v1'
});

export default instance;