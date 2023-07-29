import { Accordion, Card } from "react-bootstrap";
import Footer from "../models/ModelsFooter";
import Header from "../models/ModelsHeader";
import ViewBattles from "../Components/Battles/ViewBattles";

function History() {
  return (
    <div className="container-fluid">
      <Header name="Battle History " />
      <div className="col">
        <div className="row  mb-5">
            
        </div>

        <div className=" col-auto ">
        <Card><Accordion className="bg-dark"  defaultActiveKey="0">
           <ViewBattles/>
          </Accordion></Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default History;
