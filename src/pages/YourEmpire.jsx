/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 24/07/2023 - 15:37:26
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
import Ships from "../Components/Ships/ViewShips";
import YourMap from "../Components/YourMap";
import { Card } from "react-bootstrap";

function YourEmpire() {

    return (
        <div className="container m-5">
            <Header/>
            
            <BackgroundVideo/>
        
        <div className="row m-3">
            <div className="row wrap">
                <div className="col-md-6">
                    <Card className="text-center">
                        <Card.Header className="py-0 ">
                            <h1 className="orbitron">You are here:</h1>
                        </Card.Header>
                        <Card.Body>
                        <YourMap />
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
                            <Ships type={"fighter"} />
                            <Ships type={"frigate"} />
                            <Ships type={"cruiser"} />
                            <Ships type={"destroyer"} />
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
