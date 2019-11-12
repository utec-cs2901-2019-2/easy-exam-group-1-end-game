import React, {useContext,useState} from 'react';
import { QuestionsContext} from '../context/Questions';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

export default function Cha(){
    const  { arr }  = useContext(QuestionsContext);
    const [counter,setCounter] = useState(0);

 
    const handleButton = () =>{
      setCounter(counter+1)
    }

    return(
      <div>
      <div>
       <ul>
        {arr.map((item,index) => {
         return (counter === index) ?  (<div><Typography variant="h5" align="center" color="textPrimary" component="p">
         {item.description}
         </Typography>
         <Typography variant="h5" align="center" color="textPrimary" component="p">
         {item.answer}
         </Typography>
         </div>
         ) : null;
        })} 
      </ul>

       </div>
       <div>
         <center>
      <Button color="primary" variant="contained" onClick={handleButton}>
          Next
      </Button>
      </center>
      </div>
      </div>

    )
}