import React from "react"
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import { NavLink } from "react-router-dom";

export default props => {
    return (
        <Container maxWidth="sm">
            <Box>Easy Exam - Sign Up</Box>
            <Box>
                <TextField 
                    id="name"
                    label="Name"
                    margin="normal"
                />
            </Box>
            <Box>
                <TextField
                    id="lastname"
                    label="Lastname"
                    margin="normal"
                />
            </Box>
            <Box>
                <TextField
                    id="email"
                    label="Email"
                    margin="normal"
                />
            </Box>
            <Box>
                <TextField
                    id="password"
                    label="Password"
                    margin="normal"
                    type="password"
                />
            </Box>
            <Box><NavLink to="/home"><Button variant="contained" color="primary">Sign Up</Button></NavLink></Box>
        </Container>
    )
}