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
    <ThemeProvider theme={lightTheme}>
      <RouterProvider router={Router} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
