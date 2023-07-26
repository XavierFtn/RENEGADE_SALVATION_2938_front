import moment from "moment/moment";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function ModelShipyard(props) {
  var type = "";
  var time ="";
  const [buildMin, setBuildMin] = useState();
  if (props.type === null) {
    type = "Available ✅ ";
  } else {
    type = ` 🛠️ Construction of ${props.type}`;
  }
  var left = "";

  if (props.type == "fighter") {
    left = 1;
  } else if (props.type == "frigate") {
    left = 2;
  } else if (props.type == "cruiser") {
    left = 4;
  } else if (props.type == "destroyer") {
    left = 8;
  }
  function Display() {
    var now = moment();
    var build = moment(props.update).add(left, "hours");
    setBuildMin(build.diff(now, "minutes")); 
    console.log(buildMin);
  }
  if (buildMin <= 0) {
    time = "Ready";

  } else {
    time = ` 🛠️${buildMin}  minutes left`;
  }
  useEffect(() => {
    Display();
  });
  return (
    <div className="btn btn-dark p-1 border m-1 border-warning">
      <p>🏭 Shipyard n° <strong>{props.id}</strong></p>
      <p><strong> {type}</strong></p>
      <p>⌛ {time}</p>
    </div>
  );
}
// évite les erreur de type: id is missing in props validation
ModelShipyard.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  update: PropTypes.string,
};

export default ModelShipyard;
