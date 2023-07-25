import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";
import Ships from "../Components/Ships/ViewShips";

import { Card } from "react-bootstrap";

function ExtendYourEmpire() {
  return (
    <div className="container-fluid">
      <Header name="Prepare for war!" />
      <div className="row mb-5 pt-2"></div>
      <div className="row wrap">
        <div className="row mb-3"></div>
        <div className="row wrap">
          <div className="col-md-3">
            <Card className="text-center px-0 pt-2">
              <Card.Header className="py-0 ">
                <h1 className="orbitron">Fighter</h1>
              </Card.Header>
              <Card.Body>
                <div className="py-0">
                  <Ships type={"fighter"} />
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="text-center px-0 pt-2">
              <Card.Header className="py-0 ">
                <h1 className="orbitron">Frigate</h1>
              </Card.Header>
              <Card.Body>
                <div className="py-0">
                  <Ships type={"frigate"} />
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="text-center px-0 pt-2">
              <Card.Header className="py-0 ">
                <h1 className="orbitron">Cruiser</h1>
              </Card.Header>
              <Card.Body>
                <div className="py-0">
                  <Ships type={"cruiser"} />
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="text-center px-0 pt-2">
              <Card.Header className="py-0 ">
                <h1 className="orbitron">Destroyer</h1>
              </Card.Header>
              <Card.Body>
                <div className="py-0">
                  <Ships type={"destroyer"} />
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row mt-5 pt-2">
          <Card className="text-center px-0 pt-2">
            <Card.Header className="py-0 ">
              <div className="col d-flex justify-content-center">
                <h1 className="orbitron">Fuel</h1>
              </div>
            </Card.Header>
          </Card>
        </div>
        <div className="row mt-5 pt-2">
          <Card className="text-center px-0 pt-2">
            <Card.Header className="py-0 ">
              <h1 className="orbitron">Select the enemy on the map!</h1>
            </Card.Header>
            <Card.Body>
              <GridSquare color="1" />
              <GridBoard />
            </Card.Body>
          </Card>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default ExtendYourEmpire;
