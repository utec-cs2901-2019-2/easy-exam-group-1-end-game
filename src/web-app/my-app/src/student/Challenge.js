import React, {useContext,useEffect,useState} from 'react';
import {
    Link
  } from "react-router-dom";
import { QuestionsContext} from '../context/Questions';
import { Button } from '@material-ui/core';



export default function Cha(){
    const  { arr, setArr }  = useContext(QuestionsContext);
    const [item,setItem] = useState([])
    const [counter,setCounter] = useState(0)

 
    const handleButton = () =>{
      setCounter(counter+1)
    }

    return(
      <div>
      <div>
       <ul>
        {arr.map((item,index) => {
         return counter === index ? <li>{item.description}</li> : null;
        })} 
      </ul>

       </div>
       <div>
      <Button color="primary" variant="contained" onClick={handleButton}>
          Next
      </Button>
      </div>
      </div>

    )
}