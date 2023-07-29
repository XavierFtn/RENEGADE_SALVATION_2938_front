import { useNavigate } from "react-router";
import ModelBattles from "../../models/battles/ModelBattles";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import swal from "sweetalert";

function ViewBattles() {
  const [battle, setBattle] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  function ShowBattles() {
    var myHeaders = new Headers();
    const token = JSON.parse(sessionStorage.getItem("token"));

    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/round/", requestOptions)
      .then((response) => {
        //permet d'intercepter quand le token est expiré
        if (response.status === 401) {
          sessionStorage.clear();
          swal("Error", "Session Expired, please connect again", "error");
          navigate("/");
        }
        return response.json();
      })
      .then((result) => {
        const battlesArray = result;
        setBattle(battlesArray.round);
        setLoading(false);
        console.log("result", battlesArray.round);
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    ShowBattles();
  }, []);

  const RenderMyArray = () => {
    if (loading) {
      return <Spinner animation="border" variant="warning" />;
    }

    return battle.map((item, id) => (
      <ModelBattles
        key={id}
        id={id}
        created_at ={item.created_at}
        user_id={item.user_id}
        is_defender={item.is_defender}
        is_winner={item.is_winner}
        planetary_system_name ={item.planetary_system_name}
        nb_fighter={item.nb_fighter}
        nb_frigate={item.nb_frigate}
        nb_cruiser={item.nb_cruiser}
        nb_destroyer={item.nb_destroyer}
        nb_round={item.nb_round}
      />
    ));
  };

  return (
    <div>
      <RenderMyArray />
    </div>
  );
}

export default ViewBattles;
