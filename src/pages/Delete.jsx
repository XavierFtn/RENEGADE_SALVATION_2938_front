import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import React from "react";

function DeleteUser() {
  const token = JSON.parse(sessionStorage.getItem("token"));

  const onDelete = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token} `);

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch("http://127.0.0.1:8000/api/delete", requestOptions)
      .then((response) => {
        if (response.ok) {
          navigate("/");
          Swal.fire("See you soon!", "success");
          sessionStorage.delete();
        } else {
          sessionStorage.delete();
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error);

        Swal.fire("Error", "An unexpected error occurred", "error");
      });
  };
}

export default DeleteUser;
