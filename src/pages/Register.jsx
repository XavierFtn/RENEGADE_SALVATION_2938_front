import { useState } from "react";
import swal from "sweetalert";
import register from "../Components/img/register.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../Components/style/register.css";

function Register() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    username: "",
    date_of_birth: "",
    name: "", // Ajout du champ pour le nom du système planétaire
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      };

      const response = await fetch(
        "http://127.0.0.1:8000/api/register",
        options
      );
      const data = await response.json();

      if (data.status === "success") {
        // Récupérer le nom du système planétaire choisi
        const selectedPlanetName = userData.name;

        const token = JSON.parse(localStorage.getItem("token"));

        const indexOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ name: selectedPlanetName }),
        };

        const indexResponse = await fetch(
          "http://127.0.0.1:8000/api/index",
          indexOptions
        );
        const indexData = await indexResponse.json();

        localStorage.setItem("token", JSON.stringify(data.authorisation.token));
        localStorage.setItem("user", JSON.stringify(data.user.firstname));
        localStorage.setItem(
          "planet",
          JSON.stringify(data.user.planetary_system_id)
        );
        swal("Registration successful!", "You are now registered!", "success");
        navigate("/");
      } else {
        swal("Registration failed!", data.message, "error");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      swal("Error", "An error occurred during registration", "error");
    }
  };

  return (
    <div className="container-sm">
      <div className="card">
        <h5 className="card-title">Create your account</h5>
        <div>
          <img src={register} className="card-img-top" alt="Register" />
        </div>
        <div className="form-group">
          <input
            name="firstname"
            value={userData.firstname}
            onChange={handleChange}
            className="form-control"
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <input
            name="lastname"
            value={userData.lastname}
            onChange={handleChange}
            className="form-control"
            placeholder="Last Name"
          />
        </div>
        <div className="form-group">
          <input
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <input
            name="username"
            value={userData.username}
            onChange={handleChange}
            className="form-control"
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            name="date_of_birth"
            value={userData.date_of_birth}
            onChange={handleChange}
            className="form-control"
            placeholder="Date of Birth (yyyy/mm/dd)"
          />
        </div>
        <div className="form-group">
          <input
            name="name"
            value={userData.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Name of Planetary System"
          />
        </div>
        <button
          className="btn btn-dark border border-warning"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Register;
