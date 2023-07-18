import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function MBuildingsDetails(props){

    return (
        <Card style={{ width: '68rem' }}>
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus reprehenderit voluptatibus magnam, debitis ut quasi officia molestiae facere repudiandae harum iure quia doloremque, fugit accusantium? Excepturi animi consequatur fuga saepe.</p>>
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{props.energy}</ListGroup.Item>
            <ListGroup.Item>{props.level}</ListGroup.Item>
            <ListGroup.Item>{props.construction_time}</ListGroup.Item>
          </ListGroup>
        </Card>
      );
}


export default MBuildingsDetails