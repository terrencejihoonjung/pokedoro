// client/src/components/App.js
import { Routes, Route } from "react-router-dom";
import { Box, Fade } from "@mui/material";
import Home from "./Home";
import NavBar from "./NavBar";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About";

function App() {

  return (
      <Box>
        <NavBar/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </Box>
  );
}

export default App;