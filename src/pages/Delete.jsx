import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Footer from "../models/ModelsFooter";
import Header from "../models/ModelsHeader";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Swal from "sweetalert2";


function DeleteProfile() {

  //const [deleteUserData, setDeleteUserData] = useState({
  //  firstname: "",
  //  lastname: "",
  //  email: "",
  //  password: "",
  //  username: "",
  //  date_of_birth: "",
  //  name: "",
  //  picture: "",
  //});
  const firstname = JSON.parse(sessionStorage.getItem("firstname"));
  const lastname = JSON.parse(sessionStorage.getItem("lastname"));
  const username = JSON.parse(sessionStorage.getItem("user"));
  const date_of_birth = JSON.parse(sessionStorage.getItem("date_of_birth"));
  const email = JSON.parse(sessionStorage.getItem("email"));
  const navigate = useNavigate();

  const token = JSON.parse(sessionStorage.getItem("token"));

  var myHeaders = new Headers();
  myHeaders.append("Authorization",`Bearer ${token}`);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("http://127.0.0.1:8000/api/deleteprofile", requestOptions)
  .then(response => {
    if (response.ok) {
      navigate("/");
      Swal.fire("Account successfully deleted","success");
      sessionStorage.delete();
    } 
  //return (
   // <button variant="success" type=submit>

  //  </button>
  //)
  
}
export default DeleteProfile;
