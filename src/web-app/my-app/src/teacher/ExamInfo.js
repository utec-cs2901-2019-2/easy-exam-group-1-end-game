import React,{useContext, useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { TeacherContext } from '../context/Teacher';
import { Button, Fab, Box } from '@material-ui/core';
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
  const { tags, setTags,
          count, setCount,
          info, setInfo,
          setDisable
        } = useContext(TeacherContext);
  const [ tag, setTag ] = useState("");

  const addTag = () => {
    setTags(tags.concat(tag));
    setTag("");
  };

  useEffect(() => {
    if(info.name !== "" && info.last !== "" && 
    info.univ!== "" && info.exam !== "" &&
    tags.length !== 0 && count > 0) {
        setDisable(false);
    } else {
      setDisable(true);
    }
  }, [info, tag, count, tags])
  
  return (
    <React.Fragment>
      
      <Typography variant="h6" gutterBottom>
        Complete the form
      </Typography>
      <div>
        Please fill white fields to pass the next step. You can add tags according to the topic you want for your exam.
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            value={info.name}
            autoComplete="fname"
            onInput={e => {
              let copy = {...info}
              copy.name = e.target.value
              setInfo(copy)
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            value={info.last}
            autoComplete="lname"
            onInput={e => {
              let copy = {...info}
              copy.last = e.target.value
              setInfo(copy)
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="examname"
            name="examname"
            label="Exam name"
            value={info.exam}
            fullWidth
            autoComplete="billing address-line1"
            onInput={e => {
              let copy = {...info}
              copy.exam = e.target.value
              setInfo(copy)
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="universityname"
            name="universityname"
            label="University Name"
            fullWidth
            value={info.univ}
            autoComplete="billing address-line2"
            onInput={e => {
              let copy = {...info}
              copy.univ = e.target.value
              setInfo(copy)
            }}
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
            onChange={e => setCount(e.target.value)}
            type="number"
            className={classes.textField}
            margin="normal"
            variant="outlined"
        />
        </Grid>
      </Grid>
      <Box className={classes.noLabel} >
      *If you need to delete a tag just click on the tag button.
      </Box>
      <Grid item xs={12}>
        {
          tags.map( (tag,index) => (
            <Button variant="contained" className={classes.item} key={index} 
              name = {index}
              onClick={ () => {
                let copy = [...tags]
                copy.splice(index,1);
                setTags(copy);
              }}
            >{tag}</Button> //click -> delete tag
          ))
        }
      </Grid>
    </React.Fragment>
  );
}