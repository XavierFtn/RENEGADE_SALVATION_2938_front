
import moment from 'moment/moment';
import { useEffect, useRef } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function MBuildings(props){
  
  //Utilisation de useRef pour afficher la possibilité de Supprimer ou pas si
  // le Batiment est encore en construction.
  const wait = useRef()
  const finish = useRef()
  function Display() {
  var now =  moment().format('YYYY-MM-DD hh:mm ');
  var build = moment(props.created_at).add(1,'hours').hours();

  if (now > build){var time = false;}
  else {time = true;}

    if ( time == true) {
        wait.current.style.display = "none";
        finish.current.style.display = "block";   
    }
    else {
        wait.current.style.display = "block";
        finish.current.style.display = "none";
    }
}
  useEffect(() => { Display() },)
    return (
    <div>
      <Card border="danger" style={{ width: '18rem' }}>
        <Card.Header>Type: {props.type} </Card.Header>
        <Card.Body>
          <Card.Title>level: {props.level}</Card.Title>
          <Card.Text> Energy Consumption: {props.energy_consumption}
          </Card.Text>
            <Button variant="primary">Learn More</Button>
          <div ref={finish}>
            <Button variant="danger">Delete</Button>
          </div >
          <div ref={wait}>
          <ProgressBar animated now={45} />
          </div>
        </Card.Body>
      </Card>
      <br />
    </div> 
      );


}

export default MBuildings