import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import { TeacherContext } from '../context/Teacher';

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();
  const { questions, setQuestions, setDisable, info } = useContext(TeacherContext);
  const [rates, setRates] = useState([])
  const [counter,setCounter] = useState(1)

  useEffect(()=>{
    for(let i=0; i<rates.length; i++){
      if(rates[i] !== 0){
        setCounter(counter+1)
      }
    }
    if(counter === Object.keys(questions).length){
      setDisable(false)
    }
  },[rates])

  const payments = [
    { name: 'Exam Name', detail: info.exam },
    { name: 'Teacher Name', detail: info.name },
    { name: 'University Name', detail: info.univ },
    { name: 'Questions', detail: Object.keys(questions).length },
  ];
  

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review summary
      </Typography>
      <Box>Please rate all questions to download your Easy Exam</Box>
      <List disablePadding>
        {questions.map( (question ,index) => (
          <ListItem className={classes.listItem} key={index}>
            <ListItemText primary={question.description} secondary={question.answer} /> 
              <Typography component="legend">Rating</Typography>
              <Rating
                name={index.toString()}
                value={rates[index]}
                onChange={(event, newValue) => {
                  let copy = [...questions]
                  copy[index].rating = newValue
                  setQuestions(copy)

                  let copyRates = [...rates]
                  copyRates[index] = newValue
                  setRates(copyRates)
                }}
              />
          </ListItem>
        ))}
      </List>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Exam details
          </Typography>
          <Grid container>
            {payments.map(payment => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}