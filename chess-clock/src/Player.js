import React from "react";

import "./App.css";

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedSeconds = String(seconds).padStart(2, '0');
  return `${minutes}:${formattedSeconds}`;
}

function Player({ time, onClick, isWhiteColor }) {
  let bgColor;
  let color;
  if (isWhiteColor) {
    bgColor = "#F0F0F0";
    color = "#0057B8";
  } else {
    bgColor = "#202020";
    color = "#FFA500";
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
    >
        <div style = {{flex:"1 1 0"}}>
      <h1 style={{"font-size": "100px"}}>
        {formatTime(time)}
      </h1>
      </div>
    </div>
  );
}
export default Player;
