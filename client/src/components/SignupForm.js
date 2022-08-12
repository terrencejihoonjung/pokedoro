import { Box, Paper, Alert, Avatar, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { CatchingPokemon } from '@mui/icons-material';

function SignupForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);

    async function handleSignup(e) {
        e.preventDefault();
        setErrors([]);
        
        // Fetch returns a promise, and we await it
        const response = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
                bio: "",
                email
            })
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
            height: '50vh',
            width: '30vw',
            boxShadow: 6
        }}>
            <Avatar sx={{ mt: 4, mb: 1, bgcolor: 'secondary.main' }}>
                <CatchingPokemon sx={{
                    fontSize: 28,
                    color: "primary.main"
                }}/>
            </Avatar>

            <Box component="form" sx={{ p:4 }} onSubmit={handleSignup}>
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
                            id="email"
                            label="Email"
                            required
                            fullWidth
                            value={email}
                            onChange={e => setEmail[e.target.value]}
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

                    <Grid item xs={12}>
                        <TextField 
                            id="passwordConfirmation"
                            label="Password Confirmation"
                            required
                            fullWidth
                            value={passwordConfirmation}
                            onChange={e => setPasswordConfirmation[e.target.value]}
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
                            mt: '12vh', width: '30%',
                            '&:hover': {
                                backgroundColor: 'thirdGreen.main',
                                color: 'secondary.main'
                            }
                        }}  
                    >
                        Sign up
                    </Button>

                </Grid>
            </Box>
        </Paper>
    )
}

export default SignupForm;