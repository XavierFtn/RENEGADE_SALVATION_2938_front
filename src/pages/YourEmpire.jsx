/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 24/07/2023 - 09:08:31
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

import BackgroundVideo from "../models/ModelsBackground.jsx";
import MRessources from "../models/ressources/ModelRessources.jsx";
import MShips from "../models/warfleet/ModelShips.jsx";

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
            <MRessources/> 
            </div>
            <div className="m-3">
            <h1>Your ships:</h1>
            <MShips/>  
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
