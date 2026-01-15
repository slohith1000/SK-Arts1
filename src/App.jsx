import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="App">
        <h1>Lohith S</h1>
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
