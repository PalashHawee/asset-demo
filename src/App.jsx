import { useState } from "react";

// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />

        {/* <Home /> */}
      </Routes>
    </Router>
  );
}

export default App;
