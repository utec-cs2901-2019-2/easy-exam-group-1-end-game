import React from 'react';
import Appbar from '../components/app_bar';
import Grid from '@material-ui/core/Grid';
import Download from '../components/download';

export default props => {
    return (
      <div>
      <Grid container spacing={3}>
      <Grid item xs={12}>
        <Appbar/>
      </Grid>
      <Grid item xs={12}>
        <Download/>
      </Grid>
      </Grid>
      </div>
    );
}