import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";
// import Warehouses from "../models/ModelsBuildings/
import ViewRessources from "../Components/Ressources/ViewRessources";
import BackgroundVideo from "../models/ModelsBackground.jsx";
import Ships from "../Components/Ships/ViewShips";
import MapUser from "../components/MapUser";
import { Card } from "react-bootstrap";
import ViewWarehouse from "../Components/Buildings/ViewWarehouse";

function YourEmpire() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-50">
      {" "}
      <div className="container m-5">
        <Header />

        <BackgroundVideo />

        <div className="row m-3">
          <div className="col-md-12 mb-12">
            <Card className="text-center">
              <Card.Header className="py-0">
                <h1 className="orbitron">Your Resources:</h1>
              </Card.Header>
              <Card.Body>
                <ViewRessources />
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row m-3">
          <div className="col-md-6 mb-3">
            <Card className="text-center">
              <Card.Header className="py-0">
                <h1 className="orbitron">Your ships:</h1>
              </Card.Header>
              <Card.Body>
                <Ships type={"fighter"} />
                <Ships type={"frigate"} />
                <Ships type={"cruiser"} />
                <Ships type={"destroyer"} />
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 mb-3">
            <Card className="text-center px-0 pt-2 pb-1">
              <h1 className="orbitron">
                Warehouse :{" "}
                <span>
                  <ViewWarehouse />
                </span>
              </h1>
            </Card>
          </div>
        </div>

        <div className="row m-3">
          <div className="col-md-12 mb-3">
            <Card.Body
              className="py-0 opacity-1"
              style={{
                backgroundImage: 'url("/src/components/img/radar.gif")',
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                opacity: 0.7,
              }}
            >
              <Card.Header className="py-0">
                <h1 className="orbitron">You are here:</h1>
              </Card.Header>
              <Card.Body>
                <MapUser />
              </Card.Body>
            </Card.Body>
          </div>
        </div>

        <div className="row m-3">
          <div className="col-md-12 mb-3">
            <Card className="text-center">
              <Card.Header className="py-0">
                <h1 className="orbitron">Your past battles:</h1>
              </Card.Header>
              <Card.Body>{/* <Battles/>   */}</Card.Body>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default YourEmpire;
