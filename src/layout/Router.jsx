import Home from "../pages/Home";
import BuildYourEmpire from "../pages/BuildYourEmpire";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/buildyourempire",
    element: <BuildYourEmpire />,
  }
]);

export default router;
