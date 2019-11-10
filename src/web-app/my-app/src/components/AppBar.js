import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  toolbarTitle: {
    flexGrow: 1,
  },
  toolbar: {
    flexWrap: 'wrap',
  }
}))

export default props => {

    const classes = useStyles();

    return (
        <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            EasyExam
          </Typography>
          <Button href="#" color="white" variant="outlined" className={classes.link}>
            Logout
          </Button>
        </Toolbar>
        </AppBar>
    )
}

