import MShips from "../../models/Ships/ModelShips";
import { useEffect, useState } from "react";

function Ships() {
  const [Ship, setShip] = useState([]);


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
      `http://127.0.0.1:8000/api/Ships/`,
      requestOptions
    );
    console.log("reponse Ships", response);
    let donnees = await response.json();
    console.log("données Ships", donnees);
    setShip(donnees);
  }

  useEffect(() => {
    MShips1();
  }, []);
  

  const RenderMyArray = () => {
    return Ship.map((item, id) => {
      return (
        <MShips
          key={id}
          id={item.id}
          type={item.type}
          fuel={item.fuelConsumption}
          energyConsumption={item.energyConsumption}
          
        />
      );
    });
  };
  return (
    <div>
      <RenderMyArray />
    </div>
  );
}

export default Ships;
