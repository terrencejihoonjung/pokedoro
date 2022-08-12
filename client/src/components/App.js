// client/src/components/App.js
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Home from "./Home";
import NavBar from "./NavBar";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About";
import ChoosePokemon from "./ChoosePokemon"

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me")
      .then(r => {
        if (r.ok) {
          r.json.then(user => {
            setUser(user)
          })
        }
      })
  }, [])

  return (
      <Box>
        <NavBar/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/signup" element={<Signup onLogin={setUser} />} />
          <Route path="/about" element={<About />} />

          <Route path="/choose-pokemon" element={<ChoosePokemon />} />
        </Routes>
        
      </Box>
  );
}

export default App;