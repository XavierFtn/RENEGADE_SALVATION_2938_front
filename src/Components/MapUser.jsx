import React, { useState, useEffect } from "react";
import { Stage, Layer, Circle, Text } from "react-konva";
import { getPlanetary1 } from "../Components/Api/backend_helper";
function MapUser() {
  const [userCoords, setUserCoords] = useState([]);
  const userId = JSON.parse(sessionStorage.getItem("id")).toString(); // Convert userId to string

  useEffect(() => {
    getPlanetary1().then((result) => {
      const filterResult = result.planetarySystems.filter(
        (f) => f.user_id == userId
      );
      setUserCoords(
        filterResult.map((system) => ({
          id: system.id,
          x: system.x_coord,
          y: system.y_coord,
          name: system.planetary_system_name,
        }))
      );
    });
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
              strokeWidth={1}
            />
            <Text
              x={userCoord.x + 12}
              y={userCoord.y - 5}
              text={userCoord.name}
              fontSize={14}
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
