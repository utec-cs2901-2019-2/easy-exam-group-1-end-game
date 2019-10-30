import axios from 'axios';


const BASE = 'http://localhost:5000/api/auth/signin';

export const Login = (credentials) => {
    console.log(credentials)
    return axios.post(BASE, {
        usernameOrEmail: credentials.usernameOrEmail,
        password: credentials.password
    })
}
