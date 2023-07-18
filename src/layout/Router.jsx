import Home from "../pages/home";
import BuildYourEmpire from "../pages/BuildYourEmpire";
import Login from "../pages/Login";
import { createBrowserRouter } from "react-router-dom";

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
    path: "/buildyourempire",
    element: <BuildYourEmpire />,
  },
]);

export default router;
