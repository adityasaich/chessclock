import React, {useState, useEffect, useRef} from "react";
import "./App.css";
import Player from './Player'

function  GameScreen({time,increment}) {
  const [isPlayer1White, setIsPlayer1White] = useState(true);
  const [isPlayer1Active, setIsPlayer1Active] = useState(true);
  const [player1Time, setPlayer1Time] = useState(time * 60);
  const [player2Time, setPlayer2Time] = useState(time * 60);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  
  const player1ActiveRef = useRef(isPlayer1Active);
  const player1TimeRef = useRef(player1Time);
  const player2TimeRef = useRef(player2Time);
  const gameStartedRef = useRef(gameStarted);
  const intervalTimeRef = useRef(null);
  
  const setPlayer1ActiveAndRef = (active) => {
    player1ActiveRef.current = active;
    setIsPlayer1Active(active);
  }

  const setGameStartedAndRef = (started) => {
    gameStartedRef.current = started;
    setGameStarted(started);
  }

  const setPlayer1TimeAndRef = (time) => {
    player1TimeRef.current = time;
    setPlayer1Time(time);
  }

  const setPlayer2TimeAndRef = (time) => {
    player2TimeRef.current = time;
    setPlayer2Time(time);
  }

  const timer = () => {
    if(player1TimeRef.current === 0 || player2TimeRef.current === 0) {
      setGameEnded(true);
      clearInterval(intervalTimeRef.current);
    } else {
      if(player1ActiveRef.current) {
          setPlayer1TimeAndRef(player1TimeRef.current - 1);
      } else {
          setPlayer2TimeAndRef(player2TimeRef.current - 1);
      }
    }
  }

  let startGame = () =>  {
      intervalTimeRef.current = setInterval(timer, 1000);
  };

  const handlePlayerMove = () => {
    if(!gameEnded) {
      if(!gameStarted) {
          setPlayer1ActiveAndRef(isPlayer1White);
          setGameStartedAndRef(true);
          startGame();
      } else {
        if(isPlayer1Active) {
            setPlayer1TimeAndRef(player1TimeRef.current + increment);
        } else {
            setPlayer2TimeAndRef(player2TimeRef.current + increment);
        }
        setPlayer1ActiveAndRef(!isPlayer1Active)
      }
    }
  }


  const swapPlayers = () => {
    setIsPlayer1White((p1White) => !p1White);
  }

  return (
    <div style={{height: "100vh",textAlign: "center",display: "flex",flexDirection: "column"}}>
    <Player onClick={handlePlayerMove} time={player1Time} isWhiteColor={isPlayer1White} />
    { !gameStarted &&
      <div
        onClick={swapPlayers}
        style = {{
          backgroundColor: "#4CAF50",
          height: "10vh"
        }}
      >
        <h1 style = {{
          color: "#FFFFFF",
        }}> Swap White And Black</h1>
      </div> }
    <Player onClick={handlePlayerMove} time={player2Time} isWhiteColor={!isPlayer1White} />
    </div>
  );
}

export default GameScreen;
