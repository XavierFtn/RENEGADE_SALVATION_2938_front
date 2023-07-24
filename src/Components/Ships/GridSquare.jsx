import React from "react";

// Represents a grid square with a color
function GridSquare(props) {
  const classes = `grid-square color-${props.color}`;
  return <div className={classes} />;
}

export default GridSquare;
