import Home from "../pages/Home";
import BuildYourEmpire from "../pages/BuildYourEmpire";
import { createBrowserRouter } from "react-router-dom";
import CreateAccount from "../Components/Pages/CreateAccount";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/buildyourempire",
    element: <BuildYourEmpire />,
  },
  {
    path: "/createaccount",
    element: <CreateAccount />,
  }
]);

export default router;
