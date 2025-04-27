import React, {useState, useEffect, useRef} from "react";
import "./App.css";
import Player from './Player'

function  GameScreen({time,increment}) {
  const [isPlayer1White, setIsPlayer1White] = useState(true);
  const [isPlayer1Active, setIsPlayer1Active] = useState(true);
  const [player1Time, setPlayer1Time] = useState(time * 60);
  const [player2Time, setPlayer2Time] = useState(time * 60);
  const [gameStarted, setGameStarted] = useState(false);
  
  const player1ActiveRef = useRef(isPlayer1Active);
  const player1TimeRef = useRef(player1Time);
  const player2TimeRef = useRef(player2Time);
  const intervalTimeRef = useRef(null);
  
  const setPlayer1Active = (active) => {
    player1ActiveRef.current = active;
    setIsPlayer1Active(active);
  }

  const setPlayerTime1 = (time) => {
    player1TimeRef.current = time;
    setPlayer1Time(time);
  }

  const setPlayerTime2 = (time) => {
    player2TimeRef.current = time;
    setPlayer2Time(time);
  }

  const timer = () => {
    if(player1ActiveRef.current) {
        setPlayerTime1(player1TimeRef.current - 1);
    } else {
        setPlayerTime2(player2TimeRef.current - 1);
    }
  }

  let startGame = () =>  {
      intervalTimeRef.current = setInterval(timer, 1000);
  };

  const handlePlayerMove = () => {
    if(!gameStarted) {
        setPlayer1Active(isPlayer1White);
        setGameStarted(true);
        startGame();
    } else {
        setPlayer1Active(!isPlayer1Active)
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
          flex: "1 1 0",
          backgroundColor: "yellow"
        }}
      >
        <h1 style = {{
          color: "red",
          height: "100%"
        }}> Swap White And Black</h1>
      </div> }
    <Player onClick={handlePlayerMove} time={player2Time} isWhiteColor={!isPlayer1White} />
    </div>
  );
}

export default GameScreen;
