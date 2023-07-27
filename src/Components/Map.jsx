
import React, { useState, useEffect } from 'react';
import { Stage, Layer, Circle } from 'react-konva';


function Map() {
  const [userCoords, setUserCoords] = useState([]);
  const token = JSON.parse(sessionStorage.getItem("token"));

  const getMyPoints = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(
      "http://127.0.0.1:8000/api/planetary-systems",
      options
    );
    const data = await response.json();
    console.log("data", data);
    // Supposons que les données renvoyées par l'API sont sous forme d'un objet avec une propriété "planetarySystems" qui contient le tableau des systèmes planétaires
    const { planetarySystems } = data;
    // Récupérer les coordonnées de tous les systèmes planétaires
    setUserCoords(planetarySystems.map(system => ({ x: system.x_coord, y: system.y_coord })));
  }

  useEffect(() => {
    // Faites une requête à votre API pour récupérer les coordonnées des utilisateurs
    getMyPoints();
  }, []);

  return (
    <Stage width={999} height={999}>
      <Layer>
        {userCoords.map((userCoord, index) => (
          <Circle

            key={index}
            x={userCoord.x}
            y={userCoord.y}
            radius={10}
            fill="red"
            stroke="green"
            strokeWidth={1}
          />
        ))}
      </Layer>
    </Stage>
  );
}

export default Map;
