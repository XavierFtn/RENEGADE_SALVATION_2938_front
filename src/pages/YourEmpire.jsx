/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 24/07/2023 - 14:55:36
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/07/2023
    * - Author          : 
    * - Modification    : 
**/
import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";
// import Warehouses from "../models/ModelsBuildings/
import ViewRessources from "../Components/Ressources/ViewRessources";
import BackgroundVideo from "../models/ModelsBackground.jsx";
/*import MShips from "../models/warfleet/ModelShips.jsx";*/
import { Card } from "react-bootstrap";

function YourEmpire() {

    return (
        <div className="container m-5">
            <Header/>
            
            <BackgroundVideo/>
        
        <h1>YOUR EMPIRE</h1>

        <div className="row m-3">
            <div className="row wrap">
                <div className="col-md-6">
                    <Card className="text-center">
                        <Card.Header className="py-0 ">
                            <h1 className="orbitron">You are here:</h1>
                        </Card.Header>
                        <Card.Body>
                            afficher carte
                        </Card.Body>
                    </Card>
                </div>
                    <div className="col-md-6">
                        <Card className="text-center">
                            <Card.Header className="py-0 ">
                                <h1 className="orbitron">Your Resources:</h1>
                            </Card.Header>
                            <Card.Body>
                                <ViewRessources/>
                            </Card.Body>
                        </Card>
                    </div> 
            </div>
            <div className="row m-3">
                <div className="row wrap justify-content-center">
                    <div className="col-md-4 justify-content-center">
                        <Card className="text-center">
                            <Card.Header className="py-0 ">
                                <h1 className="orbitron">Your ships:</h1>
                            </Card.Header>
                            <Card.Body>
                                {/* <MShips/>   */}
                            </Card.Body>
                        </Card>
                    </div> 
                    <div className="col-md-4">
                    <Card className="text-center">
                        <Card.Header className="py-0 ">
                            <h1 className="orbitron">Your warehouses:</h1>
                        </Card.Header>
                        <Card.Body>
                            {/* <Warehouses/> */}
                        </Card.Body>
                    </Card>
                </div>
                        <div className="col-md-4">
                            <Card className="text-center">
                                <Card.Header className="py-0 ">
                                    <h1 className="orbitron">Your past battles:</h1>
                                </Card.Header>
                                <Card.Body>
                                    {/* <Battles/>   */}
                                </Card.Body>
                            </Card>
                        </div>
                    </div> 
                </div>
        <Footer/>
    </div>
    </div>
    );
}

export default YourEmpire;
