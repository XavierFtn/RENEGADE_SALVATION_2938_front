/**
//     * @description      : 
//     * @author           : 
//     * @group            : 
//     * @created          : 25/07/2023 - 16:34:22
//     * 
//     * MODIFICATION LOG
//     * - Version         : 1.0.0
//     * - Date            : 25/07/2023
//     * - Author          : 
//     * - Modification    : 
**/
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ResetPWD = () => {
  const path = useLocation().pathname;
  const token = path.split("/")[2];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
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
        setStatus(data.status);
      } else {
        const errorText = await response.text();
        console.error("Error:", response.status, errorText);
        setStatus("Something went wrong 💥 please try again later 💫");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Something went wrong 💥 please try again later 💫");
    }
  };
  
  
  return (
    <div>
      <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-body">
                          {status && <div>{status}</div>}
                            <div className="form-group">
                              <form onSubmit={handleSubmit} className="form-control">
                              <input type="hidden" value={token} name="token"/>
                                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="form-control" name="email"/>
                                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your new password" className="form-control" name="password"/>
                                <input type="password" required value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Confirm your new password"  className="form-control" name="passwordConfirmation"/>
                                <button type="submit" className="btn btn-dark border border-warning mt-2">Reset Password</button>
                              </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div> 
  );
};

export default ResetPWD;