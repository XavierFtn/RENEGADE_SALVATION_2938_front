import Footer from "../models/ModelsFooter";
import "../Components/style/home.css";

import Header from "../models/ModelsHeader";
import { useEffect } from "react";

function Home() {
 

  useEffect(() => {
    
   
  }, []);
  return (
    <div className="container-fluid">
      <Header/>
      <div className="col">
        <div className="row  mb-5"></div>

          <div className=" row ">
            <img  src="src/Components/img/renegade-logo.jpg"/>
            <p className="orbitron">Seize your future through space conquest and begin THE GREATEST ADVENTURE</p>
            <br />
            <br />
            
           
          </div>
        
      </div>  
      <Footer />
    </div>
  );
}
export default Home;
