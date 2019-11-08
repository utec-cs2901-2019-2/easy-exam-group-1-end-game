import axios from 'axios';


const BASE = 'http://10.100.243.27:8080/question/exam/1';

export const ListOfTags = () => {
    return axios.post(BASE, {
        "tags" : ["mate"]
    })
}