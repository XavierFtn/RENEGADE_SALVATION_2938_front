import { Button, Card } from "react-bootstrap";
import Footer from "../models/ModelsFooter";
import Header from "../models/ModelsHeader";

function Stripe() {
  return (
    <div className="container-fluid">
      <Header name="Links Payments " />
      <div className="col">
        <div className="row  mb-5"></div>

        <div className=" col-auto ">
          <h1 className="orbitron3">WIP</h1>
          <div className="row">
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src="src\Components\img\stone.png" />
              <Card.Body>
                <Card.Title>Buy Ore</Card.Title>
                <Card.Text>Blbablablabla</Card.Text>
                <Button variant="warning" href="">
                  Payment
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src="src\Components\img\jerrycan.png" />
              <Card.Body>
                <Card.Title>Buy Fuel</Card.Title>
                <Card.Text>Blbablablabla</Card.Text>
                <Button variant="warning" href="">
                  Payment
                </Button>
              </Card.Body>
            </Card>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Stripe;
