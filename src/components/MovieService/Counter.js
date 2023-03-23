import React, { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((counter) => counter + 1);
  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  console.log("i run all the time");
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <button onClick={onClick}>click me</button>
    </div>
  );
};

export default Counter;
