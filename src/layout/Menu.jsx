import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Menu() {
  return (
    <div className="col">
      <nav>
        <div className="row m-3 align">
          <p className="align">Menu</p>
        </div>
        <div className="row mt-5">
          <Link className="align" to="/">
            <Button className="w-7" variant="warning">
              Home
            </Button>{" "}
          </Link>
        </div>
        <div className="row mt-5 ">
          <Link className="align" to="/buildyourempire">
            <Button variant="info">Build</Button>{" "}
          </Link>
        </div>
        <div className="row mt-5 ">
          <Link className="align" to="/extendyourempire">
            <Button variant="info">Conquest</Button>{" "}
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
