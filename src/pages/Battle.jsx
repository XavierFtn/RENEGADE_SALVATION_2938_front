import React, { useEffect, useState } from "react";

const Battle = () => {
  const [ships, setShips] = useState({});
  const [planetarySystems, setPlanetarySystems] = useState([]);
  const [selectedSystem, setSelectedSystem] = useState(null);
  const token = JSON.parse(sessionStorage.getItem("token")); // Retrieve the token from session storage

  // Function to fetch ships data from the backend
  const fetchShips = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/ships", {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
      });
      const data = await response.json();
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

  // // Function to handle sending the ships to battle
  // const handleSendShips = async (defenderId) => {
  //   try {
  //     const response = await fetch("http://127.0.0.1:8000/api/battle", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`, // Include the token in the headers
  //       },
  //       body: JSON.stringify({ user_id: defenderId }),
  //     });
  //     const data = await response.json();
  //     console.log(data.message); // Battle result message from the backend
  //     fetchShips(); // Refresh ships data after the battle
  //   } catch (error) {
  //     console.error("Erreur lors de l'envoi des vaisseaux:", error);
  //     setShips([]); // Set an empty array as a fallback on error
  //   }
  // };

  useEffect(() => {
    fetchShips();
    fetchPlanetarySystems();
  }, []);

  return (
    <div>
      <h1>Flotte</h1>
      <ul>
        {Object.entries(ships).map(([shipType, quantity]) => (
          <li key={shipType}>
            Type: {shipType} - Quantity: {quantity}
          </li>
        ))}
      </ul>
      <h1>Attaque</h1>
      <ul>
        {planetarySystems.map((system) => (
          <li key={system.id}>
            {system.name} (X: {system.x_coord}, Y: {system.y_coord})
            <button onClick={() => handleSelectSystem(system)}>Select</button>
          </li>
        ))}
      </ul>
      {selectedSystem && (
        <div>
          <h2>Selected System</h2>
          <p>Name: {selectedSystem.name}</p>
          <p>X Coord: {selectedSystem.x_coord}</p>
          <p>Y Coord: {selectedSystem.y_coord}</p>
          {/* Add more information about the selected system */}
        </div>
      )}
    </div>
  );
};
export default Battle;
