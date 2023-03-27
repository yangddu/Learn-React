import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { lightTheme } from "./theme";
import { RouterProvider } from "react-router-dom";
import Router from "./screens/Router";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
