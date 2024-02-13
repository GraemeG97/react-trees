import React from "react";
import { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);
  const [form, setForm] = useState({
    name: "Graeme",
    age: 26,
  });

  function incrementCounter() {
    setCount(count + 1);
  }

  function decreaseCounter() {
    setCount(count - 1);
  }

  function resetCounter() {
    setCount(0);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCounter}>Get another cookie</button>
      <button onClick={decreaseCounter}>Lose a cookie</button>
      <button onClick={resetCounter}>Reset</button>
      {/* Same as: button.addEventListener('click', incrementCounter) */}
    </div>
  );
}
