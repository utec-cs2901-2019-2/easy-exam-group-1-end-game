
import axios from "axios";
import { array } from "../../../../../../../Library/Caches/typescript/3.6/node_modules/@types/prop-types";


let config = {
headers : {
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
}

const PATH = "http://localhost:8080/question/exam/"

// export const ListOfQuestions = async (num,array) => {
//     let r;
//     try{
//         r = axios.post( `${PATH}${num}`, {"tags":array}, config)
//         return r
//     }catch(err){
//         console.log(err)
//     }
// }

export const ListOfQuestions = (num, array) =>{
    axios.post("http://localhost:8080/question/exam/" + num, {"tags":array} , config).then(r =>{
        return r
    })
}