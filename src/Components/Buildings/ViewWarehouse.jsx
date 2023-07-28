import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

async function fetchWarehouseData() {
  var myHeaders = new Headers();
  const items = JSON.parse(sessionStorage.getItem("token"));
  myHeaders.append("Authorization", `Bearer ${items}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let response = await fetch(
    `http://127.0.0.1:8000/api/warehouses/`,
    requestOptions
  );

  let donnees = await response.json();
  return donnees;
}

function ViewWarehourse() {
  const [loading, setLoading] = useState(true);
  const [warehouse, setWarehouse] = useState();

  useEffect(() => {
    fetchWarehouseData()
      .then((donnees) => {
        setWarehouse(donnees[0].quantity);
        setLoading(false);
      })
      
  }, []);

  if (loading) {
    return <Spinner animation="border" variant="warning" />;
  }

  return (
    <div>
      {JSON.stringify(warehouse)}
    </div>
  );
}

export default ViewWarehourse;
