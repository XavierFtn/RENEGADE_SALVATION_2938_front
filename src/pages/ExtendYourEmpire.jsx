import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";
import Menu from "../layout/Menu";
import ListGroup from "react-bootstrap/ListGroup";

import { Link } from "react-router-dom";

function ExtendYourEmpire() {
  return (
    <div className="container-fluid">
      <Header />

      <Menu />

      <h1>Expand your empire!</h1>
      <Cbuilding />
      <Buildings />
      <Footer />
    </div>
  );
}
export default ExtendYourEmpire;
