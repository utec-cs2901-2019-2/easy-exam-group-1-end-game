import React from 'react';
import HomeTeacher from './teacher/Home';
import Student from './student/Student';
import Login from './login/Login';
import SignUp from './signup/Signup';
import PrivateRoute from './PrivateRoute';
import AuthContextProvider from './context/Auth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export default function App() {

  return (
    <AuthContextProvider>
    <Router>
      <Redirect exact from="/" to="/login"/>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <PrivateRoute path="/teacher" component={HomeTeacher} />
          <PrivateRoute path="/student" component={Student} />
        </Switch>
    </Router>
    </AuthContextProvider>
  );
}