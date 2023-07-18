import { RouterProvider } from "react-router-dom";
import router from "./layout/Router";
import "../src/Components/style/home.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
