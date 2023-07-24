import React from "react";

class Node extends React.Component {
  // props has x and y number.
  // x stands for row and y for column.
  // (imagine the X and Y coordinates with origin in the upper-left corner of the window and x coordinate directs right and y directs going down)

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="node">
        <div className="node-content"></div>
      </div>
    );
  }
}

export default Node;
