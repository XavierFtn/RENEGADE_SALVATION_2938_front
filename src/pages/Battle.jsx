import { useEffect, useState } from "react";
import Ships from "../Components/Ships/ViewShips";
import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";
import { Button, Card, ListGroup } from "react-bootstrap";
import {
  getShips,
  getPlanetary1,
  createAttack,
} from "../Components/Api/backend_helper";

const Battle = () => {
  const [planetarySystems, setPlanetarySystems] = useState([]);
  const [selectedSystem, setSelectedSystem] = useState(null);
  const [selectedFighter, setSelectedFighter] = useState(0);
  const [selectedFrigate, setSelectedFrigate] = useState(0);
  const [selectedCruiser, setSelectedCruiser] = useState(0);
  const [selectedDestroyer, setSelectedDestroyer] = useState(0);
  const [battleResult, setBattleResult] = useState(null);
  const user_id = JSON.parse(sessionStorage.getItem("id"));

  const [maxfighter, setMaxFighter] = useState();
  const [maxfrigate, setMaxFrigate] = useState();
  const [maxcruiser, setMaxCruiser] = useState();
  const [maxdestroyer, setMaxDestroyer] = useState();
  const [color, setColor] = useState();
  const [win, setWin] = useState();
  const [title, setTitle] = useState();
  const [ships, setShips] = useState({});
  useEffect(() => {
    getPlanetary1().then((result) => {
      const filterResult = result.planetarySystems.filter(
        (f) => f.user_id != user_id
      );
      setPlanetarySystems(filterResult);
    });
    getShips().then((ships) => {
      setShips(ships);
      setMaxFighter(ships.fighter[0].quantity);
      setMaxFrigate(ships.frigate[0].quantity);
      setMaxCruiser(ships.cruiser[0].quantity);
      setMaxDestroyer(ships.destroyer[0].quantity);
    });
  }, []);

  // Selection du Système
  const handleSelectSystem = (system) => {
    setSelectedSystem(system);
  };

  // Attaque
  function handleSendShips(defenderId) {
    var formdata = new FormData();
    formdata.append("defender_id", defenderId);
    formdata.append("nb_fighter", selectedFighter);
    formdata.append("nb_frigate", selectedFrigate);
    formdata.append("nb_cruiser", selectedCruiser);
    formdata.append("nb_destroyer", selectedDestroyer);
    formdata.append("fuel_needed", "20");

    createAttack(formdata).then((result) => {
      // Mettre à jour l'état selectedShips avec les résultats de la bataille
      setBattleResult(result);

      if (result.attack_ship_remaining == 0) {
        setColor("danger");
        setWin("Oh no!  You Fail🪦");
        setTitle("God");
      } else {
        setColor("success");
        setWin("Oh yes!  You Win Space Ranger!😌");
        setTitle("Congrats!");
      }
      // Rafraîchir les données des vaisseaux après la bataille
      getShips().then((ships) => {
        setShips(ships);
        setMaxFighter(ships.fighter[0].quantity);
        setMaxFrigate(ships.frigate[0].quantity);
        setMaxCruiser(ships.cruiser[0].quantity);
        setMaxDestroyer(ships.destroyer[0].quantity);
      });
    });
  }

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
                  <Ships type={"fighter"} ships={ships} />
                </span>
              </div>
              <div className="col-3">
                <input
                  value={selectedFighter}
                  name="nb_fighter"
                  id="fighter"
                  placeholder="ships"
                  type="number"
                  min="0"
                  max={maxfighter}
                  onChange={(e) => setSelectedFighter(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <span className="orbitron4 d-flex justify-content-start">
                  <Ships type={"frigate"} ships={ships} />
                </span>
              </div>
              <div className="col-3">
                <input
                  value={selectedFrigate}
                  name="nb_frigate"
                  id="frigate"
                  placeholder="ships"
                  type="number"
                  min="0"
                  max={maxfrigate}
                  onChange={(e) => setSelectedFrigate(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <span className="orbitron4 d-flex justify-content-start">
                  <Ships type={"cruiser"} ships={ships} />
                </span>
              </div>
              <div className="col-3">
                <input
                  value={selectedCruiser}
                  name="nb_cruiser"
                  id="cruiser"
                  placeholder="ships"
                  type="number"
                  min="0"
                  max={maxcruiser}
                  onChange={(e) => setSelectedCruiser(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <span className="orbitron4 d-flex justify-content-start">
                  <Ships type={"destroyer"} ships={ships} />
                </span>
              </div>
              <div className="col-3">
                <input
                  value={selectedDestroyer}
                  name="nb_destroyer"
                  id="destroyer"
                  placeholder="ships"
                  type="number"
                  min="0"
                  max={maxdestroyer}
                  onChange={(e) => setSelectedDestroyer(e.target.value)}
                />
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
              {planetarySystems.map((system) => (
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
                      onClick={() => handleSelectSystem(system)}
                    >
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
          </Card>
        )}{" "}
        {battleResult && (
          <Card>
            <Card
              bg={color}
              text="white"
              style={{ width: "60rem" }}
              className="mb-2"
            >
              <Card.Header>{win}</Card.Header>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  <span className="orbitron4">
                    <p>
                      You attacked{" "}
                      <span className="orbitron5">
                        {battleResult.planet_defender_system}
                      </span>
                    </p>
                    <p>
                      <span className="orbitron5">
                        {battleResult.attack_ship_remaining}
                      </span>{" "}
                      came back in your system,
                    </p>
                    <p>
                      <span className="orbitron5">
                        {battleResult.defender_ship_remaining}
                      </span>{" "}
                      came back in the
                      <span className="orbitron5">
                        {" "}
                        {battleResult.planet_defender_system}{" "}
                      </span>
                      system.
                    </p>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Card>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Battle;
