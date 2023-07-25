import React, { useEffect, useState } from "react";

const Battle = () => {
  const [ships, setShips] = useState({});
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

  // Function to handle sending the ships to battle
  const handleSendShips = async (defenderId) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/battle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
        body: JSON.stringify({ user_id: defenderId }),
      });
      const data = await response.json();
      console.log(data.message); // Battle result message from the backend
      fetchShips(); // Refresh ships data after the battle
    } catch (error) {
      console.error("Erreur lors de l'envoi des vaisseaux:", error);
      setShips([]); // Set an empty array as a fallback on error
    }
  };

  useEffect(() => {
    fetchShips();
  }, []);

  return (
    <div>
      <h1>Flotte</h1>
      <ul>
        {Object.entries(ships).map(([shipType, quantity]) => (
          <li key={shipType}>
            Type: {shipType}, Quantity: {quantity}
          </li>
        ))}
      </ul>
      <h1>Attaque</h1>
      <button onClick={() => handleSendShips(1)}>
        Send Ships to Defender 1
      </button>
      <button onClick={() => handleSendShips(2)}>
        Send Ships to Defender 2
      </button>
      {/* Add more buttons for other defenders if needed */}
    </div>
  );
};

export default Battle;
