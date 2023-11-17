import { useState } from "react";
const initialCounter = 0;
const Counter = () => {
  const [counterVal, setCounterVal] = useState(initialCounter);
  function addCounter() {
    setCounterVal((prevCounterVal) => prevCounterVal + 1);
  }
  function subsCounter() {
    setCounterVal((prevCounterVal) => prevCounterVal - 1);
  }
  function resetCounter() {
    setCounterVal(initialCounter);
  }
  return (
    <div>
      <h3>Counter</h3>
      <button onClick={addCounter}>+</button>
      <input type="text" value={counterVal} readOnly />
      <button onClick={subsCounter} disabled={counterVal == 0}>
        -
      </button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
};

export default Counter;
