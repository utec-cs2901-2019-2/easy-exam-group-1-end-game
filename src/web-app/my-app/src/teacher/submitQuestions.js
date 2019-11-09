import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function SubmitQuestion() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Write your question
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField required id="questionid" label="Question" fullWidth />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField required id="answerid" label="Answer" fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}