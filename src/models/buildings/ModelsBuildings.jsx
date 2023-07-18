
import ListGroup from 'react-bootstrap/ListGroup';


function MBuildings(props){

    return (
       
              <ListGroup>
                <ListGroup.Item action href="#link1">
                  <p>Type : {props.type} Level : {props.level} Energy Consumption: {props.energy_consumption} </p>
                </ListGroup.Item>
              </ListGroup>
           
      );


}

export default MBuildings