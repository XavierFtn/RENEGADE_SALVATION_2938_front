
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