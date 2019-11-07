import axios from 'axios';


const BASE = 'http://localhost:8080/auth/login/';

export const Login = (credentials) => {
    console.log(credentials)
    return axios.post(BASE, {
        username: credentials.username,
        password: credentials.password
    })
}
