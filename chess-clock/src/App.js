import React, { useState } from "react";

import './App.css';
import ConfigScreen from './ConfigScreen';
import GameScreen from './GameScreen';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [time, setTime] = useState(15);
  const [increment, setIncrement] = useState(5);

  const startGame = (time,increment) => {
    setTime(time);
    setIncrement(increment);
    setGameStarted(true);
  }

  return (
      <div>
        <GameScreen time={0.2} increment={5} />         
      </div>
  )
}

export default App;
