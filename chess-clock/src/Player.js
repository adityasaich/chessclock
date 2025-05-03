import React,{useRef} from "react";

import "./App.css";
import moveSoundFile from "./Move.mp3";

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedSeconds = String(seconds).padStart(2, '0');
  return `${minutes}:${formattedSeconds}`;
}

function Player({ time, onClick, isWhiteColor, isActive, isPlayer1 }) {
  let bgColor;
  let color;
  if (isWhiteColor) {
    bgColor = "#F0F0F0";
    color = "#0057B8";
  } else {
    bgColor = "#202020";
    color = "#FFA500";
  }
  let textBgColor =  isActive ? (isWhiteColor ? "#FFFFFF" : "#000000") :  bgColor;
  let moveSound = useRef(new Audio(moveSoundFile));

  const handleTouchStart = () => {
    navigator.vibrate && navigator.vibrate(200);
    moveSound.current.play().catch(e => console.error(e))
  }

  let transform = isPlayer1 ? 'rotateX(180deg) scaleX(-1)'  : ''

  return (
    <div>

    <div
      style={{
        color: color,
        backgroundColor: bgColor,
        flex: "1 1 auto",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "45vh"
      }}
      onClick={onClick}
      onTouchStart={handleTouchStart}
    >
      <div style = {{flex:"1 1 0"}}>
      <h1 style={{"font-size": "15vh" , backgroundColor: textBgColor, padding: "0.2em", borderRadius : "0.2em" ,transform }}>
        {formatTime(time)}
      </h1>
      </div>
    </div>
    </div>
  );
}
export default Player;
