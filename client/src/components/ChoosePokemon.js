import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useSound from 'use-sound';
import pokemonNext from '../sounds/pokemonNext.mp3';
import pokemonCaught from '../sounds/pokemonCaught.mp3';
import Dialog from "./Dialog";
import PokemonForm from "./PokemonForm";

function ChoosePokemon({ user, hasPokemon, setHasPokemon }) {
    // State needed for dialogue
    const [currentMessage, setCurrentMessage] = useState(0);
    const [play] = useSound(pokemonNext);
    const [playCaught] = useSound(pokemonCaught);
    const navigate = useNavigate();

    if (hasPokemon) {
        navigate("/profile");
        window.location.reload();
    }

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
            "Your new pokémon! Congratulations!",
            "Happy Studying!"
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
            })
    }
    
    function nowHasPokemon() {
        fetch(`/trainers/${user.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                has_pokemon: true
            })
        })
            .then(r => r.json()) 
            .then(trainer => setHasPokemon(trainer.has_pokemon))
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

    function savePokemon() {
        fetch("/pokemons", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: pokemonName,
                height: chosenPokemon.height,
                weight: chosenPokemon.weight, 
                image: chosenPokemon.sprites.front_default,
                poketype: chosenPokemon.types['0'].type.name,
                base_experience: chosenPokemon.base_experience,
                trainer_id: user.id
            })
        });
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
            else if (currentMessage === 10 && !pokemonName) {
                return null;
            }
            else if (currentMessage === 11) {
                savePokemon();
            }
            else if (currentMessage === 12) {
                playCaught();
            }
            play();
            setCurrentMessage(currentMessage + 1); 
        } else {
            nowHasPokemon();
        }
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
                chosenPokemon={chosenPokemon}
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