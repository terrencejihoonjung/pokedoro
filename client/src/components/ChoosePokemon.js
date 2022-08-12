import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Dialog from "./Dialog";

function ChoosePokemon({ user, hasPokemon, setHasPokemon }) {
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
            <Dialog messages={messages} />
        </Box>
    )
}

export default ChoosePokemon;