import { Box, Paper, Avatar, Button, Grid, TextField } from "@mui/material";
import { CatchingPokemon } from '@mui/icons-material';

function LoginForm() {
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
            
        }}>
            <Avatar sx={{ mt: 4, mb: 1, bgcolor: 'secondary.main' }}>
                <CatchingPokemon sx={{
                    fontSize: 28,
                    color: "primary.main"
                }}/>
            </Avatar>

            <Box component="form" sx={{ p:4 }}>
                <Grid container columnSpacing={2} rowSpacing={4} sx={{ justifyContent: 'center'}}>
                    <Grid item xs={12} >
                        <TextField 
                            name="username"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                        />
                    </Grid>

                    <Grid item xs={12} >
                        <TextField 
                            name="password"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                        />
                    </Grid>

                    {/* map errors here */}

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