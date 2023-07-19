import React from "react";
import Footer from "../models/ModelsFooter";
import "../Components/style/home.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="homepage1">
      <div className="homepage">
        <h1>Welcome to Renegade Salvation:2938</h1>
        <p>
          Seize your future through space conquest and begin THE GREAT CONQUEST
        </p>
        <br />
        <br />
        <div className="buttonsHome">
          <Link to="/register" className="btn btn-primary">
            Create Account
          </Link>
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
