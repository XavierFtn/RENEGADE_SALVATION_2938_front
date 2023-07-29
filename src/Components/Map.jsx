/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 28/07/2023 - 11:05:08
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/07/2023
    * - Author          : 
    * - Modification    : 
**/

import React, { useState, useEffect } from "react";
import { Stage, Layer, Circle, Text } from "react-konva";

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
    const { planetarySystems } = data;

    // Mettre à jour les coordonnées des utilisateurs avec les informations supplémentaires
    setUserCoords(
      planetarySystems.map((system) => ({
        id: system.id,
        x: system.x_coord,
        y: system.y_coord,
        name: system.planetary_system_name,
      }))
    );
  };

  useEffect(() => {
    getMyPoints();
  }, []);

  const getRandomColor = () => {
    const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
    return color;
  };

  return (
    <Stage width={999} height={999}>
      <Layer>
        {userCoords.map((userCoord, index) => (
          <React.Fragment key={index}>
            <Circle
              x={userCoord.x}
              y={userCoord.y}
              radius={10}
              fill={getRandomColor()}
              stroke="red"
              strokeWidth={2}
            />
            <Text
              x={userCoord.x + 12}
              y={userCoord.y - 5}
              text={userCoord.name}
              fontSize={14}
              font
              fontWeight="bold"
              fill="white"
            />
            <Text
              x={userCoord.x + 5}
              y={userCoord.y + 15}
              text={` (x:${userCoord.x}, y:${userCoord.y})`}
              fontSize={14}
              fontWeight="bold"
              fill="white"
            />
          </React.Fragment>
        ))}
      </Layer>
    </Stage>
  );
}

export default Map;
