import React, {useState} from "react";
import "./App.css";
import Player from './Player'

function GameScreen({time,increment}) {
  const [isPlayer1White, setIsPlayer1White] = useState(true);
  const [isPlayer1Active, setIsPlayer1Active] = useState(true);
  const [player1Time, setPlayer1Time] = useState(time * 60);
  const [player2Time, setPlayer2Time] = useState(time * 60);
  const [gameStarted, setGameStarted] = useState(false);
  let intervalId;

  const swapPlayers = () => {
    setIsPlayer1White((p1White) => !p1White);
  }

  const endGame = () => {
    intervalId ?? clearInterval(intervalId);
  }

  const decrementTime = () => {
    if(player1Time === 0 && player2Time === 0) {
        endGame();
    }
    if(isPlayer1Active) {
        setPlayer1Time(player1Time - 1);
    } else {
        setPlayer2Time(player2Time - 1);
    }
  }

  const playGame = () => {
    if(!gameStarted) {
        setIsPlayer1Active(isPlayer1White);
        setGameStarted(true);
        intervalId = setInterval(decrementTime, 1000);
    } else {
        setIsPlayer1Active(!isPlayer1Active)
    }
  }

  return (
    <div>
    <Player onClick={playGame} time={player1Time} />
    { gameStarted ?   <></> : <div class="swap" onClick={swapPlayers}>Swap</div> }
    <Player onClick={playGame} time={player2Time} />
    </div>
  );
}

export default GameScreen;
