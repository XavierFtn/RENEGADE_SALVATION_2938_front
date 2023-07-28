import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
function MShipsDetails(props) {
  return (
    <Card style={{ width: "68rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.quantity}</ListGroup.Item>
        <ListGroup.Item>{props.cost}</ListGroup.Item>
        <ListGroup.Item>{props.fuel_consumption}</ListGroup.Item>
        <ListGroup.Item>{props.energy_consumption}</ListGroup.Item>
        <ListGroup.Item>{props.created_at}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default MShipsDetails;
