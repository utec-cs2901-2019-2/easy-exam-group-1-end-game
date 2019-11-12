import React, { useState, useContext } from "react"
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import axios from 'axios';
import { AuthContext } from "../context/Auth";

const useStyles = makeStyles({
    general: {
        minWidth: '100%',
        marginBottom: '20px'
    }
});

var config = {
    headers : {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
  }

export default props => {

    const classes = useStyles();
    const [user, setUser] = useState({username:'', password: ''});
    const  { auth,setAuth, userContext, setUserContext }  = useContext(AuthContext);

    function postLogin () {
        axios.post("http://localhost:8080/auth/login/", {
            username: user.username,
            password: user.password
        }).then( result => {
            if(result.status === 200) {
                localStorage.setItem("token", result.data.token);
                console.log(result.data.token);
                setAuth(true);
                getUser();
            }
        }).catch(e => {
            console.log(e);
        });
    }
    
    function getUser() {
        axios.get('http://localhost:8080/user/'+user.username, config)
            .then (
            r => {
                setUserContext({name: r.data.name,
                                lastn: r.data.lastName,
                                rol: r.data.rol,
                                uni: r.data.university});
            });
    }

    if (auth && userContext.rol === "student") {
        return <Redirect to="/student" />;
    }

    if (auth && userContext.rol === "teacher") {
        return <Redirect to="/teacher" />
    }

    return (
    <Container maxWidth="sm">
        <Box>Easy Exam - Login</Box>
        <Box><TextField
            id="username"
            label="Username"
            margin="normal"
            value={user.username}
            onInput={e => setUser({username: e.target.value, password: user.password})}
            className={classes.general}
            /></Box>
        <Box>
            <TextField 
            id="password"
            label="Password"
            type="password"
            margin="normal"
            value={user.password}
            onInput={e => setUser({username: user.username, password: e.target.value})}
            className={classes.general}
            />
        </Box>
        <Box ><Button className={classes.general} color="primary" variant="contained" onClick={postLogin} >Login</Button></Box>
        <Box ><Link to="/signup"><Button className={classes.general} variant="contained" >Sign Up</Button></Link></Box>
        <Box ><Button className={classes.general}>Forget your password?</Button></Box>
    </Container>
        )
}
