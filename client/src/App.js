import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Selection from "./components/Selection/Selection"
import GearDisplay from "./components/GearDisplay/GearDisplay"
import { BrowserRouter, Route, Link } from "react-router-dom";
import MainSelector from "./components/MainSelector/MainSelector"

const App = () => {
  
  return (
    <div className="App">
      <Header/>
      <MainSelector/>
    </div>
  );
}

export default App;