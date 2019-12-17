import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Selection from "./components/Selection/Selection"
import GearDisplay from "./components/GearDisplay/GearDisplay"
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => {
  // const [chosenClass, setClass] = useState(null)
  // const [chosenPhase, setPhase] = useState(null)
  return (
    <div className="App">
      <Header/>
      <GearDisplay/>
    </div>
  );
}

export default App;