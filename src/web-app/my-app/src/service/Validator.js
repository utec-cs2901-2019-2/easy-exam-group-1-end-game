import jwt from 'jsonwebtoken';

export default function validateToken() {
    var token = localStorage.getItem("token");
    var decoded = jwt.decode(token);
    var currentTime = new Date().getTime().valueOf()/1000;
    if (decoded.exp  < currentTime){
        return false;
    } else return true;
}