import React from "react";
import PropTypes from "prop-types";

const Btn = ({ text, changeValue, fontSize }) => {
  return (
    <div>
      <button
        onClick={changeValue}
        style={{
          backgroundColor: "tomato",
          color: "white",
          padding: "10px 20px",
          border: 0,
          borderRadius: 10,
          fontSize
        }}
      >
        {text}
      </button>
    </div>
  );
};

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number
};

export default Btn;
