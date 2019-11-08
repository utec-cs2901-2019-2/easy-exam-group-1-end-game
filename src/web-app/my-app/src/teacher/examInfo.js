import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

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
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const subjects = [
  'Sorting algorithms',
  'Dynamic Programming',
  'Linear Programming',
  'NP Completeness',
  'Greedy algorithms',
  'Divide and Conquer algorithms'
];

function getStyles(tag, SubjectName, theme) {
  return {
    fontWeight:
      SubjectName.indexOf(tag) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function ExamInfo() {
  const classes = useStyles();
  const theme = useTheme();
  const [SubjectName, setSubjectName] = React.useState([]);
  const [numberQuestions, setNumberQuestions] = React.useState({
    question: '',
  });

  const handleChange = event => {
    setSubjectName(event.target.value);
  };

  const handleChangeQuestion = name => event => {
    setNumberQuestions({ ...numberQuestions, [name]: event.target.value });
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
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id="tags-multiple">Select tags</InputLabel>
            <Select
              labelId="tags-multiple"
              id="list-of-tags"
              multiple
              value={SubjectName}
              onChange={handleChange}
              input={<Input id="select multiple tags" />}
              renderValue={selected => (
                <div className={classes.chips}>
                  {selected.map(value => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              )}
              MenuProps={MenuProps}
            >
              {subjects.map(tag => (
                <MenuItem key={tag} value={tag} style={getStyles(tag, SubjectName, theme)}>
                  {tag}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            id="outlined-number"
            label="Number of Questions"
            value={numberQuestions.question}
            onChange={handleChangeQuestion('question')}
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
    </React.Fragment>
  );
}