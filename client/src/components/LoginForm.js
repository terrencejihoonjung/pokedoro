import { Box, Paper, Avatar, Button, Alert, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { CatchingPokemon } from '@mui/icons-material';

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

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
            height: '35vh',
            width: '30vw',
            boxShadow: 6
        }}>
            <Avatar sx={{ mt: 4, mb: 1, bgcolor: 'secondary.main' }}>
                <CatchingPokemon sx={{
                    fontSize: 28,
                    color: "primary.main"
                }}/>
            </Avatar>

            <Box component="form" sx={{ p:4 }} onSubmit={handleLogin} >
                <Grid container columnSpacing={2} rowSpacing={4} sx={{ justifyContent: 'center'}}>
                    <Grid item xs={12} >
                        <TextField 
                            id="username"
                            label="Username"
                            required
                            fullWidth
                            value={username}
                            onChange={e => setUsername[e.target.value]}
                        />
                    </Grid>

                    <Grid item xs={12} >
                        <TextField 
                            id="password"
                            label="Password"
                            required
                            fullWidth
                            value={password}
                            onChange={e => setPassword[e.target.value]}
                        />
                    </Grid>

                    <Box>
                        {errors.map(err => {
                            return <Alert sx={{mt: 2, mb:1}} severity="error" key={err}>{err}</Alert>
                        })}
                    </Box>

                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{ 
                            mt: '8vh', width: '30%',
                            '&:hover': {
                                backgroundColor: 'thirdGreen.main',
                                color: 'secondary.main'
                            }
                        }}  
                    >
                        Log In
                    </Button>

                </Grid>
            </Box>
        </Paper>
    )
}

export default LoginForm;