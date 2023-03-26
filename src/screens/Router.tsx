import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import App from "../App";
import ErrorComponet from "../components/ErrorComponents";
import Header from "../components/Header";
import About from "./About";
import Home from "./Home";
import NotFound from "./NotFound";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponet />
      },
      {
        path: "about",
        element: <About />
      }
    ],
    errorElement: <NotFound />
  }
]);

export default Router;
