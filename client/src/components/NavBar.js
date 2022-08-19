import { Box, AppBar, Toolbar, IconButton, SwipeableDrawer, List, ListItem, ListItemText, Grow } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CatchingPokemon, Menu } from '@mui/icons-material';

function NavBar({ user, onLogout }) {
    const [open, setOpen] = useState(false);

    function handleMenu() {
        setOpen(open => !open)
    }

    async function handleLogout() {
        const response = await fetch("/logout", {
            method: "DELETE"
        });

        if (response.ok) {
            setOpen(open => !open)
            onLogout(null)
            window.location.reload();
        }
    }

    return (
        <AppBar position="sticky" elevation={0} >
            <Toolbar  sx={{
                backgroundColor: "secondary.main",
                justifyContent: "space-between",
            }}> 
                <IconButton href={user ? "/pokeboard" : "/"}>
                    <CatchingPokemon sx={{
                        fontSize: 28,
                        color: "primary.main"
                    }}/>
                </IconButton>
                
                <IconButton 
                    onClick={handleMenu} 
                    edge="start"
                    color="primary"
                    aria-label="open drawer"
                >
                    <Menu sx={{ fontSize: 36 }} />
                </IconButton>

                <SwipeableDrawer
                    anchor="right"
                    open={open}
                    onClose={handleMenu}
                    onOpen={handleMenu}
                    BackdropProps={{ invisible: true }}
                    transitionDuration={{enter: 500, exit: 500}}
                >    
                    <Box sx={{backgroundColor: "secondary.main", height:'100%'}}>

                        <List sx={{width: 250 }} >
                            {user ?
                            <>
                                <Grow in={open} {...(open ? { timeout: 300 } : {timeout: 1000})} >
                                    <Link to="/pokeboard" style={{textDecoration: "none"}} >
                                        <ListItem button onClick={handleMenu} > 
                                            <ListItemText primary={'PokéBoard'} sx={{color: 'primary.main' }} />
                                        </ListItem>
                                    </Link>
                                </Grow>

                                <Grow in={open} {...(open ? { timeout: 500 } : {timeout: 800})} >
                                    <Link to="/pokestore" style={{textDecoration: "none"}} >
                                        <ListItem button onClick={handleMenu} > 
                                            <ListItemText primary={'PokéStore'} sx={{color: 'primary.main' }} />
                                        </ListItem>
                                    </Link>
                                </Grow>

                                <Grow in={open} {...(open ? { timeout: 800 } : {timeout: 500})} >
                                    <Link to="/profile" style={{textDecoration: "none"}} >
                                        <ListItem button onClick={handleMenu} > 
                                            <ListItemText primary={'Profile'} sx={{color: 'primary.main' }} />
                                        </ListItem>
                                    </Link>
                                </Grow>

                                <Grow in={open} {...(open ? { timeout: 800 } : {timeout: 500})} >
                                    
                                    <ListItem button onClick={handleLogout} > 
                                        <ListItemText primary={'Logout'} sx={{color: 'primary.main' }} />
                                    </ListItem>
                                    
                                </Grow>
                            </>
                            :
                            <>
                                <Grow in={open} {...(open ? { timeout: 300 } : {timeout: 1000})} >
                                    <Link to="/" style={{textDecoration: "none"}} >
                                        <ListItem button onClick={handleMenu} > 
                                            <ListItemText primary={'Home'} sx={{color: 'primary.main' }} />
                                        </ListItem>
                                    </Link>
                                </Grow>

                                <Grow in={open} {...(open ? { timeout: 500 } : {timeout: 800})} >
                                    <Link to="/login" style={{textDecoration: "none"}} >
                                        <ListItem button onClick={handleMenu} > 
                                            <ListItemText primary={'Login'} sx={{color: 'primary.main' }} />
                                        </ListItem>
                                    </Link>
                                </Grow>

                                <Grow in={open} {...(open ? { timeout: 800 } : {timeout: 500})} >
                                    <Link to="/signup" style={{textDecoration: "none"}} >
                                        <ListItem button onClick={handleMenu} > 
                                            <ListItemText primary={'Signup'} sx={{color: 'primary.main' }} />
                                        </ListItem>
                                    </Link>
                                </Grow>

                                <Grow in={open} {...(open ? { timeout: 1000 } : {timeout: 300})} >
                                    <Link to="/about" style={{textDecoration: "none"}} >
                                        <ListItem button onClick={handleMenu} > 
                                            <ListItemText primary={'About'} sx={{color: 'primary.main' }} />
                                        </ListItem>
                                    </Link>
                                </Grow>
                            </>
                            }       
                        </List>

                    </Box>

                </SwipeableDrawer>
            </Toolbar>
        </AppBar>
        
    )
}

export default NavBar;