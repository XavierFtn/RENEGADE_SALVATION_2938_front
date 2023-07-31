import { Accordion, Card } from "react-bootstrap";
import Footer from "../models/ModelsFooter";
import Header from "../models/ModelsHeader";
import ViewBattles from "../Components/Battles/ViewBattles";
import { useEffect, useState } from "react";
import { getRounds } from "../Components/Api/backend_helper";

function History() {
  const [rounds, setRounds] = useState([]);
  useEffect(() => {
    getRounds().then((result) => {
      console.log("rounds", result.round);
      setRounds(result.round);
    });
  }, []);
  return (
    <div className="container-fluid">
      <Header name="Battle History " />
      <div className="col">
        <div className="row  mb-5"></div>

        <div className=" col-auto ">
          <Card>
            <Accordion className="bg-dark" defaultActiveKey="0">
              <ViewBattles battle={rounds} />
            </Accordion>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default History;
