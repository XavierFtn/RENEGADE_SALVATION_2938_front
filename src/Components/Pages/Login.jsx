import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/login.css";
import login from "../img/login.jpg";

function Login() {
  // stock donné email et pasword dans localstorage afin de pouvoir rester connecté d'une page a l'autre et d'avoir les autorisations necessaire pour naviguer
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );
  const navigate = useNavigate();

  // qui va permettre de recupérer les donnné et attente des donné du fecth et les envoyer
  async function handleSubmit() {
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

    setEmail("");
    setPassword("");

    // Colis/ Information de la réponse
    const response = await fetch(`http://127.0.0.1:8000/api/login`, options);

    const data = await response.json();

    console.log(data);
    // enregistrement des donnees de l'utilisateur
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("token", data.token);
    // si les données importe son correct alors message (sweet alert et connection) sinon swal error
    if (data.success) {
      swal("Welcome!", "You are connected!", "success");
      navigate("/home");
    } else {
      swal("Sign in failed!", "Confirm e-mail and/or password", "error");
    }
  }

  return (
    <div className="containerLogin">
      <div className="container_image">
        <img className="imageLogin" src={login} />
      </div>
      <div className="inputLogin">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          class="form-control"
          placeholder="Email"
        ></input>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          class="form-control"
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
