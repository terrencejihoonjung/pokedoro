import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useSound from 'use-sound';
import pokemonNext from '../sounds/pokemonNext.mp3';
import Dialog from "./Dialog";
import PokemonForm from "./PokemonForm";

function ChoosePokemon({ user, hasPokemon, setHasPokemon }) {
    const [currentMessage, setCurrentMessage] = useState(0);
    const [play] = useSound(pokemonNext);
    const navigate = useNavigate();
    
    const messages = [
        `Hi ${user.username}! Welcome to Pokédoro!`,
        "Before I get you started, I want to help you choose your first pokémon!",
        "Hmm... Let's try this.",
        "Answer these next few questions, and I'll find a pokémon that's just right for you!",
        "What's your favorite type?",
        "Which stat appeals to you most?",
        "Tall or short?",
        "Heavy or light?",
        "Alright... I've narrowed it down to one pokémon just for you...",
        "...",
        "What would you like to name it?",
        "Perfect!",
        "Presenting...",
        "Your new pokémon! Congratulations!"
    ]

    function handleNextMessage() {
        if (currentMessage < messages.length - 1) {
            play()
            setCurrentMessage(currentMessage + 1);
        } else {
            setCurrentMessage(0);
        }
    }

    if (hasPokemon) {
        navigate("/pokeboard");
    }

    return (
        <Box sx={{
            width: '100vw', 
            height:'100vh', 
            backgroundColor: 'primary.main',
            color: 'secondary.main',
            justifyContent:'center',
            position: 'relative'
        }}>
            <PokemonForm currentMessage={currentMessage} />
            <Dialog messages={messages} handleNextMessage={handleNextMessage} currentMessage={currentMessage} />
        </Box>
    )
}

export default ChoosePokemon;