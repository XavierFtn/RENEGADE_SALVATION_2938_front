import React, { useState, useEffect } from 'react';
import { Stage, Layer, Circle } from 'react-konva';

function Map() {
  const [user1Coords, setUser1Coords] = useState({ x: 50, y: 60 });
  const [user2Coords, setUser2Coords] = useState({ x: 150, y: 100 });

  useEffect(() => {
    // Faites une requête à votre API pour récupérer les coordonnées du premier utilisateur
    fetch('/api/user1')
      .then(response => response.json())
      .then(data => {
        setUser1Coords({ x: data.x_coord, y: data.y_coord });
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des coordonnées du premier utilisateur:', error);
      });

    // Faites une requête à votre API pour récupérer les coordonnées du deuxième utilisateur
    fetch('/api/user2')
      .then(response => response.json())
      .then(data => {
        setUser2Coords({ x: data.x_coord, y: data.y_coord });
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des coordonnées du deuxième utilisateur:', error);
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
