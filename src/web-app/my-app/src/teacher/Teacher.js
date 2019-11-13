import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from '../components/AppBar';
import Copyright from '../components/Copyrights';

import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExamInfo from './ExamInfo';
import SubmitQuestions from './SubmitQuestions';
import ReviewDownload from './ReviewDownload';
import { TeacherContext } from '../context/Teacher';
import axios from 'axios';
import validateToken from '../service/Validator';
import { AuthContext } from '../context/Auth';
  
const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Exam info', 'Submit questions', 'Review and download'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ExamInfo />;
    case 1:
      return <SubmitQuestions />;
    case 2:
      return <ReviewDownload />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const { setAuth }  = useContext(AuthContext);
  const { tags, setQuestions, count } = useContext(TeacherContext);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    //here we apply the tags
    if (activeStep === 0) {
      if (validateToken()) {
        axios.post("http://localhost:8080/question/exam/"+count, {tags}, {
          headers: {
            "Authorization" : "Bearer "+localStorage.getItem("token")
          }
        })
        .then(
          r => {
            setQuestions(r.data);
          }
        );
      } else {
        alert("Tu sesión ha expirado");
        setAuth(false);
      }
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar></AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Generate Exam
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for using EasyExam enjoy teaching.
                </Typography>
                <Typography variant="subtitle1">
                  We have emailed you a copy of your exam and don't forget to review your pending questions.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Download pdf' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>

      <Copyright/>

    </React.Fragment>
  );
}