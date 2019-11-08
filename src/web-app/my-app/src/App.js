import React from 'react';
import Teacher from './components/teacher';

import Login from './login/Login'
import SignUp from './signup/Signup'
import PrivateRoute from './PrivateRoute'
import AuthContextProvider from './context/Auth'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {

  return (
    <AuthContextProvider>
    <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <PrivateRoute path="/home" component={Teacher} />
        </Switch>
    </Router>
    </AuthContextProvider>
  );
}