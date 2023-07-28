import React, { useState, useEffect } from "react";
import { Stage, Layer, Circle, Text } from "react-konva";

function MapUser() {
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

    // Déchiffrer le token pour obtenir l'identifiant de l'utilisateur connecté
    const userId = JSON.parse(atob(token.split(".")[1])).sub;
    console.log(userId);

    // Filtrer les coordonnées pour n'afficher que celles de l'utilisateur actuel
    setUserCoords(
      planetarySystems
        .filter((system) => system.user_id === userId)
        .map((system) => ({
          id: system.id,
          x: system.x_coord,
          y: system.y_coord,
          name: system.planetary_system_name,
        }))
    );
  };

  useEffect(() => {
    getMyPoints();
  }, [token]); // Rafraîchir les coordonnées lorsque le token change (l'utilisateur se connecte)

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
              stroke="green"
              strokeWidth={1}
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

export default MapUser;
