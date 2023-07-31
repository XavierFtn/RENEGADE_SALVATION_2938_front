/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 31/07/2023 - 11:35:01
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 31/07/2023
    * - Author          : 
    * - Modification    : 
**/
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header2 from "../models/ModelsHeader2";
import Footer from "../models/ModelsFooter";
import "../Components/style/home.css";
import swal from "sweetalert";

const ResetPWD = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const token = path.split("/")[2];
  console.log(token);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://127.0.0.1:8000/api/reset-password/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
        token: token,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("body", data);
      navigate("/login");
    } else {
      const errorText = await response.text();
      console.error("Error:", response.status, errorText);
      swal("Error", "Something went wrong 💥 please try again later 💫", "error");
    }
  };

  return (

      <div className="container-fluid">
        <Header2 name="Reset Your Password" />
        <div className="row mb-5 pt-2"></div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                {status && <div>{status}</div>}
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="form-control m-2"
                    name="email"
                  />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your new password"
                    className="form-control m-2"
                    name="password"
                  />
                  <input
                    type="password"
                    required
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    placeholder="Confirm your new password"
                    className="form-control m-2"
                    name="passwordConfirmation"
                  />
                  <button
                    type="submit"
                    className="btn btn-dark border border-warning mt-2"
                  >
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

  );
};

export default ResetPWD;
