/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 24/07/2023 - 14:53:58
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/07/2023
    * - Author          : 
    * - Modification    : 
**/
import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";
import Buildings from "../Components/Buildings/ViewBuildings";
import Cbuilding from "../Components/Buildings/CreateBuildings";
import { Badge, Card } from "react-bootstrap";
import ViewRessources from "../Components/Ressources/ViewRessources";
import ViewShipyards from "../Components/Ships/ViewShipyards";
import ViewWarehourse from "../Components/Buildings/ViewWarehouse";

function BuildYourEmpire() {





  
  return (
    <div className="container-fluid">
      <Header name="Build Your Empire" />
      <div className="row mb-5 pt-2">
      </div>
      <div className="row wrap">
        <div className="col-md-6">
          <Card className="text-center">
            <Card.Header className="py-0 ">
              <h1 className="orbitron">Create</h1>
            </Card.Header>
            <Card.Body>
              <Cbuilding />
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card className="text-center">
            <Card.Header className="py-0 ">
              <h1 className="orbitron">List of Ressources</h1>
            </Card.Header>
            <Card.Body>
              <ViewRessources />
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
                <Buildings type={"mine"} />
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
                <Buildings type={"powerplant"} />
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
                <Buildings type={"raffinery"} />
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
        <Card className="text-center px-0 pt-2 pb-1">
             <h1 className="orbitron">Warehouse : <span> <Badge bg="dark"><ViewWarehourse/></Badge></span></h1>
          </Card>
          <Card className="text-center mt-2 px-0 pt-2">
            <Card.Header className="py-0 ">
              <h1 className="orbitron">Shipyard</h1>
            </Card.Header>
            <Card.Body> 
              <ViewShipyards/>
              
            </Card.Body>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default BuildYourEmpire;
