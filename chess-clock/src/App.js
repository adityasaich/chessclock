import React, { useState } from "react";

import './App.css';
import ConfigScreen from './ConfigScreen';
import GameScreen from './GameScreen';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [time, setTime] = useState(15);
  const [increment, setIncrement] = useState(5);
  const [soundOn, setSoundOn] = useState(true);
  const [vibrateOn, setVibrateOn] = useState(true);

  const startGame = (time,increment,soundOn,vibrateOn) => {
    setTime(time);
    setIncrement(increment);
    setGameStarted(true);
  }

  return (
      <div>
          { gameStarted ? <GameScreen time={time} increment={increment} soundOn={soundOn} vibrateOn={vibrateOn}/> : <ConfigScreen onStart={startGame} soundOn={soundOn} setSoundOn={setSoundOn} vibrateOn={vibrateOn} setVibrateOn={setVibrateOn}/> }      
      </div>
  )
}

export default App;
