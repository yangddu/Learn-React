import React from "react";

const Btn = ({ banana }) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "tomato",
          color: "white",
          padding: "10px 20px",
          border: 0,
          borderRadius: 10
        }}
      >
        Save Changes
      </button>
      <div>{banana}</div>
    </div>
  );
};

export default Btn;
