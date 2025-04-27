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

  const prevIsPlayer1Active = useRef(true);

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
        if(prevIsPlayer1Active.current &&!isPlayer1Active) {
          prevIsPlayer1Active.current = false;
          setPlayer1Time(pt => pt + increment);     
        } else if (!prevIsPlayer1Active.current && isPlayer1Active){
          prevIsPlayer1Active.current = true;
          setPlayer2Time(pt => pt + increment);
        }
        const myInterval = setInterval(decrementTime, 1000);
        return () => clearInterval(myInterval);
      }
  }, [isPlayer1Active, gameStarted, gameEnded, increment]);

  const playGame = () => {
    if(!gameStarted) {
        setIsPlayer1Active(isPlayer1White);
        prevIsPlayer1Active.current = isPlayer1Active;
        setGameStarted(true);
    } else {
        setIsPlayer1Active(pa => !pa)
    }
  }

  return (
    <div style={{height: "100vh",textAlign: "center",display: "flex",flexDirection: "column"}}>
    <Player onClick={playGame} time={player1Time} isWhiteColor={isPlayer1White} />
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
    <Player onClick={playGame} time={player2Time} isWhiteColor={!isPlayer1White} />
    </div>
  );
}

export default GameScreen;
