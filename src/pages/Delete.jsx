import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

function DeleteUser() {
  const navigate = useNavigate();
  const token = JSON.parse(sessionStorage.getItem("token"));
  const DeleteUser = ({ user, onDelete }) => {
    const handleDelete = () => {
      fetch(`/api/DeleteUser/${user.id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("User deleted successfully");
          onDelete(user.id);
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    };

    return (
      <div>
        <p>firstname :{user.firstname}</p>
        <p>lastname: {user.lastname}</p>
        <p>username: {user.username}</p>
        <p>date_of_birth: {user.date_of_birth}</p>
        <p>planetary_system_name: {user.planetary_system_name}</p>
        <p>Email: {user.email}</p>

        <button onClick={handleDelete}>Delete User</button>
      </div>
    );
  };

  //var myHeaders = new Headers();
  // myHeaders.append("Authorization", `Bearer ${token} `);
  //
  //var requestOptions = {
  // method: "DELETE",
  // headers: myHeaders,
  // redirect: "follow",
  //};
  //
  //fetch("http://127.0.0.1:8000/api/delete", requestOptions)
  //.then((response) => {
  // if (response.ok) {
  //   navigate("/");
  //   Swal.fire("Account successfully deleted", "See you soon!", "success");
  //   sessionStorage.delete();
  //  } else {
  //sessionStorage.delete();
  //   navigate("/");
  // }
  // })
  //.catch((error) => {
  //  console.error(error);
  //
  // Swal.fire("Error", "An unexpected error occurred", "error");
  // });
}
export default DeleteUser;
