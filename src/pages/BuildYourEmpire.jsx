import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";
import Buildings from "../Components/Buildings/ViewBuildings";
import Cbuilding from "../Components/Buildings/CreateBuildings";
import { Badge, Card } from "react-bootstrap";
import ViewRessources from "../Components/Ressources/ViewRessources";
import ViewShipyards from "../Components/Ships/ViewShipyards";
import ViewWarehourse from "../Components/Buildings/ViewWarehouse";
import { useEffect, useState } from "react";
import {
  getStructures,
  getWarehouses,
  getRessources,
  getShipyards,
  createStructures,
  deleteStructures,
} from "../Components/Api/backend_helper";

function BuildYourEmpire() {
  const [structures, setStructures] = useState({});
  const [ressources, setRessources] = useState({});
  const [warehouse, setWarehouses] = useState([]);
  const [shipyards, setShipyards] = useState([]);

  useEffect(() => {
    getStructures().then((result) => setStructures(result));
    getWarehouses().then((result) => setWarehouses(result));
    getRessources().then((result) => setRessources(result));
    getShipyards().then((result) => setShipyards(result));
  }, []);

  function handleCreateStructure(type) {
    createStructures(type);
    getStructures().then((result) => setStructures(result));
    getWarehouses().then((result) => setWarehouses(result));
    getRessources().then((result) => setRessources(result));
    getShipyards().then((result) => setShipyards(result));
  }

  function handleDeleteStructure(id) {
    deleteStructures(id);
    getStructures().then((result) => setStructures(result));
    getWarehouses().then((result) => setWarehouses(result));
    getRessources().then((result) => setRessources(result));
    getShipyards().then((result) => setShipyards(result));
  }

  return (
    <div className="container-fluid">
      <Header name="Build Your Empire" />
      <div className="row mb-5 pt-2"></div>
      <div className="row wrap">
        <div className="col-md-6">
          <Card className="text-center">
            <Card.Header className="py-0 ">
              <h1 className="orbitron">Create</h1>
            </Card.Header>
            <Card.Body>
              <Cbuilding
                onCreate={handleCreateStructure}
                ore={ressources.ore}
              />
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card className="text-center">
            <Card.Header className="py-0 ">
              <h1 className="orbitron">List of Ressources</h1>
            </Card.Header>
            <Card.Body>
              <ViewRessources ressources={ressources} />
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row mb-3"></div>
      <div className="row wrap">
        <div className="col-md-3 ">
          <Card className="text-center px-0 pt-2">
            <Card.Header className="py-0  ">
              <h1 className="orbitron">Mine</h1>
            </Card.Header>
            <Card.Body>
              <div className="scroll">
                <Buildings
                  type={"mine"}
                  building={structures}
                  onDelete={handleDeleteStructure}
                />
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="text-center px-0 pt-2">
            <Card.Header className="py-0 ">
              <h1 className="orbitron">PowerPlant</h1>
            </Card.Header>
            <Card.Body>
              <div className="scroll">
                <Buildings
                  type={"powerplant"}
                  building={structures}
                  onDelete={handleDeleteStructure}
                />
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 ">
          <Card className="text-center  px-0 pt-2">
            <Card.Header className="py-0 ">
              <h1 className="orbitron">Raffinery</h1>
            </Card.Header>
            <Card.Body>
              <div className="scroll">
                <Buildings
                  type={"raffinery"}
                  building={structures}
                  onDelete={handleDeleteStructure}
                />
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="text-center px-0 pt-2 pb-1">
            <h1 className="orbitron">
              Warehouse :{" "}
              <span>
                {" "}
                <Badge bg="dark">
                  <ViewWarehourse warehouse={warehouse} />
                </Badge>
              </span>
            </h1>
          </Card>
          <Card className="text-center mt-2 px-0 pt-2">
            <Card.Header className="py-0 ">
              <h1 className="orbitron">Shipyard</h1>
            </Card.Header>
            <Card.Body>
              <ViewShipyards shipyard={shipyards} />
            </Card.Body>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default BuildYourEmpire;
