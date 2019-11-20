import React, { useContext, useState, useEffect } from 'react';
import { Button, 
         Fab,
         TextField,
         Typography,
         Grid,
         Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';
import { TeacherContext } from '../context/Teacher';
import validateToken from '../service/Validator';
import { AuthContext } from '../context/Auth';
import axios from 'axios';

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
  const { setAuth,userContext } = useContext(AuthContext)
  const { count, setDisable } = useContext(TeacherContext)
  const [left, setLeft] = useState( (count/4 + 1)|0 );
  const [question, setQuestion] = useState({})
  const [send , setSend] = useState(true);

  const addTag = () => {
    setPostedTags(postedTags.concat(tag));
    setTag("");
  };

  useEffect(() => {
    if(Object.keys(question).length === 3 && postedTags.length > 0) {
        setSend(false);
    } 
  }, [question])

  useEffect(() => {
    let copy = {...question}
    copy.tags = postedTags;
    setQuestion(copy);
  }, [postedTags])

  useEffect(() => {
    if(left === 0) {
      setDisable(false);
      setSend(true);
    }
  },[left]);

  //sendQuestion
  const postQuestion = () => {
    setQuestion({ ...question,
      description: question.description,
      answer: question.answer,
      author: userContext.name+" "+userContext.lastn
    })
    if (validateToken()) {
      axios.post("http://localhost:8080/question/post",
        question, {
        headers: {
          "Authorization" : "Bearer "+localStorage.getItem("token")
        }
      })
      .then(
        r => {
          setLeft(left-1);
          setPostedTags([]);
          setQuestion({});
        }
      );
    } else {
      alert("Tu sesión ha expirado");
      setAuth(false);
    }
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Write your question
      </Typography>
      <Box>
        You need submit {left} questions to pass the next step
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField required id="questionid" 
          label="Question"
          value={question.description || ''}
          onInput={e => {
            let copy = {...question}
            copy.description = e.target.value
            setQuestion(copy)
          }}
          fullWidth />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField required id="answerid" 
          label="Answer"
          value={question.answer || ''}
          onInput={e => {
            let copy = {...question}
            copy.answer = e.target.value
            setQuestion(copy)
          }}
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
            onClick={postQuestion}
            disabled={send}
          >Send</Button>
        </Grid>
        <Grid item xs={12}>
        {postedTags.map( (postedTag , i) => (
            <Fab variant="extended" key={i} className={classes.item} onClick={() => {
                let copy = [...postedTags]
                copy.splice(i, 1);
                setPostedTags(copy);
              }
            }>{postedTag}</Fab>
        ))}
      </Grid>
      </Grid>
    </React.Fragment>
  );
}