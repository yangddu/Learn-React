import React, { useState } from "react";

const Converter = () => {
  const [minutes, setMinutes] = useState();
  const onChange = (e) => {
    setMinutes(e.target.value);
  };
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
        />
      </div>
      <h4>You want to convert {minutes}</h4>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={minutes / 60 || ""}
          id="hours"
          placeholder="Hours"
          type="number"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Converter;
