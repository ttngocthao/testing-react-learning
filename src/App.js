import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const increaseHandle = () => {
    if (showErrorMsg) {
      setShowErrorMsg(false);
    }
    setCount(count + 1);
  };
  const decreaseHandle = () => {
    if (count === 0) {
      setShowErrorMsg(true);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="App" data-test="component-app">
      <h1 data-test="counter-display">
        Current counter &nbsp;
        <span data-test="count">{count}</span>
      </h1>
      {showErrorMsg && <h2 data-test="error-msg">Counter cannot go below 0</h2>}
      <button data-test="increment-button" onClick={increaseHandle}>
        Increment
      </button>
      <button data-test="decrement-button" onClick={decreaseHandle}>
        Decrement
      </button>
    </div>
  );
}

export default App;
