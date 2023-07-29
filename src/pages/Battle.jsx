import React, { useEffect, useState } from "react";
import Ships from "../Components/Ships/ViewShips";
import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";
import { Button, Card, ListGroup } from "react-bootstrap";

const Battle = () => {
  const [ships, setShips] = useState({});
  const [planetarySystems, setPlanetarySystems] = useState([]);
  const [selectedSystem, setSelectedSystem] = useState(null);
  const [selectedShips, setSelectedShips] = useState({});
  const [defenderInfo, setDefenderInfo] = useState(null);
  const token = JSON.parse(sessionStorage.getItem("token")); // Retrieve the token from session storage
  const [battleResult, setBattleResult] = useState(null);
  // Function to fetch ships data from the backend
  const fetchShips = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/ships", {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
      });
      const data = await response.json();
      console.log("ships", data);
      setShips(data.ships); // We update 'ships' with the 'ships' object from the response
    } catch (error) {
      console.error("Erreur lors de la récupération des vaisseaux:", error);
    }
  };

  // Function to fetch planetary systems data from the backend
  const fetchPlanetarySystems = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/planetary-systems",
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        }
      );
      const data = await response.json();
      setPlanetarySystems(data.planetarySystems);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des systèmes planétaires:",
        error
      );
    }
  };

  // Function to handle selecting a planetary system as a target
  const handleSelectSystem = (system) => {
    setSelectedSystem(system);
   
  };

 

  // Function to handle sending the ships to attack
  const handleSendShips = async (selectedSystem.) => {

    try {
      const response = await fetch("http://127.0.0.1:8000/api/attack", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user_id: defenderId,
          ships: selectedShips,
          fuel: 20,
        }),
      });
      const data = await response.json();
      console.log(battleResult, "result");
      // Mettre à jour l'état selectedShips avec les résultats de la bataille
      setBattleResult(data.message);

      // Rafraîchir les données des vaisseaux après la bataille
      fetchShips();
    } catch (error) {
      console.error("Erreur lors de l'envoi des vaisseaux:", error);
    }
  };
  useEffect(() => {
    fetchShips();
    fetchPlanetarySystems();
  }, []);

  return (
    <div>
      <Header name="Battle!" />
      <div className="row mb-5 pt-2"></div>
      <div className="row">
        <div className="col-4 me">
          <Card className="text-center p-1 mb-5 ">
            <Card.Header className="py-0 ">
              <h1 className="orbitron"> Flotte</h1>
            </Card.Header>
            <div className="row">
              <div className="col-8">
                <span className="orbitron4 d-flex justify-content-start">
                  {" "}
                  <Ships type={"fighter"} />
                </span>
              </div>
              <div className="col-3">
                <input placeholder="ships" type="number"  min="1" max="20" />
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <span className="orbitron4 d-flex justify-content-start">
                  <Ships type={"frigate"} />
                </span>
              </div>
              <div className="col-3">
                <input placeholder="ships" type="number"  min="1" max="20" />
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <span className="orbitron4 d-flex justify-content-start">
                  <Ships type={"cruiser"} />
                </span>
              </div>
              <div className="col-3">
                <input placeholder="ships" type="number"  min="1" max="20" />
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <span className="orbitron4 d-flex justify-content-start">
                  <Ships type={"destroyer"} />
                </span>
              </div>
              <div className="col-3">
                <input placeholder="ships" type="number" min="1" max="20" />
              </div>
            </div>
          </Card>
        </div>
        <div className="col-4">
          <Card className="text-center p-1 mb-5">
            <Card.Header className="py-0 ">
              <h1 className="orbitron">Select System</h1>
            </Card.Header>
            <ListGroup>
              {planetarySystems &&
                planetarySystems.map((system) => (
                  <div className=" row mb-1" key={system.id}>
                    <div className="col-9">
                      <span className="orbitron4 d-flex justify-content-start">
                        {system.planetary_system_name} (X: {system.x_coord}, Y:{" "}
                        {system.y_coord})
                      </span>
                    </div>
                    <div className="col-3">
                      <Button
                        variant="light"
                        onClick={() => handleSelectSystem(system)}>
                        Select
                      </Button>
                    </div>
                  </div>
                ))}
            </ListGroup>
          </Card>
        </div>
        <div className="col-4">
          {selectedSystem && (
            <Card className="text-center p-1">
              <Card.Header className="py-0 ">
                <h1 className="orbitron">Selected System</h1>
              </Card.Header>
              <span className="orbitron4">
                <p>Name: {selectedSystem.planetary_system_name}</p>
                <p>X Coord: {selectedSystem.x_coord}</p>
                <p>Y Coord: {selectedSystem.y_coord}</p>
              </span>
              
              
            </Card>
          )}
          
        </div>
        {selectedSystem && !battleResult && (
        <Card>
        
          <Button
                variant="light"
                onClick={() =>
                  selectedSystem.user_id &&
                  handleSendShips(selectedSystem.user_id)
                }
              >
                Attack
              </Button>
          </Card>)}{" "}
          {battleResult && ( <Card>
            <Card
            bg={color}
            text="white"
            style={{ width: "60rem" }}
            className="mb-2"
          >
            <Card.Header></Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                You attacked {battleResult.planet_defender_system},
                {battleResult.attack_ship_remaining} came back in your system,
                {battleResult.defender_ships_remaining} came back in the {battleResult.planet_defender_system} system.
              </Card.Text>
            </Card.Body>
          </Card>
          </Card> )}
      </div>

      <Footer />
    </div>
  );
};

export default Battle;
