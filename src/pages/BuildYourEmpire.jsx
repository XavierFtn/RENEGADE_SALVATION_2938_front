

import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";
import Buildings from "../Components/Buildings/ViewBuildings";
import Cbuilding from "../Components/Buildings/CreateBuildings";
import {  Card } from "react-bootstrap";



function BuildYourEmpire (){

    return(
        <div className="container-fluid">

            <Header/>
            <div className="row mt-5 pt-2" >
                <div className="col d-flex justify-content-center">
                    <h1 className="orbitron">Build Your Empire!</h1>
                </div>
            </div>
            <div className="row wrap">
                <div className="col-md-6">
                <Card className="text-center">
                    <Card.Header className="py-0 "><h1 className="orbitron">Create</h1></Card.Header>
                    <Card.Body>
                    <Cbuilding/>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6">          
                    <Card className="text-center">
                        <Card.Header className="py-0 "><h1 className="orbitron">List of Ressources</h1></Card.Header>
                        <Card.Body>
                         <Cbuilding/>        
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="row mb-3"></div>
            <div className="row wrap">
                <div className="col-md-3 ">
                    <Card className="text-center px-0 pt-2">
                        <Card.Header className="py-0 "><h1 className="orbitron">Mine</h1></Card.Header>
                        <Card.Body >
                            <div className="scroll" >
                            <Buildings type={'mine'} />
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card className="text-center px-0 pt-2">
                        <Card.Header className="py-0 "><h1 className="orbitron">PowerPlant</h1></Card.Header>
                        <Card.Body>     
                            <div className="scroll" >
                            <Buildings type={'powerplant'} />
                            </div>   
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                        <Card className="text-center px-0 pt-2">
                            <Card.Header className="py-0 "><h1 className="orbitron">raffinery</h1></Card.Header>
                            <Card.Body>
                                <div className="scroll" >
                                <Buildings type={'raffinery'} />
                                </div>           
                            </Card.Body>
                        </Card>
                </div>
                <div className="col-md-3">
                    
                        <Card className="text-center px-0 pt-2">
                            <Card.Header className="py-0 "><h1 className="orbitron">Shipyard</h1></Card.Header>
                            <Card.Body>
                                <div className="scroll" >
                                <Buildings type={'shipyard'} />
                                </div>           
                            </Card.Body>
                        </Card>
                </div>
            </div>        

            <Footer/>
        </div>
    )
}
export default BuildYourEmpire;