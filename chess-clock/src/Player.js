import React from "react";

import "./App.css";

function Player({ time, onClick, isWhiteColor }) {
  let bgColor;
  if (isWhiteColor) {
    bgColor = "white";
  } else {
    bgColor = "black";
  }
  return (
    <div
      style={{
        color: "green",
        backgroundColor: bgColor,
      }}
      onClick={onClick}
    >
      {time}
    </div>
  );
}
export default Player;
