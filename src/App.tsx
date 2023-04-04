import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled, {
  createGlobalStyle,
  keyframes,
  ThemeProvider
} from "styled-components";
import { isDarkAtom } from "./atoms";
import Circle from "./components/Circle";
import Header from "./components/Header";
import Router from "./screens/Router";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [value, setValue] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setValue(value);
    console.log(value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hello", value);
  };

  const GlobalStyle = createGlobalStyle`
    a {
      text-decoration: none;
      color: inherit;
    }
    ul, li {
      list-style: none;
    }
    body {
      background-color: ${(props) => props.theme.bgColor};
      color: ${(props) => props.theme.textColor}
    }

  `;

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
`;
const anim = keyframes`
  from {
    color: tomato
  }to {
    color: teal
  }
`;

const Title = styled.h1`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`;

const Button = styled.button`
  width: 130px;
  height: 50px;
  color: white;
  border: 2px dashed gray;
  background-color: #fff;
  border-radius: 15px;
  animation: ${anim} 0.5s infinite;
`;

const Input = styled.input.attrs({
  type: "number",
  maxlength: 1
})`
  background-color: tomato;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }

  50% {
    /* transform: rotate(360deg); */
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;

  &:hover {
    font-size: 98px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotateAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`;
