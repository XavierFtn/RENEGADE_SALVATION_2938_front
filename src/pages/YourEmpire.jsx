/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 19/07/2023 - 13:52:31
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
import Menu from "../Components/Buildings/ViewBuildings";
import Menu from "../Components/Buildings/CreateBuildings";

function YourEmpire(){

    return(
        <div className="container">
        <Header/>
        <Menu/>
        <h1>YOUR EMPIRE</h1>
            {/* <Ships/> */}
            {/* <Warehouses/> */}
            <Buildings/>  
            <Cbuilding/> 
            {/* <Battles/> */}      
        <Footer/>
    </div>
    )
}
export default YourEmpire;