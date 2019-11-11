import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const products = [
  { name: 'Question 1', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae.', price: '$9.99' },
  { name: 'Question 2', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae.', price: '$3.45' },
  { name: 'Question 3', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae.', price: '$6.51' },
  { name: 'Question 4', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae.', price: '$14.11' },
];

const payments = [
  { name: 'Exam Name', detail: 'PC1' },
  { name: 'Teacher Name', detail: 'Mr Jeremy' },
  { name: 'University Name', detail: 'UTEC' },
  { name: 'Questions', detail: '20' },
];

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review summary
      </Typography>
      <List disablePadding>
        {products.map(product => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">Rating</Typography>
              <Rating
                name="rating-id"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
          </ListItem>
        ))}
      </List>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Exam details
          </Typography>
          <Grid container>
            {payments.map(payment => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}