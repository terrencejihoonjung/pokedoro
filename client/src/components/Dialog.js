import { Box, Typography, Button, styled } from "@mui/material";
import { Navigate } from "react-router-dom";
import TypeWriterEffect from 'react-typewriter-effect';

function Dialog({ messages, handleNextMessage, currentMessage }) {

    const DialogBox = styled(Box) (({theme}) => ({
        border: 'solid ',
        height: '26vh',
        width: '100vw',
        position: 'absolute',
        bottom: 0,
    }));

    const NextButton = styled(Button) (({theme}) => ({
        fontSize: '1rem',
        color: theme.palette.secondary.main,
        position: 'absolute',
        bottom: 3,
        left: '95vw'
        
    }));

    return (
        <DialogBox onClick={handleNextMessage} >
            <Typography sx={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                mb: 15, mt: 1, ml: 1
            }}>
                Professor Pokédoro
            </Typography>

            <TypeWriterEffect
                text={messages[currentMessage]}
                cursorColor='#f7f7f7'
                typeSpeed={30}
                textStyle={{
                    color: '#f7f7f7',
                    marginLeft: '5vw',
                }}
            />

            
        </DialogBox>
    )
}

export default Dialog;