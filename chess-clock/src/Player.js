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
        flex: "1 1 0",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
        <div  style = {{height: "100%", flex:"1 1 0"}}>
      <h1>
        {time}
      </h1>
      </div>
    </div>
  );
}
export default Player;
