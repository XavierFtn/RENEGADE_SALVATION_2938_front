/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 29/07/2023 - 17:46:23
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/07/2023
    * - Author          : 
    * - Modification    : 
**/
import { useState } from "react";
import swal from "sweetalert";

function ForgetPWD() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/forget-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        }
      );

      const data = await response.json();
      setStatus(data.status);
    } catch (error) {
      swal(
        "Error",
        "Something went wrong 💥 please try again later 💫",
        "error"
      );
      setStatus("try again later :");
    }
  }

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Reset Password</h5>
                <div className="form-group">
                  <form onSubmit={handleSubmit}>
                    <input
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="Enter your e-mail"
                    />
                    <button
                      type="submit"
                      className="btn btn-dark border border-warning mt-2"
                    >
                      Send me an e-mail{" "}
                    </button>
                    {status && <div>{status}</div>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPWD;
