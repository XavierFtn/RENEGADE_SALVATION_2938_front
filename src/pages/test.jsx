// /**
//  * @description      :
//  * @author           :
//  * @group            :
//  * @created          : 25/07/2023 - 14:46:02
//  *
//  * MODIFICATION LOG
//  * - Version         : 1.0.0
//  * - Date            : 25/07/2023
//  * - Author          :
//  * - Modification    :
//  **/
// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const ResetPWD = () => {
//   const path = useLocation().pathname;
//   const token = path.split('/')[2];
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordConfirmation, setPasswordConfirmation] = useState('');
//   const [status, setStatus] = useState('');

//   async function handleSubmit() {
//     try {
//       const options = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             email: email, 
//             password: password, 
//             passwordConfirmation: passwordConfirmation, 
//             token: token,
//         }),
//       };

//       const response = await fetch("http://127.0.0.1:8000/api/reset-password/", options);
//       const data = await response.json();

//       if (data.status === "success") {
//         // sessionStorage.setItem(
//         //   "token",
//         //   JSON.stringify(data.authorisation.token)
//         // );
//         // sessionStorage.setItem(
//         //   "firstname",
//         //   JSON.stringify(data.user.firstname)
//         // );
//         // sessionStorage.setItem("lastname", JSON.stringify(data.user.lastname));
//         // sessionStorage.setItem("email", JSON.stringify(data.user.email));
//         // sessionStorage.setItem(
//         //   "date_of_birth",
//         //   JSON.stringify(data.user.date_of_birth)
//         // );
//         // sessionStorage.setItem("user", JSON.stringify(data.user.username));
//         // sessionStorage.setItem(
//         //   "planet",
//         //   JSON.stringify(data.user.planetary_system_name)
//         // );

//         swal("Password changed!", "You can now use your new password to login", "success");
//         navigate("/");
//       } else {
//         swal("Reset failed", "Something went wrong 💥 please try again later 💫", "error");
//       }
//     } catch (error) {
//       console.error("Error during password reset:", error);
//       swal("Error", "An error occurred", "error");
//     }
//   }

//   return (
//     <div>
//       <div className="container">
//             <div className="row justify-content-center mt-5">
//                 <div className="col-md-5">
//                     <div className="card">
//                         <div className="card-body">
//                           {status && <div>{status}</div>}
//                             <div className="form-group">
//                             <form onSubmit={handleSubmit} className="form-control">
//                               <input type="hidden" value={token} />
//                               <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className="form-control"/>
//                               <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your new password" required className="form-control" />
//                               <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Confirm your new password" required className="form-control"/>
//                               <button type="submit" className="btn btn-dark border border-warning mt-2">Reset Password</button>
//                             </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//       </div>
//     </div> 
//   );
// };

// export default ResetPWD;