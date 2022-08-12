import { Box, Grid, Button } from "@mui/material";
import { useState } from "react";
import { Whatshot } from '@mui/icons-material';

const types = [
    "Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Fighting", "Poison", "Flying", 
    "Ground", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"
]

const stats = [
    "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed"
]

function PokemonForm({ currentMessage }) {
    const [type, setType] = useState("");
    const [stat, setStat] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [pokemonName, setPokemonName] = useState("");

    return (
        <Box sx={{width:'100vw', height:'74vh', display:'flex', justifyContent:'center', alignItem: 'center'}}>
            {currentMessage === 4 ?
                <Box component="form" handleSubmit={e => setType(e.target.value)} sx={{margin:'auto'}}>
                    <Grid container rowSpacing={18} columnSpacing={7} >
                        {types.map(type => {
                            return (
                                <Grid item key={type} xs={2} sx={{textAlign: 'center'}}>
                                    <Button variant="contained" type="submit" sx={{
                                        backgroundColor: 'black', color: 'secondary.main',
                                        p: 2, borderRadius: '12px', width: '5vw'
                                    }}>
                                        {type}
                                    </Button>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            : null}

            {currentMessage === 5 ?
                <Box component="form" handleSubmit={e => setStat(e.target.value)} sx={{margin:'auto'}}>
                    <Grid container rowSpacing={18} columnSpacing={7} >
                        {stats.map(stat => {
                            return (
                                <Grid item key={stat} xs={4} sx={{textAlign: 'center'}}>
                                    <Button variant="contained" type="submit" sx={{
                                        backgroundColor: 'black', color: 'secondary.main',
                                        p: 2, borderRadius: '12px', width: '7vw'
                                    }}>
                                        {stat}
                                    </Button>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            : null}

            {currentMessage === 6 ?
                <Box component="form" handleSubmit={e => setHeight(e.target.value)} sx={{margin:'auto'}}>
                    <Grid container>
                        <Grid item key={stat} xs={12} sx={{textAlign: 'center'}}>
                            <Button variant="contained" type="submit" sx={{
                                backgroundColor: 'black', color: 'secondary.main',
                                p: 2, borderRadius: '12px', width: '5vw', m:8
                            }}>
                                Tall
                            </Button>
                            <Button variant="contained" type="submit" sx={{
                                backgroundColor: 'black', color: 'secondary.main',
                                p: 2, borderRadius: '12px', width: '5vw', m:8
                            }}>
                                Short
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            : null}

            {currentMessage === 7 ?
                <Box component="form" handleSubmit={e => setWeight(e.target.value)} sx={{margin:'auto'}}>
                    <Grid container>
                        <Grid item key={stat} xs={12} sx={{textAlign: 'center'}}>
                            <Button variant="contained" type="submit" sx={{
                                backgroundColor: 'black', color: 'secondary.main',
                                p: 2, borderRadius: '12px', width: '5vw', m:8
                            }}>
                                Heavy
                            </Button>
                            <Button variant="contained" type="submit" sx={{
                                backgroundColor: 'black', color: 'secondary.main',
                                p: 2, borderRadius: '12px', width: '5vw', m:8
                            }}>
                                Light
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            : null}

            {currentMessage === 10 ?
                'this is name form'
            : null}

            {currentMessage === 13 ?
                'POKEMON'
            : null}
        </Box>
    )
}

export default PokemonForm;