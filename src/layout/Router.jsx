import Home from "../pages/home";
import BuildYourEmpire from "../pages/BuildYourEmpire";
import Login from "../pages/Login";
import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";

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
    path: "/buildyourempire",
    element: <BuildYourEmpire />,
  },
]);

export default router;
