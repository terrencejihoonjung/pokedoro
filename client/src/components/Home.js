import { Box, Typography, Stack, styled } from "@mui/material";
import {  } from '@mui/icons-material';

function Home() {

    const HomeBoxBlack = styled(Box) (({theme}) => ({
        width: '100%', 
        height:'100vh', 
        backgroundColor: theme.palette.primary.main, 
        color: theme.palette.secondary.main,
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center'
        
    }));

    const HomeBoxWhite = styled(Box) (({theme}) => ({
        width: '100%', 
        height:'100vh', 
        backgroundColor: theme.palette.secondary.main, 
        color: theme.palette.primary.main,
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center'
        
    }));

    return (
        <Stack>
            <HomeBoxWhite>
                    <Box sx={{mr: '30vw', mb: '20vh'}}>
                        <Typography variant="h1" fontWeight="fontWeightBold" 
                        sx={{textTransform: 'none', fontSize: 125}}
                        >
                            Pokédoro
                        </Typography>
                        <Typography variant="h6" fontWeight="fontWeightMedium"
                            sx={{textTransform: 'none'}}
                        >
                            A new and fun approach to studying using the 
                            <Box sx={{display: 'inline', color: 'thirdGreen.main'}}> pomodoro technique </Box> 
                            integrated with 
                            <Box sx={{display: 'inline', color: 'thirdRed.main'}}> pokémon</Box>. 
                        </Typography>
                    </Box>
                    
                
            </HomeBoxWhite>

            <HomeBoxBlack>
                <Typography variant="h4" fontWeight="fontWeightBold">This is box number 2!</Typography>
            </HomeBoxBlack>

            <HomeBoxWhite><Typography variant="h4" fontWeight="fontWeightBold">This is box number 3!</Typography></HomeBoxWhite>
        </Stack>
    )
}

export default Home;