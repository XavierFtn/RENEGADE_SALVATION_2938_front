import { Card } from "react-bootstrap";
import Header from "../models/ModelsHeader";

function EndBattle(props) {
  let header = "";
  let title = "";
  let color = "";

  if (props.win === 0) {
    color = "success"
    header = "Your empire is getting stronger!";
    title = "Congratulations!";
  }

  else {
    color = "danger"
    header = "Oh no, you lost too many ships!"
    title = "Better luck next time!";
  }

  return (
    <div className="container-fluid">
      <Header name="Space Ranger Report  " />
      <div className="col">
        <div className="row  mb-5"></div>
        <div className=" col-auto ">
          <Card
            bg={color}
            text="white"
            style={{ width: "60rem" }}
            className="mb-2"
          >
            <Card.Header>{header}</Card.Header>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                You attacked {props.planet_defender_system},
                {props.attack_ship_remaining} came back in your system,
                {props.defender_ships_remaining} came back in the {props.planet_defender_system} system.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default EndBattle;
