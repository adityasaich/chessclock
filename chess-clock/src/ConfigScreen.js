import "./App.css";
import React from "react";


function ConfigScreen({onStart,soundOn,setSoundOn,vibrateOn,setVibrateOn}) {


  const startGame = () => {
    let time1InMinutes = document.getElementById('timerInput1').value || 10;
    time1InMinutes = parseInt(time1InMinutes, 10);
    let time2InMinutes = document.getElementById('timerInput2').value || 10;
    time2InMinutes = parseInt(time2InMinutes, 10)
    let incTime = document.getElementById('incTime').value || 5;
    incTime = parseInt(incTime, 10)
    onStart(time1InMinutes,time2InMinutes, incTime);
  }

  const handlePlayer1TimeChange = (event) => {
    event.target.value && (document.getElementById('timerInput2').value = event.target.value)
  }

  return (
    <div style={{"text-align":"center"}}>
      <div>
        <label style={{"font-size": "24px"}} for="timerInput">Enter White Player Time In Minutes </label>
        <input style={{"height": "24px"}}  type="number" list="timers" id="timerInput1" placeholder="10" onChange={handlePlayer1TimeChange}/>
        <datalist id="timers">
          <option>1</option>
          <option>3</option>
          <option>10</option>
          <option>15</option>
        </datalist>
      </div>
      <br></br>
      <div>
        <label style={{"font-size": "24px"}} for="timerInput">Enter Black Player Time In Minutes </label>
        <input style={{"height": "24px"}}  type="number" list="timers" id="timerInput2" placeholder="10"/>
        <datalist id="timers">
          <option>1</option>
          <option>3</option>
          <option>10</option>
          <option>15</option>
        </datalist>
      </div>
      <br></br>
      <div>
        <label style={{"font-size": "24px"}} for="incTime" >Enter Move Increment In Seconds </label>
        <input style={{"height": "24px"}}  type="number" list="increments" id="incTime" placeholder="5"/>
        <datalist id="increments">
          <option>0</option>
          <option>2</option>
          <option>5</option>
          <option>10</option>
        </datalist>
      </div>
      <br></br>
      <button style={{margin:"1em"}} onClick={()=>setSoundOn(!soundOn)}>{(() => soundOn ? '🔈':'🔇')()}</button>
      <button style={{margin:"1em"}} onClick={()=>setVibrateOn(!vibrateOn)}>{(() => vibrateOn ? 'vibrate on touch':'vibrate off')()}</button>
      <br></br>
      <button style={{"height": "24px"}} id="startBtn" onClick={startGame}>Start</button>
    </div>
  );
}

export default ConfigScreen;
