import { Box, Toolbar, IconButton, SwipeableDrawer, List, ListItem, ListItemText, Grow } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CatchingPokemon, Menu } from '@mui/icons-material';

function NavBar() {
    const [open, setOpen] = useState(false);

    function handleMenu() {
        setOpen(open => !open)
    }

    return (
        <Toolbar position="sticky" sx={{
            backgroundColor: "secondary.main",
            justifyContent: "space-between",
        }}> 
            <IconButton href="/">
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
                transitionDuration={{enter: 500, exit: 1000}}
            >    
                <Box sx={{backgroundColor: "secondary.main", height:'100%'}}>

                    <List sx={{width: 250 }} >
                        <Grow in={open} {...(open ? { timeout: 1000 } : {timeout: 2600})} >
                            <Link to="/login" style={{textDecoration: "none"}} >
                                <ListItem button onClick={handleMenu} > 
                                    <ListItemText primary={'Login'} sx={{color: 'primary.main' }} />
                                </ListItem>
                            </Link>
                        </Grow>

                        <Grow in={open} {...(open ? { timeout: 1800 } : {timeout: 1800})} >
                            <Link to="/signup" style={{textDecoration: "none"}} >
                                <ListItem button onClick={handleMenu} > 
                                    <ListItemText primary={'Signup'} sx={{color: 'primary.main' }} />
                                </ListItem>
                            </Link>
                        </Grow>

                        <Grow in={open} {...(open ? { timeout: 2600 } : {timeout: 1000})} >
                            <Link to="/about" style={{textDecoration: "none"}} >
                                <ListItem button onClick={handleMenu} > 
                                    <ListItemText primary={'About'} sx={{color: 'primary.main' }} />
                                </ListItem>
                            </Link>
                        </Grow>
                        
                    </List>

                </Box>

            </SwipeableDrawer>

        </Toolbar>
    )
}

export default NavBar;