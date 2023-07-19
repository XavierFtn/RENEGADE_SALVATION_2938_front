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