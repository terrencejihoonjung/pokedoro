// client/src/components/App.js
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./Home";
import NavBar from "./NavBar";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About";
import ChoosePokemon from "./ChoosePokemon";
import Pokeboard from "./Pokeboard";
import Pokestore from "./Pokestore";
import Profile from "./Profile";

function App() {
  const [user, setUser] = useState(null);
  const [hasPokemon, setHasPokemon] = useState(false);
  const [friends, setFriends] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me")
      .then(r => {
        if (r.ok) {
          r.json().then(trainer => {
            setUser(trainer)
            setHasPokemon(trainer.has_pokemon)
            
          })
        } else {
          navigate("/")
        }
      })
  }, [])

  return (
      <Box>
        { (!user || (user && hasPokemon)) ? <NavBar user={user} onLogout={setUser} /> : null }
    
        <Routes>
          {user ? 
          <>
            <Route path="/choose-pokemon" element={<ChoosePokemon user={user} hasPokemon={hasPokemon} setHasPokemon={setHasPokemon} />} />
            <Route path="/pokeboard" element={<Pokeboard hasPokemon={hasPokemon} />} />
            <Route path="/pokestore" element={<Pokestore hasPokemon={hasPokemon} />} />
            <Route path="/profile" element={<Profile onLogout={setUser} user={user} hasPokemon={hasPokemon} friends={friends} setFriends={setFriends} />} />
          </> :
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={setUser} />} />
            <Route path="/signup" element={<Signup onLogin={setUser} hasPokemon={hasPokemon} />} />
            <Route path="/about" element={<About />} />
          </>
          }
        </Routes>
        
      </Box>
  );
}

export default App;