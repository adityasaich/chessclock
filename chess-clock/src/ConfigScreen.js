import "./App.css";

function ConfigScreen({onStart}) {

  const startGame = () => {
    let timeInMinutes = document.getElementById('timerInput').value;
    timeInMinutes = parseInt(timeInMinutes, 10)
    let incTime = document.getElementById('incTime').value;
    incTime = parseInt(incTime, 10)
    onStart(timeInMinutes, incTime);
  }

  return (
    <div>
      <div>
        <label for="timerInput">Choose Or Enter Player Time In Minutes</label>
        <input type="number" list="timers" id="timerInput" />
        <datalist id="timers">
          <option>1</option>
          <option>3</option>
          <option>10</option>
          <option>15</option>
        </datalist>
      </div>
      <br></br>
      <div>
        <label for="incTime">Choose Or Enter Move Increment In Seconds</label>
        <input type="number" list="increments" id="incTime" />
        <datalist id="increments">
          <option>0</option>
          <option>2</option>
          <option>5</option>
          <option>10</option>
        </datalist>
      </div>
      <br></br>
      <button id="startBtn" onClick={startGame}>Start</button>
    </div>
  );
}

export default ConfigScreen;
