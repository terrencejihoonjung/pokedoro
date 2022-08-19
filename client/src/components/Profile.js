import { Box, Avatar, Typography, Grid, Paper, Button, Modal, TextField, List, ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FriendCard from "./FriendCard";

function Profile({ user, hasPokemon, friends, setFriends }) {
    const navigate = useNavigate();
    const [open, setOpen] =useState(false);
    const [friendSearch, setFriendSearch] = useState("");
    const [allTrainers, setAllTrainers] = useState([]);

    if (!hasPokemon) {
        navigate("/choose-pokemon")
    }

    function handleSearch(e) {
        setFriendSearch(e.target.value);
        
        fetch("/trainers").then(r => r.json()).then(trainers => setAllTrainers(trainers))
    }

    const filteredTrainers = allTrainers.filter(trainer => {
        if (trainer.username.toLowerCase().startsWith(friendSearch.toLowerCase()) && user.id !== trainer.id) {
            return true
        }
    })

    function sendFriendRequest(trainer) {
        fetch("/friend_requests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                requestor_id: user.id,
                receiver_id: trainer.id
            })
        });
    }

    function sentRequest() {
        user.requestors.forEach(requestor => {
            if (requestor.id === user.id) {
                return true
            }
        })
        return false
    }

    function handleClose() {
        setOpen(false);
        setFriendSearch("");
        setAllTrainers([]);
    }

    return (
        <Box>
            <Grid container sx={{ p: 12 }} >
                <Grid item xs={5} sx={{}}>
                    <Avatar
                        alt={user.username}
                        src={""}
                        sx={{ width: 250, height: 250 }}
                    >
                        {user.username}
                    </Avatar>

                    <Box sx={{pt: 4, pb: 4}}>
                        <Typography variant="h6">
                            {user.username}
                        </Typography>
                        <Typography variant="h8"> 
                            This is extra user information
                        </Typography>
                    </Box>

                    <Paper sx={{height: 'auto', width: '20vw'}}>
                        <Box sx={{ p: 2, }}>
                            <Typography variant="h5" sx={{m:1}}>
                                Friend Requests
                            </Typography>
                            {/* <List>
                               {user.friend_requests_as_receiver.map(request => {
                                return <ListItem>{request}</ListItem>
                                })} 
                            </List> */}
                            <Button sx={{m:1}} onClick={() => console.log(user)}>
                                Friend Requests
                            </Button>
                            
                        </Box>
                    </Paper>
                
                </Grid>

                <Grid item xs={7} sx={{}}>
                    <Paper sx={{height: '35vh', m:2}}>
                        <Box sx={{ p: 4 }}>
                            <Typography variant="h5">
                                About Me
                            </Typography>
                        </Box>
                    </Paper>

                    <Paper sx={{height: '25vh', m:2}}>
                        <Box sx={{ p: 2, }}>
                            <Typography variant="h5" sx={{m:1}}>
                                Friends
                            </Typography>
                            
                            <Box sx={{p:1, width: 'auto', m:1}}>
                                <FriendCard user={user} />
                            </Box>

                            <Button variant="contained" size="small" onClick={() => setOpen(true)} sx={{m:1}}>
                                Add a Friend
                            </Button>

                            <Modal open={open} onClose={handleClose}>
                                <Box sx={{p:4, mt:'4vh'}}>
                                    <Typography variant="h5" fontWeight="fontWeightBold" color="secondary.main">Search for Friend</Typography>
                                    <TextField id="search-friend" label="Find Friend" variant="standard" fullWidth
                                        value={friendSearch} onChange={e => handleSearch(e)} 
                                    />

                                    <List>
                                        {filteredTrainers.map(trainer => {
                                            return (
                                                <ListItem key={trainer.id} sx={{backgroundColor: 'secondary.main', borderRadius:'12px', p:2, mb:1, justifyContent: 'space-between'}}>
                                                    <Typography variant="h6">{trainer.username}</Typography>
                                                    <Button variant="contained" size="small" onClick={() => sendFriendRequest(trainer)}>
                                                        {sentRequest() ? "Remove Request"
                                                        : "Send Friend Request"}
                                                    </Button>
                                                </ListItem>
                                            )
                                        })}
                                    </List>
                                </Box>
                            </Modal>
                            
                        </Box>
                    </Paper>

                    <Paper sx={{m:2}}>
                        <Box sx={{ p: 2 }}>
                            <Typography variant="h5">Pokemon</Typography>
                            <Paper sx={{p: 6 }}>
                                <Typography sx={{display: 'block'}} variant="h5" fontWeight="fontWeightBold">{user.pokemons[0].name}</Typography>
                                <Box component="img" src={user.pokemons[0].image} sx={{
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
                                <Typography sx={{display: 'block'}} variant="h12">Height: {user.pokemons[0].height}</Typography>
                                <Typography sx={{display: 'block'}} variant="h12">Weight: {user.pokemons[0].weight}</Typography>
                                <Typography sx={{display: 'block'}} variant="h12">Type: {user.pokemons[0].poketype}</Typography>
                                <Typography sx={{display: 'block'}} variant="h12">Base Experience: {user.pokemons[0].base_experience}</Typography>
                            </Paper>
                            
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Profile;