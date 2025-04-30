import React,{useRef} from "react";

import "./App.css";

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedSeconds = String(seconds).padStart(2, '0');
  return `${minutes}:${formattedSeconds}`;
}

function Player({ time, onClick, isWhiteColor, isActive }) {
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
  const audioRef = useRef(new Audio('/Move.mp3'));


  const handleTouchStart = () => {
    navigator.vibrate && navigator.vibrate(200);
    audioRef?.current.play().catch((e) => {
      console.error('Audio playback failed:', e);
    });
  }

  return (
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
      <h1 style={{"font-size": "15vh" , backgroundColor: textBgColor, padding: "0.2em", borderRadius : "0.2em"}}>
        {formatTime(time)}
      </h1>
      </div>
    </div>
  );
}
export default Player;
