import { Box, Grid, Paper, Typography } from "@mui/material";

function PokemonCard({ pokemon, setChosenPokemon, setCurrentMessage, play }) {
    return (
        <Grid item xs={4} sx={{}}>
            <Paper onClick={e => {
                setChosenPokemon(pokemon)
                setCurrentMessage(currentMessage => currentMessage + 1)
                play()
            }} sx={{
                backgroundColor: 'secondary.main', color: 'primary.main', textAlign:'center',
                border: '2px solid whitesmoke', borderRadius: '24px', height: '12vh', width: '12vw', p: 12,
                '&:hover': {
                    color:'thirdGreen.main'
                }
            }}>
                <Typography variant="h5" fontWeight="fontWeightBold">{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</Typography>
                <Box component="img" src={pokemon.sprites.front_default} />
            </Paper>
        </Grid>
    )
}

export default PokemonCard;