/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 29/07/2023 - 17:26:02
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/07/2023
    * - Author          : 
    * - Modification    : 
**/
import { Card, Col, Form, Row } from "react-bootstrap";
import Footer from "../models/ModelsFooter";
import Header from "../models/ModelsHeader";
import Avatar1 from "../components/img/Avatar/image1.jpg";
import Avatar2 from "../components/img/Avatar/image2.jpg";
import Avatar3 from "../components/img/Avatar/image3.jpg";
import Avatar4 from "../components/img/Avatar/image4.jpg";
import Avatar5 from "../components/img/Avatar/image5.jpg";
import Avatar6 from "../components/img/Avatar/image6.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";
import Swal from "sweetalert2";

function EditProfil() {
  const navigate = useNavigate();
  const firstname = JSON.parse(sessionStorage.getItem("firstname"));
  const lastname = JSON.parse(sessionStorage.getItem("lastname"));
  const planet = JSON.parse(sessionStorage.getItem("planet"));
  const username = JSON.parse(sessionStorage.getItem("user"));
  const date_of_birth = JSON.parse(sessionStorage.getItem("date_of_birth"));
  const email = JSON.parse(sessionStorage.getItem("email"));
  const picture = JSON.parse(sessionStorage.getItem("avatar"));
  const token = JSON.parse(sessionStorage.getItem("token"));
  const [userData, setUserData] = useState({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: "",
    username: username,
    picture: picture,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAvatarChange = (e) => {
    const selectedPicture = e.target.value;
    setUserData((prevData) => ({
      ...prevData,
      picture: `/src/components/img/Avatar/${selectedPicture}.jpg`, // Adjust the file extension based on the actual file format
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      var formdata = new FormData();
      formdata.append("firstname", userData.firstname);
      formdata.append("lastname", userData.lastname);
      formdata.append("email", userData.email);
      formdata.append("password", userData.password);
      formdata.append("username", userData.username);
      formdata.append("picture", userData.picture);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      const response = await fetch(
        "http://127.0.0.1:8000/api/update",
        requestOptions
      );
      const data = await response.json();
      console.log("data", data);
      if (data.status === "success") {
        // Récupérer le nom du système planétaire choisi
        sessionStorage.clear();
        sessionStorage.setItem(
          "token",
          JSON.stringify(data.authorisation.token)
        );
        sessionStorage.setItem(
          "firstname",
          JSON.stringify(data.user.firstname)
        );
        sessionStorage.setItem("lastname", JSON.stringify(data.user.lastname));
        sessionStorage.setItem("email", JSON.stringify(data.user.email));
        sessionStorage.setItem(
          "date_of_birth",
          JSON.stringify(data.user.date_of_birth)
        );
        sessionStorage.setItem("user", JSON.stringify(data.user.username));
        sessionStorage.setItem(
          "planet",
          JSON.stringify(data.user.planetary_system_name)
        );
        sessionStorage.setItem("avatar", JSON.stringify(data.user.picture));

        swal(
          "Edition successful!",
          `Your Planetary System ${data.user.planetary_system_name} was updated!`,
          "success"
        );
        navigate("/");
      } else {
        swal("Edition failed!", data.message, "error");
      }
    } catch (error) {
      console.error("Error during Edition", error);
      swal("Error", "An error occurred during Edition", "error");
    }
  };


function swalDelete() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Deleted!',
        'Good Bye Space Ranger.',
        'success'
      )
      
      const token = JSON.parse(sessionStorage.getItem("token"));
    
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token} `);
    
      var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };
    
      fetch("http://127.0.0.1:8000/api/delete", requestOptions)
        .then(response => {
          console.log('response', response);
          if (response.ok) {
            navigate("/");
            Swal.fire("Good-Bye Space Ranger", "User deleted", "success");
            sessionStorage.clear();
          } 
          else{
            Swal.fire("Error", "An unexpected error occurred", "error")
          }
        })
        .catch(error => {
          console.error(error);
           
          Swal.fire("Error", "An unexpected error occurred", "error");
        });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your System is safe :)',
        'error'
      )
    }
  })
  }

  return (
    <div className="container-fluid">
      <Header name="Edit Your Profile" />
      <div className="row mb-5 pt-2"></div>
      <div className="row wrap">
        <Card>
          <Form className="colorBisque">
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Firstname:</Form.Label>
                <Form.Control
                  name="firstname"
                  defaultValue={firstname}
                  onChange={handleChange}
                  type="text"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Lastname:</Form.Label>
                <Form.Control
                  name="lastname"
                  defaultValue={lastname}
                  onChange={handleChange}
                  type="text"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Date of Birth:</Form.Label>
                <Form.Control
                  name="date_of_birth"
                  value={date_of_birth}
                  type="date"
                  disabled
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  name="username"
                  defaultValue={username}
                  onChange={handleChange}
                  type="text"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>System Name:</Form.Label>
                <Form.Control value={planet} type="text" disabled />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  name="email"
                  defaultValue={email}
                  onChange={handleChange}
                  type="email"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>password:</Form.Label>
                <Form.Control
                  name="password"
                  onChange={handleChange}
                  type="password"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <div className="card">
                <label className="text-center fw-bold">
                  Choose your Avatar:
                </label>
                <div className="form-group">
                  <div className="row">
                    <div className="col">
                      <input
                        type="radio"
                        name="picture"
                        value="image1"
                        onChange={handleAvatarChange}
                      />
                      <img src={Avatar1} alt="Avatar 1" />
                    </div>
                    <div className="col">
                      <input
                        type="radio"
                        name="picture"
                        value="image2"
                        onChange={handleAvatarChange}
                      />
                      <img src={Avatar2} alt="Avatar 2" />
                    </div>
                    <div className="col">
                      <input
                        type="radio"
                        name="picture"
                        value="image3"
                        onChange={handleAvatarChange}
                      />
                      <img src={Avatar3} alt="Avatar 3" />
                    </div>
                    <div className="col">
                      <input
                        type="radio"
                        name="picture"
                        value="image4"
                        onChange={handleAvatarChange}
                      />
                      <img src={Avatar4} alt="Avatar 4" />
                    </div>
                    <div className="col">
                      <input
                        type="radio"
                        name="picture"
                        value="image5"
                        onChange={handleAvatarChange}
                      />
                      <img src={Avatar5} alt="Avatar 5" />
                    </div>
                    <div className="col">
                      <input
                        type="radio"
                        name="picture"
                        value="image6"
                        onChange={handleAvatarChange}
                      />
                      <img src={Avatar6} alt="Avatar 6" />
                    </div>
                  </div>
                </div>
              </div>
            </Row>
            <button
              className="btn btn-dark border border-warning"
              onClick={handleSubmit}
            >
              Submit
            </button>
            </Form>
            <div>
            <button onClick={()=>swalDelete()} className="btn btn-dark border border-danger mt-2 mb-2">Delete User</button>
        </div>
          
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default EditProfil;
