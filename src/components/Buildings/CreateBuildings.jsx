
import { useState } from "react";
import {Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function CreateBuilding() {
  const [showm, setShowm] = useState(false);
  const [showr, setShowr] = useState(false);
  const [showp, setShowp] = useState(false);
  const [shows, setShows] = useState(false);
  const handleClosem = () => setShowm(false);
  const handleCloser = () => setShowr(false);
  const handleClosep = () => setShowp(false);
  const handleCloses = () => setShows(false);
  const [ore, setOre] = useState(400);
  const [energy, setEnergy] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  let oreMine = 300;
  let oreRaffinery = 300;
  let orePowerplant = 500;
  let oreShipyard = 1000;
  // Verification des minerais , activation ou non du bouton create

  function handleShowm() {
    if (ore >= oreMine) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    setShowm(true);
  }
  // Verification des minerais , activation ou non du bouton create
  function handleShowr() {
    if (ore >= oreRaffinery) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    setShowr(true);
  }
  // Verification des minerais , activation ou non du bouton create
  function handleShows() {
    if (ore >= oreShipyard) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    setShows(true);
  }
// Verification des minerais , activation ou non du bouton create
  function handleShowp() {
    if (ore >= orePowerplant) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    setShowp(true);
  }
  function Create(building) {
    if (building == "mine") {
      console.log("code pour enlever les minerais. mine");
    } else if (building == "raffinery") {
      console.log("code pour enlever les minerais. raffinery");
    } else if (building == "powerplant") {
      console.log("code pour enlever les minerais. powerplant");
    } else if (building == "shipyard") {
      console.log("code pour enlever les minerais. shipyard");
    }

    var myHeaders = new Headers();
    const items = JSON.parse(localStorage.getItem("token"));
    myHeaders.append("Authorization", `Bearer ${items} `);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`http://127.0.0.1:8000/api/structures/${building}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        // Reload à modifier, CreateBuilding Component en dehors du composant principal,pour éviter d'avoir le renderMyArray au même endroit que les boutons
        window.location.reload();
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="row">
      <div className="col-3">
        <Button
          className="btn btn-dark border border-warning"
          onClick={handleShowm}
        >
          Mine
        </Button>
        <Modal show={showm} onHide={handleClosem}>
          <Modal.Header closeButton>
            <Modal.Title>*Men at work*</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you really want to create this Mine ?</Modal.Body>
          <Modal.Body>
            🪙: <strong>{oreMine}</strong> Ore Units <br /> ⚡:
            <strong>1</strong> Energy Units <br /> 🕐:<strong>1</strong> hour{" "}
          </Modal.Body>
          <Modal.Footer>
            <p>
              You have 🪙: <strong>{ore}</strong> Ore Units
            </p>
            <Button variant="secondary" onClick={handleClosem}>
              Close
            </Button>
            <Button
              variant="success"
              id={oreMine}
              onClick={() => {
                Create("mine");
                handleClosem();
              }}
              disabled={isDisabled ? true : false}
            >
              Create 🏗️
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="col-3">
        <Button
          className="btn btn-dark border border-warning"
          onClick={handleShowr}
        >
          Raffinery
        </Button>
        <Modal show={showr} onHide={handleCloser}>
          <Modal.Header closeButton>
            <Modal.Title>*Men at work*</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you really want to create this Raffinery ?</Modal.Body>
          <Modal.Body>
            🪙: <strong>{oreRaffinery}</strong> Ore Units <br /> ⚡:
            <strong>2</strong> Energy Units <br /> 🕐:<strong>1</strong> hour{" "}
          </Modal.Body>
          <Modal.Footer>
            <p>
              You have 🪙: <strong>{ore}</strong> Ore Units
            </p>
            <Button variant="secondary" onClick={handleCloser}>
              Close
            </Button>
            <Button
              variant="success"
              id={oreRaffinery}
              onClick={() => {
                Create("raffinery");
                handleCloser();
              }}
              disabled={isDisabled ? true : false}
            >
              Create 🏗️
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="col-3">
        <Button
          className="btn btn-dark border border-warning"
          onClick={handleShowp}
        >
          PowerPlant
        </Button>
        <Modal show={showp} onHide={handleClosep}>
          <Modal.Header closeButton>
            <Modal.Title>*Men at work*</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Do you really want to create this PowerPlant ?
          </Modal.Body>
          <Modal.Body>
            🪙: <strong>{orePowerplant}</strong> Ore Units <br /> ⚡:
            <strong>0</strong> Energy Unit <br /> 🕐:<strong>1</strong> hour{" "}
          </Modal.Body>
          <Modal.Footer>
            <p>
              You have 🪙: <strong>{ore}</strong> Ore Units
            </p>
            <Button variant="secondary" onClick={handleClosep}>
              Close
            </Button>
            <Button
              variant="success"
              id={orePowerplant}
              onClick={() => {
                Create("powerplant");
                handleClosep();
              }}
              disabled={isDisabled ? true : false}
            >
              Create 🏗️
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="col-3">
        <Button
          className="btn btn-dark border border-warning"
          onClick={handleShows}
        >
          Shipyard
        </Button>
        <Modal show={shows} onHide={handleCloses}>
          <Modal.Header closeButton>
            <Modal.Title>*Men at work*</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you really want to create this Shipyard ?</Modal.Body>
          <Modal.Body>
            🪙: <strong>{oreShipyard}</strong> Ore Units <br /> ⚡:
            <strong>0</strong> Energy Unit <br /> 🕐:<strong>1</strong> hour
          </Modal.Body>
          <Modal.Footer>
            <p>
              You have 🪙: <strong>{ore}</strong> Ore Units
            </p>
            <Button variant="secondary" onClick={handleCloses}>
              Close
            </Button>
            <Button
              variant="success"
              id={oreShipyard}
              onClick={() => {
                Create("shipyard");
                handleCloses();
              }}
              disabled={isDisabled ? true : false}
            >
              Create 🏗️
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default CreateBuilding;
