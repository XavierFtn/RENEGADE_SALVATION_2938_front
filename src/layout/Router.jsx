import Home from "../pages/home";
import BuildYourEmpire from "../pages/BuildYourEmpire";
import Login from "../pages/Login";
import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import ExtendYourEmpire from "../pages/ExtendYourEmpire";
import Disconnect from "../pages/Disconnect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/disconnect",
    element: <Disconnect />,
  },
  {
    path: "/buildyourempire",
    element: <BuildYourEmpire />,
  },
  {
    path: "/extendyourempire",
    element: <ExtendYourEmpire />,
  },
]);

export default router;
