import React from 'react';
import Appbar from '../components/app_bar';
import Inputs from '../components/inputs';
import Buttons from '../components/buttons';
import Grid from '@material-ui/core/Grid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default props => {
    return (
      <div>
      <Grid container spacing={3}>
      <Grid item xs={12}>
        <Appbar/>
      </Grid>
      <Grid item xs={12}>
        <Inputs/>
      </Grid>
      <Grid item xs={12}>
        <Link to="/submit"><Buttons/>  </Link>
      </Grid> 
        
      </Grid>
      </div>
    );
}