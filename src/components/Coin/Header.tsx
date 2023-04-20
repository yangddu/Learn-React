import { Link, useNavigate } from "react-router-dom";
import React from "react";

const Header = () => {
  const navigate = useNavigate();
  const onAboutClick = () => {
    navigate("/about");
  };
  return (
    <header>
      <h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* <Link to="/about">About</Link> */}
            <button onClick={onAboutClick}>About</button>
          </li>
        </ul>
      </h1>
    </header>
  );
};

export default Header;
