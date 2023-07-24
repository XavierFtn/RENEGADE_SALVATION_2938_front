import Node from "../Components/Ships/Node";
import React from "react";


function Grid (){
render() {
  console.log(this.state.grid)
  return (
    <div>
      {this.state.grid.map((row, rowIdx) => {
        return; 
        <Node />
      })}
    </div >
  );
}

}


const Grid = () => {
const grid = [];
for (let row = 0; row < 15; row++) {
  const currentRow = [];
  for (let col = 0; col < 50; col++) {
    currentRow.push(createNode(row, col));
  }
  grid.push(currentRow);
  grid.push(currentRow)
  console.log(grid);

}
return grid;
};

const createNode = (row, col) => {
return {
  row,
  col,
};
console.log(row);
console.log(col);
};

export default Grid
