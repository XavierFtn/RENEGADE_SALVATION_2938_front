/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 26/07/2023 - 15:25:15
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 26/07/2023
    * - Author          : 
    * - Modification    : 
**/
import React, { useState } from 'react';

const ForgetPWD = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/forget-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      const data = await response.json();
      setStatus(data.status);
    } catch (error) {
      console.error('Error:', error);
      setStatus('Something went wrong 💥 please try again later 💫');
    }
  };  

  return (
    <div>
      {status && <div>{status}</div>}
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Reset Password</h5>
                                <div className="form-group">
                                    <form onSubmit={handleSubmit}>
                                        <input
                                            value={email} required
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="form-control"
                                            placeholder="Enter your e-mail"
                                            />
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

export default ForgetPWD;