import React, { useState } from "react"
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import {Login} from "../auth/AuthService"
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    general: {
        minWidth: '100%',
        marginBottom: '20px'
    }
});

export default props => {

    const classes = useStyles();
    const[user, setUser] = useState({usernameOrEmail:'', password: ''});
    const onResponse = user => {
        Login(user).then(r=> console.log(r.data))
    }

    return (
    <Container maxWidth="sm">
        <Box>Easy Exam - Login</Box>
        <Box><TextField
            id="usernameOrEmail"
            label="Username or Email"
            margin="normal"
            value={user.usernameOrEmail}
            onInput={e => setUser({usernameOrEmail: e.target.value, password: user.password})}
            className={classes.general}
            /></Box>
        <Box>
            <TextField 
            id="password"
            label="Password"
            type="password"
            margin="normal"
            value={user.password}
            onInput={e => setUser({usernameOrEmail: user.usernameOrEmail, password: e.target.value})}
            className={classes.general}
            />
        </Box>
        <Box ><Button className={classes.general} color="primary" variant="contained" onClick={()=>onResponse(user)} >Login</Button></Box>
        <Box ><Link to="/signup"><Button className={classes.general} variant="contained" >Sign Up</Button></Link></Box>
        <Box ><Button className={classes.general}>Forget your password?</Button></Box>
        <Box>{user.usernameOrEmail} {user.password}</Box>
    </Container>
        )
}
