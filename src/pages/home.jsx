import Footer from "../models/ModelsFooter";
import "../Components/style/home.css";
import { Link } from "react-router-dom";
import Header from "../models/ModelsHeader";
import { useEffect, useState } from "react";

function Home() {
  const [connected, setConnected] = useState(false);
  const [disconnected, setDisconnected] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("user"));
    if (items) {
      setConnected(true);
      setDisconnected(false);
    } else {
      setConnected(false);
      setDisconnected(true);
    }
  }, []);
  return (
    <div className="container-fluid">
      <Header />
      <div className="col">
        <div className="row  mb-5"></div>

        <div className=" row ">
          <img src="src/Components/img/renegade-logo.jpg" />
          <p className="orbitron">Seize your future through space conquest and begin THE GREATEST ADVENTURE</p>
          <br />
          <br />
          {connected && <div className="buttonsHome">
            <Link to="/yourempire" className="btn btn-dark border border-warning">
              Your Empire
            </Link>
            <Link to="/buildyourempire" className="btn btn-dark border border-warning">
              Build Your Empire
            </Link>
            <Link to="/battle" className="btn btn-dark border border-warning">
              Battle
            </Link>
            <Link to="/disconnect" className="btn btn-danger border border-warning">
              Logout
            </Link>
          </div>}
          {disconnected && <div className="buttonsHome">
            <Link to="/login" className="btn btn-dark border border-warning">
              Login
            </Link>
            <Link to="/register" className="btn btn-dark border border-warning">
              Register
            </Link>
          </div>}
        </div>

      </div>
      <Footer />
    </div>
  );
}
export default Home;
