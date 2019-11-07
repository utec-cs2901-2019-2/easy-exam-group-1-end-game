import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './auth/auth';

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated, authToken }= useAuth();

  return(
    <Route {...rest} render={ props =>
      isAuthenticated && authToken?  
      (
      <Component {...props} />
    ): (
      <Redirect to="/login"></Redirect>
    )
  }
    />
  );
}

export default PrivateRoute;