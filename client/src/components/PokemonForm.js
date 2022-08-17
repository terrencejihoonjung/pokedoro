import { Box, Grid, IconButton, TextField, Typography, Paper } from "@mui/material";
import { Grass, Water, LocalFireDepartment } from '@mui/icons-material';
import PokemonCard from "./PokemonCard";

function PokemonForm({ currentMessage, setChosenType, chosenPokemon, setChosenPokemon, starterPokemon, pokemonName, setPokemonName, setCurrentMessage, play}) {

    return (
        <Box sx={{width:'100vw', height:'74vh', display:'flex', justifyContent:'center', alignItem: 'center'}}>
            {currentMessage === 4 ?
                <Box sx={{margin:'auto'}}>
                    <Grid container columnSpacing={48} >
                        <Grid item xs={4} sx={{textAlign: 'center'}}>
                        
                            <IconButton variant="contained" onClick={e => {
                                setChosenType(e.target.textContent)
                                setCurrentMessage(currentMessage => currentMessage + 1)
                                play()
                            }} sx={{
                                backgroundColor: 'primary.main', color: 'thirdGreen.main',
                                border: '2px solid whitesmoke', borderRadius: '24px', height: '12vh', width: '12vw', p: 12,
                                '&:hover': {
                                    backgroundColor:'thirdGreen.main',
                                    color:'secondary.main'
                                }
                            }}>
                                <Grass />
                                Grass
                            </IconButton>
                        </Grid>

                        <Grid item xs={4} sx={{textAlign: 'center'}}>
                            <IconButton variant="contained" onClick={e => {
                                setChosenType(e.target.textContent)
                                setCurrentMessage(currentMessage => currentMessage + 1)
                                play()
                            }} sx={{
                                backgroundColor: 'primary.main', color: 'thirdRed.main',
                                border: '2px solid whitesmoke', borderRadius: '24px', height: '12vh', width: '12vw', p: 12,
                                '&:hover': {
                                    backgroundColor:'thirdRed.main',
                                    color:'secondary.main'
                                }
                            }}>
                                <LocalFireDepartment />
                                Fire
                            </IconButton>
                        </Grid>

                        <Grid item xs={4} sx={{textAlign: 'center'}}>
                            <IconButton variant="contained" onClick={e => {
                                setChosenType(e.target.textContent)
                                setCurrentMessage(currentMessage => currentMessage + 1)
                                play()
                            }} sx={{
                                backgroundColor: 'primary.main', color: 'thirdBlue.main',
                                border: '2px solid whitesmoke', borderRadius: '24px', height: '12vh', width: '12vw', p: 12,
                                '&:hover': {
                                    backgroundColor:'thirdBlue.main',
                                    color:'secondary.main'
                                }
                            }}>
                                <Water />
                                Water
                            </IconButton>
                        </Grid>
                    </Grid>
                </Box>
            : null}

            {currentMessage === 6 ? 
                <Box sx={{margin:'auto'}}>
                    <Grid container rowSpacing={18} >
                        {starterPokemon.map(pokemon => {
                            return <PokemonCard key={pokemon.name} 
                                play={play} 
                                setChosenPokemon={setChosenPokemon} 
                                setCurrentMessage={setCurrentMessage} 
                                pokemon={pokemon} 
                            />
                        })}
                    </Grid>
                </Box>
            : null}

            {currentMessage === 10 ?
                <Box sx={{margin:'auto'}}>
                    <Box sx={{bgcolor: 'secondary.main', borderRadius:'14px', m:4}}>
                        <TextField
                        id="pokemonName"
                        label="Name"
                        variant="filled"
                        required
                        value={pokemonName}
                        onChange={e => setPokemonName(e.target.value)}
                        sx={{ width: '25vw'}}
                        />
                    </Box> 
                </Box>
            : null}

            {currentMessage === 13 ?
                <Box sx={{margin:'auto'}}>
                    <Paper sx={{p: 6 }}>
                        <Typography sx={{display: 'block'}} variant="h5" fontWeight="fontWeightBold">{pokemonName[0].toUpperCase() + pokemonName.slice(1)}</Typography>
                        <Typography sx={{display: 'block'}} variant="h8" fontWeight="fontWeightBold">{chosenPokemon.name[0].toUpperCase() + chosenPokemon.name.slice(1)}</Typography>
                        <Box component="img" src={chosenPokemon.sprites.front_default} sx={{
                            animationDuration: '2s',
                            animationIterationCount: 'infinite',
                            animationName: 'bounce',
                            animationTimingFunction: 'linear',
                            '@keyframes bounce': {
                                '0%':   { transform: 'translateY(0)' },
                                '50%':  { transform: 'translateY(-5px)' },
                                '100%': { transform: 'translateY(0)' }
                            }
                        }} />
                        <Typography sx={{display: 'block'}} variant="h12">Height: {chosenPokemon.height}</Typography>
                        <Typography sx={{display: 'block'}} variant="h12">Weight: {chosenPokemon.weight}</Typography>
                        <Typography sx={{display: 'block'}} variant="h12">Type: {chosenPokemon.types['0'].type.name[0].toUpperCase() + chosenPokemon.types['0'].type.name.slice(1)}</Typography>
                        <Typography sx={{display: 'block'}} variant="h12">Base Experience: {chosenPokemon.base_experience}</Typography>
                    </Paper>
                </Box>
            : null}

        </Box>
    )
}

export default PokemonForm;