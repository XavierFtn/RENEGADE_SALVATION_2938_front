import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/style/login.css";
import login from "../Components/img/login.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      };

      const response = await fetch(`http://127.0.0.1:8000/api/login`, options);
      const data = await response.json();

      if (data.message === "Connexion réussie") {
        localStorage.setItem("token", data.token);
        swal("Welcome!", "You are connected!", "success");
        navigate("/home");
      } else {
        swal("Sign in failed!", "Confirm e-mail and/or password", "error");
      }
    } catch (error) {
      console.error("Error during login:", error);
      swal("Error", "An error occurred during login", "error");
    }
  }

  return (
    <div className="containerLogin">
      <div className="container_image">
        <img className="imageLogin" src={login} alt="Login" />
      </div>
      <div className="inputLogin">
        <input
          name="password"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Email"
        ></input>
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="Password"
        ></input>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Log in
        </button>
      </div>
    </div>
  );
}

export default Login;
