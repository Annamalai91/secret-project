import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3257/'
});


export default instance;