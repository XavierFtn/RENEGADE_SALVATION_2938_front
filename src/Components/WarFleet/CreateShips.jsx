import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useAccordionButton } from "react-bootstrap";

function Cships() {
  const [ships, setShips] = useState();

  function create() {
    var MyHeaders = new Headers();
    const items = JSON.parse(localStorage.getItem("token"));
    MyHeaders.append("Authorization", `Bearer ${items}`);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`http://127.0.0.1:8000/api/ships/${ships}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <div>
      <Form.Select
        onChange={(e) => setShips(e.target.value)}
        aria-label="Default select example"
      >
        <option>Select your ship</option>
        <option value="fighter">Mine</option>
        <option value="frigate">Raffinery</option>
        <option value="cruiser">PowerPlant</option>
        <option value="destroyer">Shipyard</option>
      </Form.Select>
      <Button type="submit" onClick={Create}>
        Create
      </Button>
    </div>
  );
}

export default Cships;
