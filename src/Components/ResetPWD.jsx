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

const ResetPWD = ({ token }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, password_confirmation: passwordConfirmation, token }),
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
      <form onSubmit={handleSubmit}>
        <input
          type="hidden"
          value={token}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your new password"
          required
        />
        <input
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          placeholder="Confirm your new password"
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPWD;