import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h3>Total clicks : {counter}</h3>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default Counter;
