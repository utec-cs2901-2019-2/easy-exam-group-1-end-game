import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
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
  const { questions, setQuestions } = useContext(TeacherContext);

  function setRating(newValue, index) {
    //setValue(newValue);
    let questionsRated = [...questions];
    questionsRated[index].rating = newValue;
    console.log(newValue, "  "+ index);
    setQuestions(questionsRated);
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review summary
      </Typography>
      <List disablePadding>
        {questions.map( (q,index) => (
          <ListItem className={classes.listItem} key={index}>
            <ListItemText primary={q.description} secondary={q.answer} /> 
              <Typography component="legend">Rating</Typography>
              <Rating
                name="rating-id"
                value={q.rating}
                onChange={(event, newValue) => {
                  //console.log(index);
                  //setRating(newValue, index);
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