import React from "react";

import './App.css';

function Player({time,onClick}) {
    return (<div onClick={onClick}>{time}</div>)
}
export default Player;