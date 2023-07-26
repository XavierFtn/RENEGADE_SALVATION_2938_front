import { useEffect, useState } from "react";
import MRessources from "../../models/ressources/ModelRessources";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function ViewRessources() {
  const [ressources, setRessources] = useState([]);
  const navigate = useNavigate();

  function ShowRessources() {
    var myHeaders = new Headers();
    const token = JSON.parse(sessionStorage.getItem("token"));

    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/ressources/", requestOptions)
      .then((response) => {
        //permet d'intercepter quand le token est expiré
        if (response.status === 401) {
          sessionStorage.clear();
          swal("Error", "Session Expired, please connect again", "error");
          navigate('/');
        }
        return response.json();
      })
      .then((result) => {
        const resourcesArray = [result];
        setRessources(resourcesArray);
        console.log("result", resourcesArray);
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    ShowRessources();
  }, []);

  const RenderMyArray = () => {
    return ressources.map((item, id) => (
      <MRessources
        key={id}
        ore={item.ore}
        fuel={item.fuel}
        energy={item.energy}
      />
    ));
  };

  return (
    <div>
      <RenderMyArray />
    </div>
  );
}

export default ViewRessources;
