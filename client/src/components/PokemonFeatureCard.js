import { Box, Typography, Paper, Button } from "@mui/material";

function PokemonFeatureCard({ pokemon, handleAddPokemon }) {
    return (
        <Paper sx={{p:1, width: 'auto', height:'auto', p:6}}>
            <Typography sx={{display: 'block'}} variant="h5" fontWeight="fontWeightBold">{pokemon.name}</Typography>
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
            <Typography sx={{display: 'block'}} variant="h14">Height: {pokemon.height}</Typography>
            <Typography sx={{display: 'block'}} variant="h14">Weight: {pokemon.weight}</Typography>
            <Typography sx={{display: 'block'}} variant="h14">Type: {pokemon.types['0'].type.name}</Typography>
            <Typography sx={{display: 'block'}} variant="h14">Base Experience: {pokemon.base_experience}</Typography>

            <Button sx={{
                mt:'1vh',
                '&:focus': {
                    backgroundColor:'thirdGreen.main',
                    color:'secondary.main',
                    animation: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
                    '@keyframes shake': {
                        '10%, 90%':   { transform: 'translate3d(-1px, 0, 0)' },
                        '20%, 80%':  { transform: 'translate3d(2px, 0, 0)' },
                        '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
                        '40%, 60%': { transform: 'translate3d(4px, 0, 0)' }
                }
                }
               
            }}size="small" fullWidth variant="contained" onClick={() => handleAddPokemon(pokemon)} >Catch!</Button>
        </Paper>
    )
}

export default PokemonFeatureCard;