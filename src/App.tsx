import React from "react";
import styled from "styled-components";

const App = () => {
  const GlobalStyle = styled.div`
    a {
      text-decoration: none;
      color: inherit;
    }
    ul,
    li {
      list-style: none;
    }
    body {
      background-color: ${(props) => props.theme.bgColor};
      color: ${(props) => props.theme.textColor};
    }
  `;

  return (
    <>
      <GlobalStyle />
    </>
  );
};

export default App;
