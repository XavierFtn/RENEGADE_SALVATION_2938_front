import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import { Button, ListGroup, Modal, ProgressBar } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function MBuildings(props){
  
  //Utilisation de useState pour afficher la possibilité de Supprimer ou pas si
  // le Batiment est encore en construction.Eviter le UseRef,qui affiche quand même la div.
  const [showWait, setShowWait] = useState(true); 
  const [showFinish, setShowFinish] = useState(false);
  //temps de création
  const [buildMin,setBuildMin]= useState();
  const [percentage,setPercentage]= useState();
  //Modal alert suppression
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function Display() {
    var now = moment();
    var build = moment(props.created_at).add(1, 'hours'); // Temps du created_at avec 1heure supp
    setBuildMin(build.diff(now, 'minutes')); // Temps restant en minutes
    setPercentage(Math.round((100 / 60) * buildMin))
    console.log(buildMin);
    if (buildMin >= 0){
      setShowWait(false);
      setShowFinish(true)}

    else {
      setShowWait(true);
      setShowFinish(false);
      }
}
function handleDeleteClick() {
  props.onDelete(); // Props de la fonction de suppression
}
  useEffect(() => {  Display() },)
  
    return (
    <div>
      <Card bg ="dark" text="light" className="text-center p-0" style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title className=" m-0">{props.type} n°{props.id} </Card.Title>
          <Card.Title className=" m-0">level: {props.level} </Card.Title>             
          <ListGroup >
          {showWait &&<div>
              <Button onClick={handleShow}   variant="danger">Delete</Button>
              <Modal  show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>*Laser Noise*</Modal.Title>
                  </Modal.Header>
                <Modal.Body>Are you sure to delete this {props.type} n° {props.id}  ?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="danger" onClick={() => { handleClose(); handleDeleteClick(); }}>Delete</Button>        </Modal.Footer>
              </Modal>
          </div>}
          {showFinish && <ProgressBar  animated now={percentage} label={`${buildMin} minutes rest.`} />}
         </ListGroup>
        </Card.Body>
      </Card>
      <br />
    </div> 
      );


}

export default MBuildings