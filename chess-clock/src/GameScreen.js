import React, {useState, useRef} from "react";
import "./App.css";
import Player from './Player'
import gameover from './gameover.mp3'

function  GameScreen({time,increment}) {
  const [isPlayer1White, setIsPlayer1White] = useState(true);
  const [isPlayer1Active, setIsPlayer1Active] = useState(true);
  const [player1Time, setPlayer1Time] = useState(time * 60);
  const [player2Time, setPlayer2Time] = useState(time * 60);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  
  const player1TimeRef = useRef(player1Time);
  const player2TimeRef = useRef(player2Time);
  const gameStartedRef = useRef(gameStarted);
  const intervalTimeRef = useRef(null);
  
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

  const timer = (isP1Active) => {
    if(player1TimeRef.current === 0 || player2TimeRef.current === 0) {
      setGameEnded(true);
      clearInterval(intervalTimeRef.current);
      let gameoveraudio = new Audio(gameover);
      gameoveraudio.play().catch(e => console.error(e));
    } else {
      if(isP1Active) {
          setPlayer1TimeAndRef(player1TimeRef.current - 1);
      } else {
          setPlayer2TimeAndRef(player2TimeRef.current - 1);
      }
    }
  }

  const handlePlayerMove = () => {
    if(!gameEnded) {
      if(!gameStarted) {
        setIsPlayer1Active(isPlayer1White);
          setGameStartedAndRef(true);
          intervalTimeRef.current = setInterval(timer, 1000, isPlayer1White);
      } else {
        clearInterval(intervalTimeRef.current);
        if(isPlayer1Active) {
            setPlayer1TimeAndRef(player1TimeRef.current + increment);
        } else {
            setPlayer2TimeAndRef(player2TimeRef.current + increment);
        }
        setIsPlayer1Active(!isPlayer1Active);
        intervalTimeRef.current = setInterval(timer, 1000, !isPlayer1Active);
      }
    }
  }


  const swapPlayers = () => {
    setIsPlayer1White((p1White) => !p1White);
  }

  return (
    <div style={{height: "100vh",textAlign: "center",display: "flex",flexDirection: "column"}}>
    <Player onClick={handlePlayerMove} time={player1Time} isWhiteColor={isPlayer1White} isActive={isPlayer1Active} isPlayer1={true} />
    { !gameStarted &&
      <div
        onClick={swapPlayers}
        style = {{
          backgroundColor: "#4CAF50",
          height: "10vh"
        }}
      >
        <h2 style = {{
          color: "#FFFFFF",
        }}> Swap White And Black
        </h2>
      </div> }
    <Player onClick={handlePlayerMove} time={player2Time} isWhiteColor={!isPlayer1White} isActive={!isPlayer1Active} isPlayer1={false}/>
    </div>
  );
}

export default GameScreen;
