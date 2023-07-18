import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
