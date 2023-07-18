import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import PagePost from "../pages/PagePost";
import PageProfil from "../pages/PageProfil";
import PageConnect from "../pages/PageConnect";
import PageCreate from "../pages/PageCreate";
import PageContact from "../pages/PageContact";
import PageConnectPost from "../pages/PageConnectPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Create",
    element: <PageCreate />,
  },
  {
    path: "/Post",
    element: <PagePost />,
  },

  {
    path: "/Connect",
    element: <PageConnect />,
  },
  {
    path: "/Disconnect",
    element: <PagePost />,
  },
  {
    path: "/Profil",
    element: <PageProfil />,
  },

  {
    path: "/ConnectPost",
    element: <PageConnectPost />,
  },
  {
    path: "/Contact",
    element: <PageContact />,
  },
]);

export default router;
