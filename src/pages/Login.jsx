import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";
import login from "../Components/img/login.jpg";
import "../Components/style/login.css";

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

      const response = await fetch("http://127.0.0.1:8000/api/login", options);
      const data = await response.json();

      if (data.status === "success") {

        sessionStorage.setItem("token", JSON.stringify(data.authorisation.token));
        sessionStorage.setItem("firstname", JSON.stringify(data.user.firstname));
        sessionStorage.setItem("lastname", JSON.stringify(data.user.lastname));
        sessionStorage.setItem("email", JSON.stringify(data.user.email));
        sessionStorage.setItem("date_of_birth", JSON.stringify(data.user.date_of_birth));
        sessionStorage.setItem("user", JSON.stringify(data.user.username));
        sessionStorage.setItem("planet",JSON.stringify(data.user.planetary_system_name));
        sessionStorage.setItem("avatar",JSON.stringify(data.user.picture));

        swal("Welcome!", "You are connected!", "success");
        navigate("/");
      } else {
        swal("Sign in failed!", "Confirm e-mail and/or password", "error");
      }
    } catch (error) {
      console.error("Error during login:", error);
      swal("Error", "An error occurred during login", "error");
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <img src={login} className="card-img-top" alt="Login" />
            <div className="card-body">
              <h5 className="card-title">Log in</h5>
              <div className="form-group">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <button
                className="btn btn-dark border border-warning"
                onClick={handleSubmit}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
