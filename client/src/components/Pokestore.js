import { Box, Grid, Paper, Typography, TextField, Snackbar, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PokemonFeatureCard from "./PokemonFeatureCard"; 

function Pokestore({ user, hasPokemon, setPokemon }) {
    const navigate = useNavigate(); 
    const [pokemonSearch, setPokemonSearch] = useState("");
    const [openMessage, setOpenMessage] = useState(false);
    const [featuredPokemon, setFeaturedPokemon] = useState([]);
    const [search, setSearch] = useState({});

    useEffect(() => {
        let offsetValue = Math.floor(Math.random() * 999) + 1;
            
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=${offsetValue}`)
            .then(r => r.json())
            .then(pokemon => {
                pokemon.results.forEach(pokemonData => {
                    let url = pokemonData.url
                    fetch(url)
                        .then(r => r.json())
                        .then(pokeData => setFeaturedPokemon(pokemon => [...pokemon, pokeData]))
                })
        })
    }, [])

    if (!hasPokemon) {
        navigate("/choose-pokemon")
    }

    function handleCloseMessage(event, reason) {
        if (reason === "clickaway") {
            return;
        }
        setOpenMessage(false);
    }

    function handleChange(e) {
        setPokemonSearch(e.target.value);
        if (e.target.value === "") return;
    }

    function handleSearch() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}/`)
            .then(r => r.json())
            .then(pokemon => setSearch(pokemon))
    }

    function handleAddPokemon(pokemon) {
        fetch("/pokemons", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: pokemon.name,
                height: pokemon.height,
                weight: pokemon.weight, 
                image: pokemon.sprites.front_default,
                poketype: pokemon.types['0'].type.name,
                base_experience: pokemon.base_experience,
                trainer_id: user.id
            })
        })
        .then(r => r.json())
        .then(newPokemon => {
            setPokemon(pokemon => [...pokemon, newPokemon])
            setOpenMessage(true);
        })
    }

    return (
        <Box>
            <Grid 
                container 
                direction="column"
                justifyContent="space-evenly"
                alignItems="center"
                rowSpacing={7}
            >
                <Grid item xs={12}>
                    <Typography variant="h4" fontWeight="fontWeightBold" >
                        Welcome to the Pokéstore!
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{
                        p:3,
                        width: '85vw', height: '60vh',
                        borderRadius:'16px'
                    }}>
                        <Typography variant="h4" fontWeight="fontWeightBold">Featured</Typography>
                        <Box sx={{display:'flex', gap:'2vw', overflow:'scroll', overflowY: 'scroll', height:'auto', width:'auto'}}>
                            {featuredPokemon.map(pokemon => {
                                return <PokemonFeatureCard key={pokemon.id} pokemon={pokemon} handleAddPokemon={handleAddPokemon} />
                            })}
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} >
                    <Paper sx={{
                        p:3,
                        width: '85vw', height: 'auto',
                        borderRadius:'16px'
                    }}>
                        <Typography variant="h4" fontWeight="fontWeightBold">Search</Typography>
                        <TextField id="search-pokemon" variant="outlined" fullWidth value={pokemonSearch} onChange={e => handleChange(e)}/>
                        <Button sx={{mt:'1vh', mb:'1vh'}} onClick={e => handleSearch(e)} variant="outlined">Search</Button>

                        {Object.keys(search).length > 0 ?   
                            <PokemonFeatureCard key={search.id} pokemon={search} handleAddPokemon={handleAddPokemon} />
                        : null}
                    </Paper>
                </Grid>
            </Grid>

            <Snackbar
                open={openMessage}
                autoHideDuration={3000}
                onClose={handleCloseMessage}
                message="Caught Pokémon!"
            />
        </Box>
    )
}

export default Pokestore;