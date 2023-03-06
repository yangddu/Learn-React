import React, { useState } from "react";

const Converter = () => {
  const [amount, setAmount] = useState();
  const [flipped, setFlipped] = useState(false);
  const onChange = (e) => {
    setAmount(e.target.value);
  };
  const reset = () => {
    setAmount();
  };
  const onFlip = () => {
    reset();
    setFlipped(!flipped);
  };
  return (
    <div>
      <h1>Super Converter</h1>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={flipped ? amount * 60 : amount || ""}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          disabled={flipped}
        />
      </div>
      <h4>You want to convert {amount}</h4>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={(flipped ? amount : Math.round(amount / 60)) || ""}
          id="hours"
          placeholder="Hours"
          type="number"
          onChange={onChange}
          disabled={!flipped}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>Flip</button>
    </div>
  );
};

export default Converter;
