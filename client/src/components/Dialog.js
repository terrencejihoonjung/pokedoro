import { Box, Typography, Button, styled } from "@mui/material";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Message from "./Message";

function Dialog({ messages }) {
    const [currentMessage, setCurrentMessage] = useState(0);

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

    function handleNextMessage() {
        if (currentMessage < messages.length) {
            setCurrentMessage(currentMessage + 1);
        } else {
            //navigate("/pokeboard")
        }
    }

    return (
        <DialogBox>
            <Typography sx={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                mb: 15, mt: 1, ml: 1
            }}>
                Professor Pokédoro
            </Typography>

            <Message message={messages[currentMessage]} key={currentMessage} />

            <NextButton onClick={handleNextMessage} >
                Next
            </NextButton>
        </DialogBox>
    )
}

export default Dialog;