import axios from "axios";



export const $api = axios.create ({
    baseURL: 'https://api.realworld.io/api',
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
    }
});
