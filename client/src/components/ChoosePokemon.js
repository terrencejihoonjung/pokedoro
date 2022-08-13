import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useSound from 'use-sound';
import pokemonNext from '../sounds/pokemonNext.mp3';
import Dialog from "./Dialog";
import PokemonForm from "./PokemonForm";

function ChoosePokemon({ user, hasPokemon, setHasPokemon }) {
    // State needed for dialogue
    const [currentMessage, setCurrentMessage] = useState(0);
    const [play] = useSound(pokemonNext);
    const navigate = useNavigate();

    // All dialogue messages
    const messages = [
            `Hi ${user.username}! Welcome to Pokédoro!`,
            "Before I get you started, I want to help you choose your first pokémon!",
            "Hmm... Let's try this.",
            "Answer these next few questions, and I'll find a pokémon that's just right for you!",
            "Grass, Fire, or Water?",
            "Good choice.",
            "Choose a Pokémon...",
            "...",
            "Interesting choice...",
            "Alright!",
            "What would you like to name it?",
            "Perfect!",
            "Presenting...",
            "Your new pokémon! Congratulations!"
        ]

    // Starter Pokemon
    const grassStarters = ["bulbasaur", "chikorita", "treecko", "turtwig", "snivy", "chespin"]
    const waterStarters = ["squirtle", "totodile", "mudkip", "piplup", "oshawott", "froakie"]
    const fireStarters = ["charmander", "cyndaquil", "torchic", "chimchar", "tepig", "fennekin"]
    const [chosenType, setChosenType] = useState("");
    const [starterPokemon, setStarterPokemon] = useState([]);
    const [chosenPokemon, setChosenPokemon] = useState({});
    const [pokemonName, setPokemonName] = useState("");

    function fetchPokemon(pokemon) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
            .then(r => r.json())
            .then(pokemon => {
                setStarterPokemon(starterPokemon => [...starterPokemon, pokemon])
                console.log(pokemon)
            })
    }
    
    function grabStarterPokemon() {
        if (chosenType === "Grass") {
            grassStarters.forEach(pokemon => {
                fetchPokemon(pokemon);
            })
        }
        else if (chosenType === "Fire") {
            fireStarters.forEach(pokemon => {
                fetchPokemon(pokemon);
            })
        }
        else if (chosenType === "Water") {
            waterStarters.forEach(pokemon => {
                fetchPokemon(pokemon);
            })
        }
    }
    
    function handleNextMessage() {
        if (currentMessage < messages.length - 1) {
            if (currentMessage === 4 && !chosenType) {
                return null;
            }
            else if (currentMessage === 5 && starterPokemon.length === 0) {
                grabStarterPokemon();
            }
            else if (currentMessage === 6 && Object.keys(chosenPokemon) === 0) {
                return null;
            }
            play();
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
            <PokemonForm currentMessage={currentMessage} setCurrentMessage={setCurrentMessage} play={play}
                setChosenType={setChosenType}
                setChosenPokemon={setChosenPokemon}
                starterPokemon={starterPokemon}
                pokemonName={pokemonName}
                setPokemonName={setPokemonName}
            />
            <Dialog messages={messages} handleNextMessage={handleNextMessage} currentMessage={currentMessage} />
        </Box>
    )
}

export default ChoosePokemon;