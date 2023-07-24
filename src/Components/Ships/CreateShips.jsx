import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useAccordionButton } from "react-bootstrap";

function Cship() {
  const [ships, setShips] = useState();

  function Create(ship) {
    var MyHeaders = new Headers();
    const items = JSON.parse(localStorage.getItem("token"));
    MyHeaders.append("Authorization", `Bearer ${items}`);
    var requestOptions = {
      method: "POST",
      headers: MyHeaders,
      redirect: "follow",
    };

    fetch(`http://127.0.0.1:8000/api/ships/${ship}`, requestOptions)
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
        <option value="fighter">Fighter</option>
        <option value="frigate">Frigate</option>
        <option value="cruiser">Cruiser</option>
        <option value="destroyer">Destroyer</option>
      </Form.Select>
      <Button type="submit" onClick={Create}>
        Create
      </Button>
    </div>
  );
}

export default Cship;
