import React from 'react';
import Appbar from '../components/app_bar';
import Sendquestion from '../components/send_question';
import Grid from '@material-ui/core/Grid';
import Buttons from '../components/buttons'
import {
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
        <Sendquestion/>
      </Grid>
      <Grid item xs={12}>
      <Link to="/download"><Buttons/>  </Link>
      </Grid>
      </Grid>
      </div>
    );
}