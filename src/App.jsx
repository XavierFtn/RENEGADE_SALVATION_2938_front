

import router from './layout/Router'
import { RouterProvider } from 'react-router-dom'
import "../src/Components/style/homepage.css";

function App() {

  return (<RouterProvider router={router} />)

}

export default App;
