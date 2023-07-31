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
import ResetPWD from "../pages/ResetPWD";
import ForgetPWD from "../pages/ForgetPWD";
import Stripe from "../Components/Stripe/Stripe";
import History from "../pages/History";
import Ranking from "../pages/Ranking";
import Stripe from "../pages/Stripe";

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
    path: "/payment",
    element: <Stripe />,
  },
  {
    path: "/ranking",
    element: <Ranking />,
  },
  {
    path: "/battlehistory",
    element: <History />,
  },
  {
    path: "/editprofile",
    element: <EditProfil />,
  },
  {
    path: "/forget-password",
    element: <ForgetPWD />,
  },
  {
    path: "/reset-password/:token",
    element: <ResetPWD />,
  },
  {
    path: "/reset-password/",
    element: <ResetPWD />,
  },
  {
    path: "/Stripe/",
    element: <Stripe />,
  },
]);

export default router;
