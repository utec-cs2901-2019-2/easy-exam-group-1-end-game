import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 1000,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Here',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
        <Grid container spacing={3}>
    <Grid item xs={12}>
    <TextField
        id="question"
        label="Write your question"
        multiline
        rowsMax="4"
        className={classes.textField}
        margin="normal"
      />
      </Grid>
      <Grid item xs={12}>
    <TextField
        id="answer"
        label="Write your answer"
        multiline
        rowsMax="4"
        onChange={handleChange('multiline')}
        className={classes.textField}
        margin="normal"
      />
      </Grid>
    
        </Grid>
    </form>
  );
}