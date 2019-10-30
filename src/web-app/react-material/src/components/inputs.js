import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const courses = [
  {
    value: 'Software Engineering',
    label: 'Software Engineering',
  },
  {
    value: 'Analysis and Design of Algorithms',
    label: 'Analysis and Design of Algorithms',
  },
  {
    value: 'Databases',
    label: 'Databases',
  },
  {
    value: 'Theory of Computation',
    label: 'Theory of Computation',
  },
];

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function OutlinedTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    course: 'Software Engineering',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
    <Grid container spacing={3}>
    <Grid item xs={4}>
        <TextField
            id="name"
            label="Name"
            defaultValue=""
            className={classes.textField}
            margin="normal"
            variant="outlined"
        />
    </Grid>
    <Grid item xs={4}>
        <TextField
            id="last-name"
            label="Last Name"
            defaultValue=""
            className={classes.textField}
            margin="normal"
            variant="outlined"
        />
    </Grid>
    <Grid item xs={4}>
        <TextField
            id="institution"
            label="Institution"
            className={classes.textField}
            defaultValue=""
            margin="normal"
            variant="outlined"
        />
    </Grid>
    <Grid item xs={4}>
        <TextField
            id="course"
            select
            label="Select course"
            className={classes.textField}
            value={values.courses}
            onChange={handleChange('course')}
            SelectProps={{
            native: true,
            MenuProps: {
                className: classes.menu,
            },
            }}
            helperText="Please select your course name"
            margin="normal"
            variant="outlined"
        >
            {courses.map(option => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
            ))}
        </TextField>
    </Grid>
    <Grid item xs={4}>
        <TextField
            id="outlined-number"
            label="Number of Questions"
            value={values.age}
            onChange={handleChange('age')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
            margin="normal"
            variant="outlined"
        />
    </Grid>
      </Grid>
    </form>
  );
}