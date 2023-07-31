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
                <Card.Title>
                  <div className="orbitron">Buy Ore</div>
                </Card.Title>
                <Card.Text>
                  <div className="orbitron">1000 Ore</div>
                </Card.Text>
                <Button
                  variant="warning"
                  href="https://buy.stripe.com/test_14kcQ29Tl6kQgtq001"
                >
                  Payment
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src="src\Components\img\jerrycan.png" />
              <Card.Body>
                <Card.Title>
                  <div className="orbitron">Buy Fuel</div>
                </Card.Title>
                <Card.Text>
                  <div className="orbitron">1000 Fuel</div>
                </Card.Text>
                <Button
                  variant="warning"
                  href="https://buy.stripe.com/test_cN25nAaXp4cI0us4gi"
                >
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
