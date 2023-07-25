import swal from "sweetalert";

function Createship(ship) {
  var MyHeaders = new Headers();
  const items = JSON.parse(sessionStorage.getItem("token"));
  MyHeaders.append("Authorization", `Bearer ${items}`);
  var requestOptions = {
    method: "GET",
    headers: MyHeaders,
    redirect: "follow",
  };

  fetch(`http://127.0.0.1:8000/api/shipyard/available`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log('available', result);

      if (result != "false") {
        var MyHeaders2 = new Headers();
        MyHeaders2.append("Authorization", `Bearer ${items}`);
        var requestOptions2 = {
          method: "PUT",
          headers: MyHeaders2,
          redirect: "follow",
        };

        fetch(`http://127.0.0.1:8000/api/ships/${ship}/add`, requestOptions2)
          .then((response) => response.text())
          .then((result) => {
            console.log(result);
            swal("Created!", `Your ${ship} is under construction`, "info");
          })
          .catch((error) => console.log("error", error));
      } 
      else {
        // Aucun chantier naval disponible
        swal("Error", "No Shipyard Available", "error");
      }
    })
    .catch((error) => {console.log("error", error);swal("Error", "No Shipyard Available", "error")});
}

export default Createship;
