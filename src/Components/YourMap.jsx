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
import React, { useState, useEffect } from 'react';
import { Stage, Layer, Circle } from 'react-konva';

function YourMap() {
  const [userCoords, setUserCoords] = useState([]);
  const token= JSON.parse(sessionStorage.getItem('"token"'));

  useEffect(() => {
    // Faites une requête à votre API pour récupérer les coordonnées des utilisateurs
    fetch('/api/planetary-systems')
      .then(response => response.json())
      .then(data => {
        // Supposons que votre API renvoie les données au format JSON avec la clef "user"
        setUserCoords({ x: data.user.x_coord, y: data.user.y_coord });
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des coordonnées utilisateur:', error);
      });
  }, []);

  return (
    <Stage width={999} height={999}>
      <Layer>
        {userCoords.map((userCoord, index) => (
          <Circle

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

export default YourMap;