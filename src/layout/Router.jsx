/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 24/07/2023 - 09:33:00
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/07/2023
    * - Author          : 
    * - Modification    : 
**/
import Home from "../pages/home";
import BuildYourEmpire from "../pages/BuildYourEmpire";
import YourEmpire from "../pages/YourEmpire";
import Login from "../pages/Login";
import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import ExtendYourEmpire from "../pages/ExtendYourEmpire";
import Disconnect from "../pages/Disconnect";
import Battle from "../pages/Battle";
import EditProfil from "../pages/Edit";

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
    path: "/yourempire",
    element: <YourEmpire />,
      },
  {
    path: "/extendyourempire",
    element: <ExtendYourEmpire />,

  },
  {
    path: "/battle",
    element: <Battle />,
  },
  {
    path: "/editprofil",
    element: <EditProfil />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPWD />,
  },
]);

export default router;
