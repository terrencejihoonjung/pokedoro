import { Box, Paper, Avatar, Button, Alert, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CatchingPokemon } from '@mui/icons-material';

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        setErrors([]);

        // Fetch returns a promise, and we await it
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        // Response.json() returns a promise, we must await it
        const trainer = await response.json();
        if (response.ok) {
            onLogin(trainer)
            navigate("/choose-pokemon")
        } else {
            setErrors(trainer.errors)
        }

    }

    return (
        <Paper sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: 'secondary.main',
            borderRadius: '16px',
            mr: '15vw',
            mb: '12vh',
            height: '45vh',
            width: '30vw',
            boxShadow: 6,
            justifyContent:'center'
        }}>
            <Avatar sx={{ bgcolor: 'secondary.main' }}>
                <CatchingPokemon sx={{
                    fontSize: 28,
                    color: "primary.main"
                }}/>
            </Avatar>

            <Box component="form" sx={{ p:4 }} onSubmit={handleLogin} >
                <Grid container rowSpacing={4} sx={{ justifyContent: 'center'}}>
                    <Grid item xs={12} >
                        <TextField 
                            id="username"
                            label="Username"
                            required
                            fullWidth
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} >
                        <TextField 
                            id="password"
                            label="Password"
                            required
                            fullWidth
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        {errors.map(err => {
                            return <Alert size="small" sx={{mt:1, mb:1}} severity="error" key={err}>{err}</Alert>
                        })}
                    </Grid>

                    <Grid item xs={12} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',}}
                    >
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{ 
                                width: '30%',
                                '&:hover': {
                                    backgroundColor: 'thirdGreen.main',
                                    color: 'secondary.main'
                                }
                            }}  
                        >
                            Log In
                        </Button>
                    </Grid>

                </Grid>
            </Box>
        </Paper>
    )
}

export default LoginForm;