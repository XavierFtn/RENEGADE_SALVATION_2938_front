import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";
import Ships from "../Components/Ships/ViewShips";

import { Button, Card, Modal } from "react-bootstrap";
import ViewRessources from "../Components/Ressources/ViewRessources";
import ViewShipyards from "../Components/Ships/ViewShipyards";
import Createship from "../Components/Ships/CreateShips";
import { useEffect, useState } from "react";
import Map from "../Components/Map";

import fighter from "../components/img/Ships/fighter.png";
import frigate from "../components/img/Ships/frigate.png";
import cruiser from "../components/img/Ships/cruiser.png";
import destroyer from "../components/img/Ships/destroyer(1).png";

import { useNavigate } from "react-router-dom";

function ExtendYourEmpire() {
  const navigate = useNavigate();

  const [showfi, setShowfi] = useState(false);
  const [showfr, setShowfr] = useState(false);
  const [showcr, setShowcr] = useState(false);
  const [showde, setShowde] = useState(false);
  const handleClosefi = () => setShowfi(false);
  const handleClosefr = () => setShowfr(false);
  const handleClosecr = () => setShowcr(false);
  const handleClosede = () => setShowde(false);
  const [ore, setOre] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  function handleShowfi() {
    if (ore >= 50) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    setShowfi(true);
  }
  function handleShowfr() {
    if (ore >= 200) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    setShowfr(true);
  }
  function handleShowcr() {
    if (ore >= 800) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    setShowcr(true);
  }
  function handleShowde() {
    if (ore >= 2000) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    setShowde(true);
  }
  function ReadOre() {
    var myHeaders = new Headers();
    const token = JSON.parse(sessionStorage.getItem("token"));

    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/ressources/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setOre(result.ore);
        console.log("result", result);
      })
      .catch((error) => console.log("error", error));
  }
  useEffect(() => {
    ReadOre();
  }, []);
  return (
    <div className="container-fluid">
      <Header name="Prepare for war!" />
      <div className="row mb-5 pt-2"></div>
      <div className="row wrap">
        <div className="row mb-3"></div>
        <div className="row wrap">
          <div className="col-md-3">
            <Card className="text-center p-1 ">
              <Card.Header className="py-0 ">
                <h1 className="orbitron2">
                  <Ships type={"fighter"} />
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
                      You have 🪨: <strong>{ore}</strong> Ore Units
                    </p>
                    <Button variant="secondary" onClick={handleClosefi}>
                      Close
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => {
                        Createship("fighter");
                        handleClosefi();
                        navigate("/extendyourempire");
                      }}
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
                  <Ships type={"frigate"} />
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
                      You have 🪨: <strong>{ore}</strong> Ore Units
                    </p>
                    <Button variant="secondary" onClick={handleClosefr}>
                      Close
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => {
                        Createship("frigate");
                        handleClosefr();
                      }}
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
                  <Ships type={"cruiser"} />
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
                      You have 🪨: <strong>{ore}</strong> Ore Units
                    </p>
                    <Button variant="secondary" onClick={handleClosecr}>
                      Close
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => {
                        Createship("cruiser");
                        handleClosecr();
                      }}
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
                  <Ships type={"destroyer"} />
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
                      You have 🪨: <strong>{ore}</strong> Ore Units
                    </p>
                    <Button variant="secondary" onClick={handleClosede}>
                      Close
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => {
                        Createship("destroyer");
                        handleClosede();
                      }}
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
        <div className="col-md-10 mt-3 ">
          <Card className="text-center p-0 pt-2">
            <Card.Header className="py-0 ">
              <div className="col d-flex justify-content-center">
                <h1 className="orbitron">Ressources : </h1>
                <ViewRessources />
              </div>
            </Card.Header>
          </Card>
          <Card className="text-center p-0 pt-2">
            <Card.Header className="py-0 ">
              <div className="col d-flex justify-content-center">
                <h1 className="orbitron">Map : </h1>
              </div>
            </Card.Header>
            <Card.Body className="py-0 ">
              <Map />
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-2 mt-3 ">
          <Card className="text-center px-0 pt-2">
            <Card.Header className="py-0 ">
              <div className="col d-flex justify-content-center">
                <h1 className="orbitron">Shipyards</h1>
              </div>
            </Card.Header>
            <div className="py-0 p-0">
              <ViewShipyards />
            </div>
          </Card>
        </div>

        <Footer />
      </div>
    </div>
  );
}
export default ExtendYourEmpire;
