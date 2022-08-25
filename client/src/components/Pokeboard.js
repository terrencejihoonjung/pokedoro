import { Box, Grid, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Pokeboard({ hasPokemon }) {
    const navigate = useNavigate();
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);

    let interval; 

    if (!hasPokemon) {
        navigate("/choose-pokemon")
    }

    useEffect(() => {
        interval = setInterval(() => {
            clearInterval(interval);
            
            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                } else {
                    let minutes = displayMessage ? 24 : 4;
                    let seconds = 59;

                    setSeconds(seconds);
                    setMinutes(minutes);
                    setDisplayMessage(!displayMessage);
                }
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000)
    }, [seconds])

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <Box sx={{
            height: '100vh',
            display:'flex',
            justifyContent:'center',
            alignItems: 'center',
            textAlign:'center'
        }}>
            <Grid  
                container
                
            >
                <Grid item xs={12}>
                    {displayMessage && <Typography variant="h5">Break time! New session starts in:</Typography>}
                    <Typography variant='h2' fontWeight="fontWeightBold" >{timerMinutes}:{timerSeconds}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Pokeboard;