import { Box, Avatar, Alert, Typography, Grid, Paper, Button, Modal, TextField, List, ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FriendCard from "./FriendCard";
import PokemonProfileCard from "./PokemonProfileCard"; 

function Profile({ user, hasPokemon, pokemon, friends, setFriends }) {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [friendSearch, setFriendSearch] = useState("");
    const [allTrainers, setAllTrainers] = useState([]);
    const [friendRequests, setFriendRequests] = useState([]);
    const [errors, setErrors] = useState([]);

    if (!hasPokemon) {
        navigate("/choose-pokemon")
    }

    useEffect(() => {
        fetch("/friend_requests")
          .then(r => {
            if (r.ok) {
              r.json().then(requests => setFriendRequests(requests))
            }
          })
      }, [])

    function handleSearch(e) {
        setFriendSearch(e.target.value);

        if (e.target.value === "") {
            return;
        }
        
        fetch("/trainers").then(r => r.json()).then(trainers => setAllTrainers(trainers))
    }

    const filteredTrainers = allTrainers.filter(trainer => {
        if (trainer.username.toLowerCase().startsWith(friendSearch.toLowerCase()) && user.id !== trainer.id) {
            return true
        }
    })

    const filteredFriendRequests = friendRequests.filter(request => {
        if (request.receiver_id === user.id) {
            return true;
        } else {
            return false;
        }
    })

    const trainerFriends = friends.filter(friend => {
        if (friend.friend_a_id === user.id || friend.friend_b_id === user.id) {
            return true
        } else {
            return false
        }
    })

    function sendFriendRequest(trainer) {
        let out = false;

        friends.forEach(friend => {
            console.log(friend)
            if (friend.friend_b.id === trainer.id || friend.friend_a.id === trainer.id) {
                setErrors([])
                setErrors(errors => [...errors, "You are already friends with this trainer"])
                out = true;
            }
            
        })

        if (out === true) {
            return null;
        }

        fetch("/friend_requests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                requestor_id: user.id,
                receiver_id: trainer.id,
                request_sent: true
            })
        })
            .then(r => {
                if (r.ok) {
                    return;
                } else {
                    r.json().then(err => {
                        setErrors(err.errors)
                    })
                }
            })
    }

    function handleAcceptRequest(request) {
        fetch(`/friend_requests/${request.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

        // create friendship between users 
        fetch("/friendships", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                friend_a_id: user.id,
                friend_b_id: request.requestor.id
            })
        })
    }
    
    function handleRemoveRequest(request) {
        fetch(`/friend_requests/${request.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    function handleDeleteFriend(friend) {
        fetch(`/friendships/${friend.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
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
                            {user.username}'s profile
                        </Typography>
                    </Box>

                    <Paper sx={{height: 'auto', width: '30vw'}}>
                        <Box sx={{ p: 2, }}>
                            <Typography variant="h5" sx={{m:1}}>
                                Friend Requests
                            </Typography>

                            <List>
                               {filteredFriendRequests.map(request => {
                                return (
                                    <ListItem key={request.id} sx={{justifyContent: 'space-between'}}>
                                        <Typography variant="h7">
                                            {request.requestor.username}
                                        </Typography>
                                        <Box>
                                            <Button variant="contained" size="small" onClick={() => handleAcceptRequest(request)} >
                                                Accept
                                            </Button>

                                            <Button sx={{ml:'0.3vw'}} variant="contained" size="small" onClick={() => handleRemoveRequest(request)} >
                                                Remove
                                            </Button>
                                        </Box>
                                    </ListItem>
                                    )    
                                })} 
                            </List>
                            
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

                    <Paper sx={{height: 'auto', m:2}}>
                        <Box sx={{ p: 2, }}>
                            <Typography variant="h5" sx={{m:1}}>
                                Friends
                            </Typography>
                            
                            <Box sx={{p:1, width: 'auto', m:1, display: 'flex'}}>
                                {trainerFriends.map(friend => {
                                    if (friend.friend_a_id === user.id) {
                                        return <FriendCard key={friend.id} friend={friend.friend_b} handleDeleteFriend={handleDeleteFriend(friend)} />
                                    } else {
                                        return <FriendCard key={friend.id} friend={friend.friend_a} handleDeleteFriend={handleDeleteFriend(friend)} />
                                    }
                                })}
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

                                    <Box>
                                        {errors.map(error => {
                                            return <Alert size="small" sx={{mt:1, mb:1}} severity="error" key={error}>{error}</Alert>
                                        })}
                                    </Box>

                                    <List>
                                        {filteredTrainers.map(trainer => {
                                            return (
                                                <ListItem key={trainer.id} sx={{backgroundColor: 'secondary.main', borderRadius:'12px', p:2, mb:1, justifyContent: 'space-between'}}>
                                                    <Typography variant="h6">{trainer.username}</Typography>
                                                    <Button variant="contained" size="small" onClick={() => sendFriendRequest(trainer)}>
                                                        Send Friend Request
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
                        <Typography sx={{p:2}} variant="h5">Pokemon</Typography>
                        <Box sx={{ p: 2, display:'flex', gap:'2vw', overflow:'scroll', overflowY: 'hidden', height:'auto', width:'auto' }}>

                            {pokemon.map(pokemon => {
                                return (
                                    <PokemonProfileCard key={pokemon.id} pokemon={pokemon} />
                                )
                            })}
                            
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Profile;