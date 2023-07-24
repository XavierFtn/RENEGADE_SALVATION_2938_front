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
import Menu from "../layout/Menu";
import Menu from "../Components/Buildings/ViewBuildings";
import Menu from "../Components/Buildings/CreateBuildings";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function YourEmpire() {

    return (
        <div className="container">
            <Header />
            <Menu />
            <h1>YOUR EMPIRE</h1>
            <Ships />
            <Warehouses />
            <Buildings />
            <Cbuilding />
            <Battles />
            <Footer />
        </div>
    )
}
export default YourEmpire;