import "./App.css";

function ConfigScreen({onStart}) {

  const startGame = () => {
    let timeInMinutes = document.getElementById('timerInput').value || 10;
    timeInMinutes = parseInt(timeInMinutes, 10)
    let incTime = document.getElementById('incTime').value || 5;
    incTime = parseInt(incTime, 10)
    onStart(timeInMinutes, incTime);
  }

  return (
    <div style={{"text-align":"center"}}>
      <div>
        <label style={{"font-size": "24px"}} for="timerInput">Enter Player Time In Minutes </label>
        <input style={{"height": "24px"}}  type="number" list="timers" id="timerInput" placeholder="10"/>
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
      <button style={{"height": "24px"}} id="startBtn" onClick={startGame}>Start</button>
    </div>
  );
}

export default ConfigScreen;
