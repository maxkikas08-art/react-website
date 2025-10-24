import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Characters from "./Components/Characters.jsx";
import Clips from "./Components/Clips.jsx";
import Covers from "./Components/Covers.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/clips" element={<Clips />} />
        <Route path="/covers" element={<Covers />} />
      </Routes>
    </Router>
  );
}

export default App;
