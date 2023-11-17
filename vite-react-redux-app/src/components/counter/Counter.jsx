import { useReducer } from "react";
import { COUNTER } from "../../constant/counter";
const initialCounter = 0;
const counterReducer = (state, action) => {
  switch (action) {
    case COUNTER.INCREASE:
      return state + 1;
    case COUNTER.DECREASE:
      return state - 1;
    case COUNTER.RESET:
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
      <button onClick={() => dispatch(COUNTER.INCREASE)}>+</button>
      <input type="text" value={counterVal} readOnly />
      <button
        onClick={() => dispatch(COUNTER.DECREASE)}
        disabled={counterVal == 0}
      >
        -
      </button>
      <button onClick={() => dispatch(COUNTER.RESET)}>Reset</button>
    </div>
  );
};

export default Counter;
