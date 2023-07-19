import React, { useState } from "react";
import swal from "sweetalert";
import register from "../Components/img/register.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    username: "",
    date_of_birth: "",
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
        localStorage.setItem("token", data.authorisation.token);
        swal("Registration successful!", "You are now registered!", "success");
        // Optionally, redirect to another page after successful registration
        // For example: navigate("/home");
      } else {
        swal("Registration failed!", data.message, "error");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      swal("Error", "An error occurred during registration", "error");
    }
  };

  return (
    <div className="containerRegister">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <h5 className="card-title">Register</h5>
            <img src={register} className="card-img-top" alt="Register" />
            <div className="card-body">
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
              <button
                className="btn btn-dark border border-warning"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
