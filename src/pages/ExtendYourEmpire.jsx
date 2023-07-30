import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";
import Ships from "../Components/Ships/ViewShips";
import { Button, Card, Modal } from "react-bootstrap";
import ViewRessources from "../Components/Ressources/ViewRessources";
import { useEffect, useState } from "react";
import Map from "../Components/Map";
import { getShips,getRessources,getShipyardsAvailable,updateShipQuantity } from "../Components/Api/backend_helper";
import fighter from "../components/img/Ships/fighter.png";
import frigate from "../components/img/Ships/frigate.png";
import cruiser from "../components/img/Ships/cruiser.png";
import destroyer from "../components/img/Ships/destroyer.png";
import swal from "sweetalert";

function ExtendYourEmpire() {
  const [ressources, setRessources] = useState({});

  useEffect(() => {
    getRessources().then((result) => setRessources(result));
    getShips().then((ships) => setShips(ships));
  }, []);

  const [ships, setShips] = useState({});
  const [showfi, setShowfi] = useState(false);
  const [showfr, setShowfr] = useState(false);
  const [showcr, setShowcr] = useState(false);
  const [showde, setShowde] = useState(false);
  const handleClosefi = () => setShowfi(false);
  const handleClosefr = () => setShowfr(false);
  const handleClosecr = () => setShowcr(false);
  const handleClosede = () => setShowde(false);
  const [isDisabled, setIsDisabled] = useState(true);

  function handleShowfi() {
    if (ressources.ore >= 50) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    setShowfi(true);
  }
  function handleShowfr() {
    if (ressources.ore >= 200) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    setShowfr(true);
  }
  function handleShowcr() {
    if (ressources.ore >= 800) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    setShowcr(true);
  }
  function handleShowde() {
    if (ressources.ore >= 2000) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    setShowde(true);
  }

  function createShips(type){
    getShipyardsAvailable().then((result) => {
      console.log('resultshipavailable',result);
      if (result.success){
        updateShipQuantity(type).then(() => {
          getRessources().then((result) => setRessources(result));
          swal("Created!", `Your ${type} is under construction`, "info");
        });
      }
      else{
        swal("Error", "No Shipyard Available", "error");
      }
    });
  }

  return (
    <div className="container-fluid">
      <Header name="Prepare for war!" />
      <div className="row mb-5 pt-2"></div>
      <div className="row mb-3"></div>
      <div className="row wrap">
        <div className="col-md-3">
          <Card className="text-center p-1 ">
            <Card.Header className="py-0 ">
              <h1 className="orbitron2">
                <Ships type={"fighter"} ships={ships} />
              </h1>
            </Card.Header>
            <img src={fighter} alt="fighter" />
            <div className="p-0">
              <Button
                variant="btn-dark"
                className="btn btn-dark border border-warning"
                onClick={handleShowfi}
              >
                Create Fighter
              </Button>
              <Modal show={showfi} onHide={handleClosefi}>
                <Modal.Header closeButton>
                  <Modal.Title>*Construction Noise*</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Do you really want to create this Fighter ?
                </Modal.Body>
                <Modal.Body>
                  🪨: <strong>50</strong> Ore Units <br /> ⚡:
                  <strong>1</strong> Energy Units <br /> 🕐:
                  <strong>1</strong> hour{" "}
                </Modal.Body>
                <Modal.Footer>
                  <p>
                    You have 🪨: <strong>{ressources.ore}</strong> Ore Units
                  </p>
                  <Button variant="secondary" onClick={handleClosefi}>
                    Close
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => createShips("fighter")}
                    disabled={isDisabled ? true : false}
                  >
                    Create 🚀
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="text-center p-1">
            <Card.Header className="py-0 ">
              <h1 className="orbitron2">
                <Ships type={"frigate"} ships={ships} />
              </h1>
            </Card.Header>
            <img src={frigate} alt="frigate" />
            <div className="py-0">
              <Button
                variant="btn-dark"
                className="btn btn-dark border border-warning"
                onClick={handleShowfr}
              >
                Create Frigate
              </Button>
              <Modal show={showfr} onHide={handleClosefr}>
                <Modal.Header closeButton>
                  <Modal.Title>*Construction Noise*</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Do you really want to create this Frigate ?
                </Modal.Body>
                <Modal.Body>
                  🪨: <strong>200</strong> Ore Units <br />
                  ⚡:
                  <strong>2</strong> Energy Units <br />
                  🕐:
                  <strong>2</strong> hours{" "}
                </Modal.Body>
                <Modal.Footer>
                  <p>
                    You have 🪨: <strong>{ressources.ore}</strong> Ore Units
                  </p>
                  <Button variant="secondary" onClick={handleClosefr}>
                    Close
                  </Button>
                  <Button
                    variant="success"
                    onClick={() =>createShips("frigate")}
                    disabled={isDisabled ? true : false}
                  >
                    Create 🚀
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="text-center p-1">
            <Card.Header className="py-0 ">
              <h1 className="orbitron2">
                <Ships type={"cruiser"} ships={ships} />
              </h1>
            </Card.Header>
            <img src={cruiser} alt="cruiser" />
            <div className="py-0">
              <Button
                variant="btn-dark"
                className="btn btn-dark border border-warning"
                onClick={handleShowcr}
              >
                Create Cruiser
              </Button>
              <Modal show={showcr} onHide={handleClosecr}>
                <Modal.Header closeButton>
                  <Modal.Title>*Construction Noise*</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Do you really want to create this Cruiser ?
                </Modal.Body>
                <Modal.Body>
                  🪨: <strong>800</strong> Ore Units <br />
                  ⚡:
                  <strong>4</strong> Energy Units <br />
                  🕐:
                  <strong>4</strong> hours{" "}
                </Modal.Body>
                <Modal.Footer>
                  <p>
                    You have 🪨: <strong>{ressources.ore}</strong> Ore Units
                  </p>
                  <Button variant="secondary" onClick={handleClosecr}>
                    Close
                  </Button>
                  <Button
                    variant="success"
                    onClick={() =>createShips("cruiser")}
                    disabled={isDisabled ? true : false}
                  >
                    Create 🚀
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="text-center px-0 pb-0 pt-2">
            <Card.Header className="py-0 ">
              <h1 className="orbitron2">
                <Ships type={"destroyer"} ships={ships} />
              </h1>
            </Card.Header>
            <img src={destroyer} alt="destroyer" />
            <div className="py-0">
              <Button
                variant="btn-dark"
                className="btn btn-dark border border-warning"
                onClick={handleShowde}
              >
                Create Destroyer
              </Button>
              <Modal show={showde} onHide={handleClosede}>
                <Modal.Header closeButton>
                  <Modal.Title>*Construction Noise*</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Do you really want to create this Destroyer ?
                </Modal.Body>
                <Modal.Body>
                  🪨: <strong>2000</strong> Ore Units <br />
                  ⚡:
                  <strong>8</strong> Energy Units <br />
                  🕐:
                  <strong>8</strong> hours{" "}
                </Modal.Body>
                <Modal.Footer>
                  <p>
                    You have 🪨: <strong>{ressources.ore}</strong> Ore Units
                  </p>
                  <Button variant="secondary" onClick={handleClosede}>
                    Close
                  </Button>
                  <Button
                    variant="success"
                    onClick={() =>createShips("destroyer")}
                    disabled={isDisabled ? true : false}
                  >
                    Create 🚀
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Card>
        </div>
      </div>

      <div className="col-md-12 mt-3">
        <Card className="text-center p-3 pt-2">
          <Card.Header className="py-0 ">
            <div className="col d-flex justify-content-center">
              <h1 className="orbitron">Ressources : </h1>
              <ViewRessources ressources={ressources}/>
            </div>
          </Card.Header>
        </Card>
      </div>

      <div className="col-md-12 mb-3 mt-3">
        <Card className="text-center p-3 pt-2">
          <Card.Header className="py-0">
            <div className="col d-flex justify-content-center">
              <h1 className="orbitron">Map:</h1>
            </div>
          </Card.Header>
        </Card>

        <Card.Body
          className="py-0 opacity-1"
          style={{
            backgroundImage: 'url("/src/components/img/radar.gif")',
            backgroundSize: "100% 100%",
            backgroundPosition: "center center", // Centrer l'image horizontalement et verticalement
            backgroundRepeat: "no-repeat", // Empêcher la répétition de l'image
            opacity: 0.7,
          }}
        >
          <Card.Body>
            <Map />
          </Card.Body>
        </Card.Body>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}
export default ExtendYourEmpire;
