import MShips from "../../models/fleet/ModelShips";
import { useEffect, useState } from "react";

function Ships() {
  const [Ship, setShip] = useState([]);
  const [updated, setUpdated] = useState();
  useEffect(() => {
    MShips1();
  }, [updated]);

  async function MShips1() {
    var myHeaders = new Headers();
    const items = JSON.parse(localStorage.getItem("token"));
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
  async function ShipDelete(id) {
    var myHeaders = new Headers();
    const items = JSON.parse(localStorage.getItem("token"));
    myHeaders.append("Authorization", `Bearer ${items} `);

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch(`http://127.0.0.1:8000/api/Ships/${id}`, {
      requestOptions,
    });
    MShips1();
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
          onDelete={() => ShipDelete(item.id)}
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
