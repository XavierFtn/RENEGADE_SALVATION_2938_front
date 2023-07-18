
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function MBuildings(props){

    return (
    <div>
      <Card border="danger" style={{ width: '18rem' }}>
        <Card.Header>Type: {props.type} </Card.Header>
        <Card.Body>
          <Card.Title>level: {props.level}</Card.Title>
          <Card.Text> Energy Consumption: {props.energy_consumption}
          </Card.Text>
          <Button variant="primary">Learn More</Button>
          <Button variant="danger">Delete</Button>
        </Card.Body>
      </Card>
      <br />
    </div> 
      );


}

export default MBuildings