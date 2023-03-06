import React, { useState } from "react";

const Converter = () => {
  const [minutes, setMinutes] = useState();
  const [flipped, setFlipped] = useState(false);
  const onChange = (e) => {
    setMinutes(e.target.value);
  };
  const reset = () => {
    setMinutes(0);
  };
  const onFlip = () => setFlipped(!flipped);
  return (
    <div>
      <h1>Super Converter</h1>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={minutes || ""}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          disabled={flipped}
        />
      </div>
      <h4>You want to convert {minutes}</h4>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={Math.round(minutes / 60) || ""}
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
