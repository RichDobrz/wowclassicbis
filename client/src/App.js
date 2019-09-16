import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Selection from "./components/Selection/Selection"
import GearDisplay from "./components/GearDisplay/GearDisplay"
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Selection/>
      <GearDisplay/>
    </div>
  );
}

export default App;