import { Button, Card } from "react-bootstrap";
import Footer from "../models/ModelsFooter";
import Header from "../models/ModelsHeader";
import { useEffect, useState } from "react";
import ViewRessources from "../Components/Ressources/ViewRessources";
import { getRessources } from "../Components/Api/backend_helper";

function Stripe() {
  const [ressources, setRessources] = useState({});

  useEffect(() => {
    getRessources().then((result) => setRessources(result));
  }, []);
  return (
    <div className="container-fluid">
      <Header name="Links Payments " />
      <div className="col mb-5">
        <div className="row  mb-5"></div>

        <div className=" col-auto ">
          <div className="row">
            <Card className="mb-5" style={{ width: "30rem" }}>
              <Card.Img variant="top" src="src\Components\img\stone.png" />
              <Card.Body>
                <Card.Title className="orbitron2">Buy Ore</Card.Title>
                <Card.Text className="orbitron5">Blbablablabla</Card.Text>
                <Button className="orbitron5" variant="warning" href="">
                  Payment
                </Button>
              </Card.Body>
            </Card>
            <Card className="mb-5" style={{ width: "30rem" }}>
              <Card.Img variant="top" src="src\Components\img\jerrycan.png" />
              <Card.Body>
                <Card.Title className="orbitron2">Buy Fuel</Card.Title>
                <Card.Text className="orbitron5">Blbablablabla</Card.Text>
                <Button className="orbitron5" variant="warning" href="">
                  Payment
                </Button>
              </Card.Body>
            </Card>
            <div className="row mb-5">
              <ViewRessources ressources={ressources} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Stripe;
