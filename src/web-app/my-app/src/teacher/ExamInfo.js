import React,{useContext, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { TeacherContext } from '../context/Teacher';
import { Button, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  add : {
    marginTop: theme.spacing(2)
  },
  item: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginRight: theme.spacing(2)
  }
}));

export default function ExamInfo() {
  const classes = useStyles();
  const { tags, setTags, count, setNumberQuestions } = useContext(TeacherContext);
  const [ tag, setTag ] = useState("");

  const addTag = () => {
    setTags(tags.concat(tag));
  };

  

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Complete the form
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="examname"
            name="examname"
            label="Exam name"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="universityname"
            name="universityname"
            label="University Name"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
        <TextField
          id = "tag"
          label = "Write a tag"
          value = {tag}
          className = {classes.textField}
          margin = "normal"
          variant = "outlined"
          onChange = { e => setTag(e.target.value)}
        />
        </Grid>
        <Grid item xs={12} sm={2}>
        <Fab className={classes.add} color="primary"onClick={addTag}>
          <AddIcon />
        </Fab> 
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            id="outlined-number"
            label="Number of Questions"
            value={count}
            onChange={e => setNumberQuestions(e.target.value)}
            type="number"
            className={classes.textField}
            margin="normal"
            variant="outlined"
        />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {React.Children.map( tags, i => (
            <Fab variant="extended" className={classes.item}>{i}</Fab>
        ))}
      </Grid>
    </React.Fragment>
  );
}