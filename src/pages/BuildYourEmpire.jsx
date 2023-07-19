/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 19/07/2023 - 13:51:06
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/07/2023
    * - Author          : 
    * - Modification    : 
**/
import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";
import Menu from "../layout/Menu";
import Buildings from "../components/buildings/ViewBuildings";
import Cbuilding from "../components/Buildings/CreateBuildings";


function BuildYourEmpire (){

    return(
        <div className="container">
            <Header/>
            <Menu/>
            <h1>Build Your Empire!</h1>
             <Cbuilding/>
                            <Buildings/>         
            <Footer/>
        </div>
    )
}
export default BuildYourEmpire;