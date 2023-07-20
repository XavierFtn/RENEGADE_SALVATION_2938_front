import MBuildings from "../../models/buildings/ModelsBuildings";
import { useEffect, useState } from "react";
import Cbuilding from "./CreateBuildings";

function Buildings(props) {
  const [building, setBuilding] = useState({});
  const [updated,setUpdated] = useState(false);
  useEffect(() => {
    Mbuilding1();
  },[updated]);
  
  async function Mbuilding1() {
    var myHeaders = new Headers();
    const items = JSON.parse(localStorage.getItem("token"));
    myHeaders.append("Authorization", `Bearer ${items} `);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    let response = await fetch(
      `http://127.0.0.1:8000/api/structures/`,
      requestOptions
    );
    console.log("reponse Builiding", response);
    let donnees = await response.json();
    console.log("données Building", donnees);
    setBuilding(donnees);
  }

  useEffect(() => {
    Mbuilding1();
  }, []);

  // Suppression
  async function BuildingDelete(id) {
    var myHeaders = new Headers();
    const items = JSON.parse(localStorage.getItem("token"));
    myHeaders.append("Authorization", `Bearer ${items} `);

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };
    await fetch(`http://127.0.0.1:8000/api/structures/${id}`,
     requestOptions 
      );
    Mbuilding1();
  }

  

  const RenderMyArray = () => {
  


    let b = [];
    if (props.type === "mine") {
      b = building.mine || [];
    } else if (props.type === "raffinery") {
      b = building.raffinery || [];
    } else if (props.type === "shipyard") {
      b = building.shipyard || [];
    } else {
      b = building.powerplant || [];
    }
   
    return b.map((item, id) => (
      <MBuildings
        key={id}
        id={item.id}
        type={item.type}
        level={item.level}
        energy_consumption={item.energy_consumption}
        created_at={item.created_at}
        onDelete={() => BuildingDelete(item.id)}
      />
    ));
  };


  return (
    <div>
       
            <RenderMyArray />
    
    </div>
  );
}

export default Buildings;
