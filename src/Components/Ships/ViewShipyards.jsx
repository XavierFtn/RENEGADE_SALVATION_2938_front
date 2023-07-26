import { useEffect, useState } from "react";
import ModelShipyard from "../../models/Ships/ModelShipyard";

function ViewShipyards(){
const [shipyard,setShipyard] =useState([]);

async function Display(){
    var myHeaders = new Headers();
    const items = JSON.parse(sessionStorage.getItem("token"));
    myHeaders.append("Authorization", `Bearer ${items} `);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    let response = await fetch(
      `http://127.0.0.1:8000/api/shipyard/`,
      requestOptions
    );
    console.log("reponse shipyard", response);
    let donnees = await response.json();
    console.log("données shipyard", donnees);
    setShipyard(donnees);

}
useEffect(() => {
    Display();
  }, []);

  const RenderMyArray = () => {
    return shipyard.map((item, id) => (
      
      <ModelShipyard
        key={id}
        id={item.id}
        type={item.type}
        update={item.updated_at}/>
       
    ));
  };
  return (
    <div>
      <RenderMyArray  />
    </div>
  );
}
export default ViewShipyards