import { Box, Grid, IconButton, TextField, Paper } from "@mui/material";
import { Grass, Water, LocalFireDepartment } from '@mui/icons-material';
import PokemonCard from "./PokemonCard";

function PokemonForm({ currentMessage, setChosenType, setChosenPokemon, starterPokemon, pokemonName, setPokemonName, setCurrentMessage, play}) {

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
                    <Grid container rowSpacing={18} columnSpacing={18} >
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
                'POKEMON'
            : null}

        </Box>
    )
}

export default PokemonForm;