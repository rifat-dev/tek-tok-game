import React from 'react';
import './App.css';
import Game from './Game/game'

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <h1>Game</h1>
        <Game/>
      </div>
    );
  }
}

export default App;
