import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Home from './Home';
import Challenge from './Challenge';
import AppBar from '../components/AppBar';
import Copyrights from '../components/Copyrights';

export default props => {

  let { path, url } = useRouteMatch();

  return (
    <div>
    <AppBar/>
    <Switch>
      <Route exact path={path}>
        <Home></Home>
      </Route>
      <Route  path={`${path}/challenge`}>
        <Challenge></Challenge>
      </Route>
    </Switch>
    <Copyrights/>
    </div>
  )
}