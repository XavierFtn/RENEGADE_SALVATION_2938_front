import { useEffect, useState } from "react";
import Ships from "../Components/Ships/ViewShips";
import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";
import { Button, Card, ListGroup } from "react-bootstrap";

const Battle = () => {
  const [ships, setShips] = useState({});
  const [planetarySystems, setPlanetarySystems] = useState([]);
  const [selectedSystem, setSelectedSystem] = useState(null);
  const [selectedFighter, setSelectedFighter] = useState(0);
  const [selectedFrigate, setSelectedFrigate] = useState(0);
  const [selectedCruiser, setSelectedCruiser] = useState(0);
  const [selectedDestroyer, setSelectedDestroyer] = useState(0);
  const token = JSON.parse(sessionStorage.getItem("token")); // Retrieve the token from session storage
  const [battleResult, setBattleResult] = useState(null);
  const user_id = JSON.parse(sessionStorage.getItem("id"));

  const [maxfighter, setMaxFighter] = useState();
  const [maxfrigate, setMaxFrigate] = useState();
  const [maxcruiser, setMaxCruiser] = useState();
  const [maxdestroyer, setMaxDestroyer] = useState();
  const [color, setColor] = useState();
  const [win, setWin] = useState();
  const [title, setTitle] = useState();
  // Fetch des Vaisseaux
  const fetchShips = async () => {
    try {
      var myHeaders = new Headers();
      const items = JSON.parse(sessionStorage.getItem("token"));
      myHeaders.append("Authorization", `Bearer ${items} `);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      let response = await fetch(
        `http://127.0.0.1:8000/api/ships/`,
        requestOptions
      );

      let data = await response.json();
      setMaxFighter(data.fighter[0].quantity);
      setMaxFrigate(data.frigate[0].quantity);
      setMaxCruiser(data.cruiser[0].quantity);
      setMaxDestroyer(data.destroyer[0].quantity);
      // opération booléen pour vérifier si il y a des vaisseaux pour attaquer
      //  setCanAttack( maxfighter > 0 || maxfrigate > 0 || maxcruiser > 0 || maxdestroyer > 0);
      setShips(data.ships); 
    } catch (error) {
      console.error("Erreur lors de la récupération des vaisseaux:", error);
    }
  };

  // Affichage du système planète
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
      const dataps = data.planetarySystems.filter((f) => f.user_id != user_id);
      setPlanetarySystems(dataps);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des systèmes planétaires:",
        error
      );
    }
  };

  // Selection du Système
  const handleSelectSystem = (system) => {
    setSelectedSystem(system);
  };
  
  // Attaque
  const handleSendShips = async (defenderId) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token} `);
      var formdata = new FormData();
      formdata.append("defender_id", defenderId);
      formdata.append("nb_fighter",  selectedFighter);
      formdata.append("nb_frigate", selectedFrigate);
      formdata.append("nb_cruiser",  selectedCruiser);
      formdata.append("nb_destroyer",  selectedDestroyer);
      formdata.append("fuel_needed",  "20");

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };
      const response = await fetch("http://127.0.0.1:8000/api/attack", requestOptions);
      const data = await response.json();
     
      // Mettre à jour l'état selectedShips avec les résultats de la bataille
      setBattleResult(data);

      if (data.attack_ship_remaining == 0){
        setColor("danger");
        setWin("Oh no!  You Fail🪦")
        setTitle("God")
      }
      else {
        setColor("success");
        setWin("Oh yes!  You Win Space Ranger!😌")
        setTitle("Congrats!")
      }
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
                <input
                  value={selectedFighter}
                  name="nb_fighter"
                  id="fighter"
                  placeholder="ships"
                  type="number"
                  min="0"
                  max={maxfighter}
                  onChange={e =>  setSelectedFighter(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <span className="orbitron4 d-flex justify-content-start">
                  <Ships type={"frigate"} />
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
                  onChange={e => setSelectedFrigate(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <span className="orbitron4 d-flex justify-content-start">
                  <Ships type={"cruiser"} />
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
                  onChange={e =>  setSelectedCruiser(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <span className="orbitron4 d-flex justify-content-start">
                  <Ships type={"destroyer"} />
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
                  onChange={e => setSelectedDestroyer(e.target.value)}
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
                  <p>You attacked <span className="orbitron5">{battleResult.planet_defender_system}</span></p> 
                  <p><span className="orbitron5">{battleResult.attack_ship_remaining}</span> came back in your system,</p>
                  <p><span className="orbitron5">{battleResult.defender_ship_remaining}</span> came back in the 
                  <span className="orbitron5"> {battleResult.planet_defender_system} </span>system.</p>
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
