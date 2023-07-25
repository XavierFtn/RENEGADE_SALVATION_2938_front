
import swal from "sweetalert";
import MBuildings from "../../models/buildings/ModelsBuildings";
import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import PropTypes from "prop-types";



function Buildings(props) {
  const navigate = useNavigate();
  const [building, setBuilding] = useState({});
  
  async function Mbuilding1() {
    var myHeaders = new Headers();
    const items = JSON.parse(sessionStorage.getItem("token"));
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
    
      //permet d'intercepter quand le token est expiré
      if (response.status === 401){
        swal("Error", "Session Expired, please connect again", "error");
        navigate('/login');
      }
    
    console.log("données Building", donnees);
    setBuilding(donnees);
  }

  useEffect(() => {
    Mbuilding1();
  }, []);

  // Suppression
  async function BuildingDelete(id) {
    var myHeaders = new Headers();
    const items = JSON.parse(sessionStorage.getItem("token"));
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
// évite les erreur de type: id is missing in props validation
Buildings.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  level: PropTypes.number,
  energy_consumption: PropTypes.number,
  created_at: PropTypes.string,
};

export default Buildings;
