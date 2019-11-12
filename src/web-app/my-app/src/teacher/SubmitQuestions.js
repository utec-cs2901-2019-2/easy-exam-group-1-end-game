import React, { useContext, useState } from 'react';
import { Button, 
         Fab,
         TextField,
         Typography,
         Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';
import { TeacherContext } from '../context/Teacher';
import { AuthContext } from '../context/Auth';

const useStyles = makeStyles(theme => ({
  send : {
    marginTop: theme.spacing(2)
  }
  ,item: {
    marginRight: theme.spacing(2)
  }
}));

export default function SubmitQuestion() {

  const classes = useStyles();

  const [tag, setTag] = useState("");
  const [postedTags, setPostedTags] = useState([])
  const { userContext } = useContext(AuthContext)
  const [question, setQuestion] = useState({
    description: '',
    answer: '',
    author: '',
    tags: []
  })

  const addTag = () => {
    setPostedTags(postedTags.concat(tag));
  };

  //sendQuestion

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Write your question
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField required id="questionid" 
          label="Question"
          value={question.description}
          onInput={e => setQuestion({
            description: e.target.value,
            answer: question.answer,
            author: userContext.name+" "+userContext.lastn,
            tags: question.tags
          })}
          fullWidth />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField required id="answerid" 
          label="Answer"
          value={question.answer}
          onInput={e => setQuestion({
            description: question.description,
            answer: e.target.value,
            author: userContext.name+" "+userContext.lastn,
            tags: question.tags
          })}
          fullWidth />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField 
            id = "tag"
            label = "Write a tag"
            value = {tag}
            variant = "outlined"
            onChange = { e => setTag(e.target.value)} fullWidth/>
        </Grid>
        <Grid item xs={12} md={5}>
        <Fab color="primary"onClick={addTag}>
          <AddIcon />
        </Fab> 
        </Grid>
        <Grid item xs={12} md={3}>
          <Button 
            className={classes.send}
            color="primary"
            variant="contained" 
            startIcon={<SendIcon/>}
          >Send</Button>
        </Grid>
        <Grid item xs={12}>
        {React.Children.map( postedTags, i => (
            <Fab variant="extended" className={classes.item}>{i}</Fab>
        ))}
      </Grid>
      </Grid>
    </React.Fragment>
  );
}