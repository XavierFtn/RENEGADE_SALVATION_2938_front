import React from "react";
import "../style/homepage.css";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="homepage">
      <h1>Welcome to Renegade Salvation:2938</h1>
      <p>
        Seize your future through space conquest and begin THE GREAT CONQUEST
      </p>
      <br />
      <br />
      <div className="buttonsHome">
        <Link to="/createaccount" className="btn btn-primary">
          Create Account
        </Link>
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
}

export default App;
