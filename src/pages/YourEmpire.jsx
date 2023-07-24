import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";
// import Warehouses from "../models/ModelsBuildings/
import ViewRessources from "../Components/Ressources/ViewRessources";
import BackgroundVideo from "../models/ModelsBackground.jsx";
{/*import MShips from "../models/warfleet/ModelShips.jsx";*/} 

function YourEmpire() {

    return(
        <div className="container m-5">
        <Header/>
        {/* <Menu/> */}
        <h1>YOUR EMPIRE</h1>
        <BackgroundVideo/>
        <div className="m-3">
            <h1>Your are here:</h1>
            {/* afficher carte */}
            </div>
            <div className="m-3">
            <h1>Your warehouses:</h1>
            {/* <Warehouses/> */}
            </div>
            <div className="m-3">
            <h1>Your Resources:</h1>
            <ViewRessources/>

            </div>
            <div className="m-3">
            <h1>Your ships:</h1>
            {/* <MShips/>  */} 
            </div>
            <div className="m-3">
            <h1>Your past battles:</h1>
            {/* <Battles/>  */} 
            </div>
        <Footer/>
    </div>
    )
}
export default YourEmpire;
