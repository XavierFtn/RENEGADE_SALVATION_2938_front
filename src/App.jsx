
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { router } from "./Routes";
import { RouterProvider } from 'react-router-dom'
import "../src/Components/style/homepage.css";

function App() {

  return (<RouterProvider router={router} />)

}

export default App;
