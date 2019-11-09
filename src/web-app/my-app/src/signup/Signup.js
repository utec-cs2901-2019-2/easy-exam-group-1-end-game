import React, { useState, useContext } from "react"
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios';
import { AuthContext } from "../context/Auth";

const useStyles = makeStyles({
    general: {
        minWidth: '100%',
        marginBottom: '20px'
    }
});

export default props => {
    
    const classes = useStyles();
    const [username, setUsername] = useState()
    const [lastname, setLastname] = useState()
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [university, setUniversity] = useState()
    const [rol, setRol] = useState("student")
    const  { auth,setAuth, userContext, setUserContext }  = useContext(AuthContext);

    const handleChange = e => {
        setRol(e.target.value);
    }

    function postRegister() {
        axios.post("http://localhost:8080/auth/register", {
            name: name,
            lastName: lastname,
            userName: username,
            password: password,
            university: university,
            rol: rol
        }).then( result => {
            if(result.status === 200) {
                localStorage.setItem("token", result.data.token);
                setUserContext({name: name, 
                                lastn: lastname,
                                rol: rol, 
                                uni: university});
                setAuth(true);
            }
        }).catch(e => {
            console.log(e);
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
            <Box>Easy Exam - Sign Up</Box>
            <Box>
                <TextField 
                    id="name"
                    label="Name"
                    margin="normal"
                    className={classes.general}
                    onInput={e => setName(e.target.value)} 
                />
            </Box>
            <Box>
                <TextField
                    id="lastname"
                    label="Lastname"
                    margin="normal"
                    className = {classes.general}
                    onInput={ e => setLastname(e.target.value)}
                />
            </Box>
            <Box>
                <TextField
                    id="username"
                    label="Username"
                    margin="normal"
                    className = {classes.general}
                    onInput={e=> setUsername(e.target.value)}
                />
            </Box>
            <Box>
                <TextField
                    id="password"
                    label="Password"
                    margin="normal"
                    type="password"
                    className = {classes.general}
                    onInput={e=> setPassword(e.target.value)}
                />
            </Box>
            <Box style={{paddingTop: '30px'}}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Choose your account</FormLabel>
                        <RadioGroup value={rol} onChange={handleChange}>
                        <FormControlLabel value="student" control={<Radio />} label="Student" />
                        <FormControlLabel value="teacher" control={<Radio />} label="Teacher" />
                        </RadioGroup>
                </FormControl>
            </Box>
            <Box>
                <TextField
                    id="university"
                    label="University"
                    margin="normal"
                    className = {classes.general}
                    onInput={e=> setUniversity(e.target.value)}
                />
            </Box>
            <Box><Button className = {classes.general} variant="contained" color="primary" onClick={postRegister}>Sign Up</Button></Box>
        </Container>
    )
}