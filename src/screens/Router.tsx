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
import Followers from "./users/Followers";
import User from "./users/User";

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
      },
      {
        path: "users/:userId",
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Followers />
          },
          {
            path: "following",
            element: <Followers />
          }
        ]
      }
    ],
    errorElement: <NotFound />
  }
]);

export default Router;
