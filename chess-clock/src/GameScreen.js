import React, {useState, useEffect} from "react";
import "./App.css";
import Player from './Player'

function  GameScreen({time,increment}) {
  const [isPlayer1White, setIsPlayer1White] = useState(true);
  const [isPlayer1Active, setIsPlayer1Active] = useState(true);
  const [player1Time, setPlayer1Time] = useState(time * 60);
  const [player2Time, setPlayer2Time] = useState(time * 60);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  const swapPlayers = () => {
    setIsPlayer1White((p1White) => !p1White);
  }

  useEffect(() => {
    if(player2Time === 0 || player1Time === 0){
        setGameEnded(true);
    }
  }, [player2Time, player1Time])

  useEffect(() => {
    
    const decrementTime = () => {
        if(isPlayer1Active) {
            setPlayer1Time(pt => pt - 1);
        } else {
            setPlayer2Time(pt => pt - 1);
        }
      }
       
      if(gameStarted && !gameEnded){
        const myInterval = setInterval(decrementTime, 1000);
        return () => clearInterval(myInterval);
      }
  }, [isPlayer1Active, gameStarted, gameEnded]);

  const playGame = () => {
    if(!gameStarted) {
        setIsPlayer1Active(isPlayer1White);
        setGameStarted(true);
    } else {
        setIsPlayer1Active(pa => !pa)
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
