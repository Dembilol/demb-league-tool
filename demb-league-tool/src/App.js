import React, { useState, useEffect } from "react";
import { Client } from "riot-api-client";
import axios from "axios";
import ChampionList from "./Champion";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    /* Test */
    <div className="App">
      <h1>test</h1>
      <ChampionList/>
    </div>
    
  );
}

export default App;
