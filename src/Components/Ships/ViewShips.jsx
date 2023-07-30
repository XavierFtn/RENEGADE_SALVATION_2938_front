/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ModelShips from "../../models/Ships/ModelShips";
import {useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Ships(props) {
  const [ship, setShip] = useState([]);
  const navigate = useNavigate();

  async function MShips1() {
    var myHeaders = new Headers();
    const items = JSON.parse(sessionStorage.getItem("token"));
    myHeaders.append("Authorization", `Bearer ${items} `);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    let response = await fetch(
      `http://127.0.0.1:8000/api/ships/`,
      requestOptions
    );
    console.log("reponse ships", response);
    let donnees = await response.json();
    
      //permet d'intercepter quand le token est expiré
      if (response.status === 401){
        sessionStorage.clear();
        swal("Error", "Session Expired, please connect again", "error");
        navigate('/');
      }
     
    console.log("données ships", donnees);
    setShip(donnees);
  }

  useEffect(() => {
    MShips1();
  }, []);

  const RenderMyArray = () => {
    let s = [];
    if (props.type === "cruiser") {
      s = ship.cruiser || [];
    } else if (props.type === "destroyer") {
      s = ship.destroyer || [];
    } else if (props.type === "fighter") {
      s = ship.fighter || [];
    } else {
      s = ship.frigate || [];
    }
    return s.map((item, id) => {
      return <ModelShips key={id} type={item.type}  quantity={item.quantity} />;
    });
  };
  return (
    <div>
      <RenderMyArray />
    </div>
  );
}
// évite les erreur de type: id is missing in props validation


export default Ships;
