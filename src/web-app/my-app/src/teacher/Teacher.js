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
import Box from '@material-ui/core/Box';
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
  const { tags, questions, setQuestions, count, disable, setDisable, info } = useContext(TeacherContext);

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

    if(activeStep === steps.length - 1){
      var questionsToCompile = [];
      var listRate = [];
      for(let i = 0; i < Object.keys(questions).length; i++) {
        questionsToCompile = questionsToCompile.concat({
          description: questions[i].description,
          answer: questions[i].answer
        });
        listRate = listRate.concat({
          id: questions[i].id,
          rating: questions[i].rating
        });
      }
      
      if(validateToken()) {
        axios.post("http://localhost:8080/question/rate",{
          listRate
        },{
          headers: {
            "Authorization":"Bearer "+localStorage.getItem("token")
          }
        }).then( response => {
          console.log("Now you can download your exam");
        })

        axios.post("http://localhost:8080/download/exam", {
          questionToCompileList: questionsToCompile,
          teacherName: info.name+" "+info.last,
          examName: info.exam,
          universityName: info.univ
        },{
          headers: {
            "Authorization" : "Bearer "+localStorage.getItem("token")
          },
          responseType: 'blob',
        })
        .then( ({ data }) => {
          const downloadUrl = window.URL.createObjectURL(new Blob([data]));
          const link = document.createElement('a');
          link.href = downloadUrl;
          link.setAttribute('download', 'file.zip'); //any other extension
          document.body.appendChild(link);
          link.click();
          link.remove();
  
        })
      } else {
        alert("Tu sesión ha expirado");
        setAuth(false);
      }
    }

    setDisable(true);
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
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to EasyExam
        </Typography>
        <Box align="center">
        A platform where you can generate exams in an easy and collaborative way.
        </Box>
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
                  Thanks for using EasyExam.
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
                    disabled = {disable}
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