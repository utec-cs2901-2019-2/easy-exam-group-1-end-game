import React, {useContext,useState} from 'react';
import { QuestionsContext} from '../context/Questions';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import validateToken from '../service/Validator';

const useStyles = makeStyles({
  root: {
    margin: 50,
    padding: 0,
  },
  next: {
    margin : 10,
  }
})

export default function Cha(){
  const classes = useStyles();
    const  { arr }  = useContext(QuestionsContext);
    const [counter,setCounter] = useState(0);
    const [rate,setRate] = useState(0);

    const setRating = () =>{
      if(validateToken()){
        if (validateToken()) {
          axios.post("http://localhost:8080/question/rate", [{id:"5dc9945bc637d16c28843893",rating:5}], {
            headers: {
              "Authorization" : "Bearer "+localStorage.getItem("token")
            }
          }).then(r=>{
        console.log(r);
      })
      }
    
    } }

 
    const handleButton = () =>{
      setCounter(counter+1)
      setRating()
    }

    return(
      (arr.length === counter) ? <div>
        <Typography className={classes.root} variant="h3" align="center" color="textPrimary" component="p">
        No hay preguntas
        </Typography>
</div> :
      <div>
      <div>
       <ul>
        {arr.map((item,index) => {
         return (counter === index) ?  (
           <div>
           
           <Typography className={classes.root} variant="h3" align="center" color="textPrimary" component="p">
         Pregunta {counter+1}: {item.description}
         </Typography>
         
         <Typography className={classes.root} variant="h3" align="center" color="textPrimary" component="p">
         Respuesta : {item.answer}
         </Typography>

         <div>
         <center>
       <Rating className={classes.root}
                name="rating-id"
                //value={q.rating}
                //onChange={(event, newValue) => {
                  //console.log(index);
                  //setRating(newValue, index);
                //}}
              />
          </center>
       </div>


         </div>
         ) : null;
        })} 
      </ul>

       </div>
       <div>
         <center>
      <Button className={classes.next} color="primary" variant="contained" onClick={handleButton}>
          Next
      </Button>
      </center>
      </div>
      </div>

    )
}