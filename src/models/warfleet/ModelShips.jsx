import ListGroup from "react-bootstrap/ListGroup";

function MShips(props) {
  return (
    <ListGroup>
      <ListGroup.Item action href="#link1">
        <p>
          Type : {props.type} fuel : {props.fuel_consumption} Energy
          Consumption: {props.energy_consumption}{" "}
        </p>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default MShips;
