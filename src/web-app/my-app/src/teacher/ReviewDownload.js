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


const payments = [
  { name: 'Exam Name', detail: 'PC1' },
  { name: 'Teacher Name', detail: 'Mr Jeremy' },
  { name: 'University Name', detail: 'UTEC' },
  { name: 'Questions', detail: '20' },
];

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
  const { questions, setQuestions, setDisable } = useContext(TeacherContext);
  const [rates, setRates] = useState([])
  const [flag, setFlag] = useState(0)  

  useEffect(()=>{
    //if (rates.length === questions.length) {
      for (let index = 0; index < rates.length; index++) {
        if ( rates[index] === true) {
          setFlag(flag+1);
          console.log(flag)
        }
      }
      if(flag === 3) {
        setDisable(false)
      }
    //}
  },[rates])
  

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
                value={question.rating}
                onChange={(event, newValue) => {
                  let copy = [...questions]
                  copy[index].rating = newValue
                  setQuestions(copy)

                  let copyRates = [...rates]
                  copyRates[index] = true
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