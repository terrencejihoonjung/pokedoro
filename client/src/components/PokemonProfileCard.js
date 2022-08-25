import { Box, Typography, Paper } from "@mui/material";

function PokemonProfileCard({ pokemon }) {
    return (
        <Paper sx={{p: 4, width: '12vw', height:'auto' }}>
            <Typography sx={{display: 'block'}} variant="h5" fontWeight="fontWeightBold">{pokemon.name}</Typography>
            <Box component="img" src={pokemon.image} sx={{
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
            <Typography sx={{display: 'block'}} variant="h12">Height: {pokemon.height}</Typography>
            <Typography sx={{display: 'block'}} variant="h12">Weight: {pokemon.weight}</Typography>
            <Typography sx={{display: 'block'}} variant="h12">Type: {pokemon.poketype}</Typography>
            <Typography sx={{display: 'block'}} variant="h12">Base Experience: {pokemon.base_experience}</Typography>
        </Paper>
    )
}

export default PokemonProfileCard;