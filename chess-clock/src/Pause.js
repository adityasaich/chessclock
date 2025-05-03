import React from "react";

import './App.css';

function Pause({onClick,paused}) {
  let char = '⏸️';
  if(paused) {
    char = '▶️'
  }
  return (
    <div style={{position:'absolute',right:0}}>
        <button onClick={onClick} style={{"font-size": "7vh", margin : "5px", width: "20vw","font-weight":2000}}>{char}</button>
    </div>
  )
}

export default Pause;
