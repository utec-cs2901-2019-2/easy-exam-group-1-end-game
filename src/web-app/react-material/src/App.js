import React from 'react';
import Home from './homeTeacher/home';
import Submitquestion from './submitQuestion/submit_question';
import DownloadPdf from './downloadExam/downloadPdf';
import Login from './login/Login'
import SignUp from './signup/Signup'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
      <Redirect from="/" to="/login"/>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/download">
            <DownloadPdf/>
          </Route>
          <Route path="/submit">
            <Submitquestion/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}