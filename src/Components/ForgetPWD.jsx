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

function ForgetPWD() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log('request ok ForgetPWD 21');
    try {
      const response = await fetch("http://127.0.0.1:8000/api/forget-password", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
       body: JSON.stringify({ email: email }),
      });
  
      const data = await response.json();
      setStatus(data.status);
    } catch (error) {
      // console.error('Error:', error);
      setStatus('Something went wrong 💥 please try again later 💫');
    }
  };  
  
  return (
    <div>
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-body">
                          {!status ? (
                          <>
                            <h5 className="card-title">Reset Password</h5>
                                <div className="form-group">
                                    <form onSubmit={handleSubmit}>
                                        <input
                                            value={email} required
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="form-control"
                                            placeholder="Enter your e-mail"
                                            />
                                        <button type="submit" className="btn btn-dark border border-warning mt-2">Send me an e-mail </button>
                                        {status && <div className="mt-2 text-light">{status}</div>}
                                    </form>
                                </div>
                          </>) :
                            <>
                              <h5>Nous venons de vous envoyer un mail</h5>
                            </>
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
  );
 
};

export default ForgetPWD;