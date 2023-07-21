import MShips from "../models/warfleet/ModelShips";
import { useEffect, useState } from "react";

function Warfleet() {
  const [warfleet, setWarFleet] = useState([]);

  async function MShips() {
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
    console.log("reponse Ships", response);
    let donnees = await response.json();
    console.log("données Ships", donnees);
    setShips(donnees);
  }
  useEffect(() => {
    MShips();
  }, []);
  async function handleShipsDelete(id) {
    await fetch(`http://127.0.0.1:8000/api/Ships/${id}`, {
      method: "DELETE",
    });
    MShips();
  }

  const RenderMyArray = () => {
    return Ship.map((item, id) => {
      return (
        <MShips
          key={id}
          id={item.id}
          type={item.type}
          fuel={item.fuelConsumption}
          energyConsumption={item.energyConsumption}
          onDelete={() => handleShipsDelete(item.id)}
        />
      );
    });
  };
  return (
    <div>
      {" "}
      <RenderMyArray />
    </div>
  );
}

export default Warfleet;
