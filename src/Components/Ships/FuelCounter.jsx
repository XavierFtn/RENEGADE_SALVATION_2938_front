// Counter.js
import Counter from "./counter";
import React, { useState } from "react";
import ViewShips from "./ViewShips";

const FuelCounter = () => {
  // State to keep track of the counter value
  const [Counter, setCounter] = useState(0);
  const [fighter, setFighter] = useState(1);
  const [frigate, setFrigate] = useState(2);
  const [cruiser, setCruiser] = useState(4);
  const [destroyer, setDestroyer] = useState(8);

  // Function to increment the counter
  const multiplication = () => {
    setCounter(
      Counter +
        fighter(setFighter) * fuelConsumption +
        frigate(setFrigate) * fuelConsumption +
        cruiser(setCruiser) * fuelConsumption +
        destroyer(setDestroyer) * fuelConsumption
    );
  };

  return (
    <div>
      <ViewShips />
      <div className="orbitron">Current Count: {Counter}</div>
      <button onClick={multiplication}>Submit</button>
    </div>
  );
};

export default FuelCounter;
