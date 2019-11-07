import React, { useState } from 'react';
import Home from './homeTeacher/home';
import Submitquestion from './submitQuestion/submit_question';
import DownloadPdf from './downloadExam/downloadPdf';
import Login from './login/Login'
import SignUp from './signup/Signup'
import PrivateRoute from './PrivateRoute'
import { AuthContext } from './auth/auth'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {

  const [authToken, setAuthToken] = useState()
  const [isAuthenticated, setAuthentication] = useState()

  const setToken = (data, bool) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
    setAuthentication(bool);
  }

  return (
    <AuthContext.Provider value={{authToken, isAuthenticated, setAuthToken: setToken}}>
    <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <PrivateRoute path="/home" component={Home} />
          <Route path="/download">
            <DownloadPdf/>
          </Route>
          <Route path="/submit">
            <Submitquestion/>
          </Route>
        </Switch>
    </Router>
    </AuthContext.Provider>
  );
}