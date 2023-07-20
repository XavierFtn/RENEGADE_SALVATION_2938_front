import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";

function Disconnect() {
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token} `);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("http://127.0.0.1:8000/api/logout", requestOptions)
    .then(response => {
      if (response.ok) {
        navigate("/");
        Swal.fire("Good-Bye", "You are disconnected!", "success");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("planet");
      } 
    })
    .catch(error => {
      console.error(error);
      Swal.fire("Error", "An unexpected error occurred", "error");
    });
    return(
        <div className="container-fluid">
      <Header/>
      <div className="col">
        <div className="row  mb-5"></div>
            <div className=" row ">
                <img  src="src/Components/img/renegade-logo.jpg"/>
                <p className="orbitron">GOOD-BYE SPACE RANGER {user}</p>
                <br />
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default Disconnect;
