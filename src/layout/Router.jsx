import Home from "../pages/home";
import BuildYourEmpire from "../pages/BuildYourEmpire";
import Login from "../pages/Login";
import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
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
    element: <Disconnect/>,
  },
  {
    path: "/buildyourempire",
    element: <BuildYourEmpire />,
  },
]);

export default router;
