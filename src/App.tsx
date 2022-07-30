import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="headerContainer">
        <h1>Guess The Word Game!</h1>
        <h3>Guess the word by typing the answer</h3>
      </div>

      <Link to='/main'><button >Start!</button></Link> 
    </div>
  );
}

export default App;
