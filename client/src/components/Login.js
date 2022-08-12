import { Box, Typography } from "@mui/material";
import LoginForm from "./LoginForm";

function Login({ onLogin }) {

    return (
        <Box sx={{
            width: '100%', 
            height:'100vh', 
            backgroundColor: "secondary.main", 
            color: "primary.main",
            display: 'flex',
            justifyContent:'space-between',
            alignItems: 'center'
        }}>
            <Box sx={{
                ml: '13.5vw',
                mb: '19vh'
            }}>
                <Typography variant="h1" fontWeight="fontWeightBold" 
                sx={{textTransform: 'none', fontSize: 125}}
                >
                    Login
                </Typography>
                
                <Typography variant="h6" fontWeight="fontWeightMedium"
                    sx={{textTransform: 'none', mt: '1vh'}}
                >
                    Log in to your existing account!
                </Typography>
            </Box>
            

            {/* Login Form */}
            <LoginForm onLogin={onLogin} />

        </Box>      
        
    )
}

export default Login;