import React, { useState, useEffect } from 'react';
import { Stage, Layer, Circle } from 'react-konva';

function Map() {
  const [user1Coords, setUser1Coords] = useState({ x: 222, y: 22 });
  const [user2Coords, setUser2Coords] = useState({ x: 250, y: 50 });

  useEffect(() => {
    // Faites une requête à votre API pour récupérer les coordonnées des utilisateurs
    fetch('/api/planetary-systems')
      .then(response => response.json())
      .then(data => {
        // Supposons que votre API renvoie les données au format JSON avec les clés "user1" et "user2"
        setUser1Coords({ x: data.user1.x_coord, y: data.user1.y_coord });
        setUser2Coords({ x: data.user2.x_coord, y: data.user2.y_coord });
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des coordonnées des utilisateurs:', error);
      });
  }, []);

  return (
    <Stage width={999} height={999}>
      <Layer>
        <Circle
          x={user1Coords.x}
          y={user1Coords.y}
          radius={10}
          fill="red"
          stroke="green"
          strokeWidth={1}
        />
        <Circle
          x={user2Coords.x}
          y={user2Coords.y}
          radius={10}
          fill="blue"
          stroke="black"
          strokeWidth={1}
        />
      </Layer>
    </Stage>
  );
}

export default Map;
