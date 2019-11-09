import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        End Game
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function Challenge() {
  const classes = useStyles();
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [name, setName] = React.useState();
  const [array,setArray] = React.useState([]);
  const labelRef = React.useRef(null);

  var postdata = {
    "tags" : array
}
let config = {
headers : {
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
}

const ListOfQuestions = () => {
return axios.post('http://localhost:8080/question/exam/1', postdata, config).then( r => {
  console.log(r);
});
}

  React.useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  const handleButton = () => {
    setArray(array.concat(name));
    console.log(array);
  }

  const handleNext = () => {
    ListOfQuestions();
  };


  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            EasyExam
          </Typography>
          <Button href="#" color="white" variant="outlined" className={classes.link}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Challenge
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Quickly build a challenge in the topic you want to practice! Write down the topic below and we'll generate a challenge with the questions that best fit for you.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="center">
        <Grid item xs={6}>
            <FormControl className={classes.formControl} variant="outlined">
                <InputLabel ref={labelRef} htmlFor="component-outlined">
                    Tags
                </InputLabel>
                <OutlinedInput
                    id="component-outlined"
                    value={name}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                />
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <Button href="#" color="primary" variant="outlined" onClick={handleButton}>
            Add
          </Button>
          </Grid>
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
      <Grid container spacing={12} justify="center" alignItems="center">
      {array.map(item=>{
       return <Grid item xs={12} direction="row">
         {item}
        </Grid>
      })}
      <Grid item xs={12}>
      <Button variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}>
          Go
      </Button>

      </Grid>
      </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
}