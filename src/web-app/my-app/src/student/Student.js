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


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        End Game
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function Challenge() {
  const classes = useStyles();
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [name, setName] = React.useState();
  const [array,setArray] = React.useState([]);
  const labelRef = React.useRef(null);

  var postdata = {
    "tags" : array
}
let config = {
headers : {
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
}

const ListOfQuestions = () => {
return axios.post('http://localhost:8080/question/exam/2', postdata, config).then( r => {
  console.log(r);
});
}


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