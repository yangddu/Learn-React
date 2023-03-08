import { useState } from "react";
import MinutesToHours from "./components/MinutesToHours";

function App() {
  const [index, setIndex] = useState("xx");
  const onSelect = (e) => {
    setIndex(e.target.value);
  };
  return (
    <div>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      {index === "xx" ? "Please select your units" : null}
      {index === "0" ? <MinutesToHours /> : null}
    </div>
  );
}

export default App;
