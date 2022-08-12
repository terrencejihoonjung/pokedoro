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
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me")
      .then(r => {
        if (r.ok) {
          r.json().then(user => {
            setUser(user)
          })
        } else {
          navigate("/")
        }
      })
  }, [])

  return (
      <Box>
        <NavBar user={user} />
    
        <Routes>
          {user ? 
          <>
            <Route path="/choose-pokemon" element={<ChoosePokemon />} />
            <Route path="/pokeboard" element={<Pokeboard />} />
            <Route path="/pokestore" element={<Pokestore />} />
            <Route path="/profile" element={<Profile onLogout={setUser} />} />
          </> :
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={setUser} />} />
            <Route path="/signup" element={<Signup onLogin={setUser} />} />
            <Route path="/about" element={<About />} />
          </>
          }
        </Routes>
        
      </Box>
  );
}

export default App;