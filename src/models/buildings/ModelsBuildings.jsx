/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 19/07/2023 - 13:59:22
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 19/07/2023
 * - Author          :
 * - Modification    :
 **/

import ListGroup from "react-bootstrap/ListGroup";

function MBuildings(props) {
  return (
    <ListGroup>
      <ListGroup.Item action href="#link1">
        <p>
          Type : {props.type} Level : {props.level} Energy Consumption:{" "}
          {props.energy_consumption}{" "}
        </p>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default MBuildings;
