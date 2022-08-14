import { Box, Grid, Paper, Typography } from "@mui/material";

function PokemonCard({ pokemon, setChosenPokemon, setCurrentMessage, play }) {
    return (
        <Grid item xs={4} sx={{display: 'flex', justifyContent:'center' }}>
            <Paper onClick={e => {
                setChosenPokemon(pokemon)
                setCurrentMessage(currentMessage => currentMessage + 1)
                play()
            }} sx={{
                backgroundColor: 'primary.main', color: 'secondary.main', textAlign:'center',
                border: '2px solid whitesmoke', borderRadius: '24px', height: '12vh', width: '12vw', p: 12,

                '&:hover': {
                    color:'primary.main',
                    backgroundColor: 'secondary.main'
                }, transition: '0.5s',

                display:'flex', justifyContent: 'center', alignItems: 'center'
            }}>
            <Box>
                <Typography variant="h5" fontWeight="fontWeightBold">{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</Typography>
                <Box component="img" src={pokemon.sprites.front_default} sx={{
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
            </Box>
                
            </Paper>
        </Grid>
    )
}

export default PokemonCard;