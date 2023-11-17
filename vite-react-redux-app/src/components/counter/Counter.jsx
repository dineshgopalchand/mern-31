import { useReducer } from "react";
const initialCounter = 0;
const counterReducer = (state, action) => {
  switch (action) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    case "reset":
      return initialCounter;
    default:
      return state;
  }
};
const Counter = () => {
  const [counterVal, dispatch] = useReducer(counterReducer, initialCounter);
  return (
    <div>
      <h3>Counter</h3>
      <button onClick={() => dispatch("increase")}>+</button>
      <input type="text" value={counterVal} readOnly />
      <button onClick={() => dispatch("decrease")} disabled={counterVal == 0}>
        -
      </button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default Counter;
