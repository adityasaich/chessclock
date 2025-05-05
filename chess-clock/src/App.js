import React, { useState } from "react";

import './App.css';
import ConfigScreen from './ConfigScreen';
import GameScreen from './GameScreen';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [time1, setTime1] = useState(10);
  const [time2, setTime2] = useState(10);
  const [increment, setIncrement] = useState(5);
  const [soundOn, setSoundOn] = useState(true);
  const [vibrateOn, setVibrateOn] = useState(true);

  const startGame = (time1,time2,increment) => {
    setTime1(time1);
    setTime2(time2);
    setIncrement(increment);
    setGameStarted(true);
  }

  return (
      <div>
          { gameStarted ? <GameScreen time1={time1} time2={time2} increment={increment} soundOn={soundOn} vibrateOn={vibrateOn}/> : <ConfigScreen onStart={startGame} soundOn={soundOn} setSoundOn={setSoundOn} vibrateOn={vibrateOn} setVibrateOn={setVibrateOn}/> }      
      </div>
  )
}

export default App;
