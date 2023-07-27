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
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ResetPWD = () => {
  const path = useLocation().pathname;
  const token = path.split('/')[2];
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/reset-password/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password, passwordConfirmation: passwordConfirmation}),
      });
  
      const data = await response.json();
      console.log('body', data);
      setStatus(data.status);
    } catch (error) {
      console.log('Error:', error);
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
                          {status && <div>{status}</div>}
                            <div className="form-group">
                            <form onSubmit={handleSubmit} className="form-control">
                              <input type="hidden" value={token} />
                              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className="form-control"/>
                              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your new password" required className="form-control" />
                              <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Confirm your new password" required className="form-control"/>
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