import React from "react";
import "./GridComponent.css"; // Make sure to create this CSS file in the same directory as the component

const GridComponent = () => {
  const gridSize = 10; // Set the grid size (both width and height) to 1000

  // Generate an array of numbers from 0 to gridSize - 1
  const gridItems = Array.from(Array(gridSize).keys());

  return (
    <div className="grid-container">
      {gridItems.map((itemX) =>
        gridItems.map((itemY) => (
          <div key={`cell-${itemX}-${itemY}`} className="grid-item">
            {/* 
            For example, you can display the coordinates: {itemX}, {itemY} */}
            <div className="hide">
              <p> gaga </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default GridComponent;
