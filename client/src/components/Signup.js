import { Box, Typography } from "@mui/material";
import SignupForm from "./SignupForm";

function Signup() {

    

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
                    Signup
                </Typography>
                
                <Typography variant="h6" fontWeight="fontWeightMedium"
                    sx={{textTransform: 'none', mt: '1vh'}}
                >
                    Create a new account and choose your study buddy!
                </Typography>
            </Box>
            

            {/* Sign up Form */}
            <SignupForm />

        </Box>        
    )
}

export default Signup;