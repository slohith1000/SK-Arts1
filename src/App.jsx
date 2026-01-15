import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import Paintings from "./pages/paintings";
import Exhibitions from "./pages/Exhibitions";
import AvailableArt from "./pages/AvailableArt";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./styles.css";


import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="App">
        <h1>Lohith</h1>
    </div>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="/available" element={<AvailableArt />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
