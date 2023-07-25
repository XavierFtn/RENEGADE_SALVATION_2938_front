import { Button, Card, Col, Form, Row } from "react-bootstrap";
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

function EditProfil() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    username: "",
    date_of_birth: "",
    name: "",
    picture: "",
  });
  const firstname = JSON.parse(sessionStorage.getItem("firstname"));
  const lastname = JSON.parse(sessionStorage.getItem("lastname"));
  const username = JSON.parse(sessionStorage.getItem("user"));
  const date_of_birth = JSON.parse(sessionStorage.getItem("date_of_birth"));
  const email = JSON.parse(sessionStorage.getItem("email"));

  const handleAvatarChange = (e) => {
    // Assuming you have the images located in /Components/img/Avatar/ folder
    const selectedPicture = e.target.value;
    setUserData((prevData) => ({
      ...prevData,
      picture: `/src/components/img/Avatar/${selectedPicture}.jpg`, // Adjust the file extension based on the actual file format
    }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="container-fluid">
      <Header name="Edit Your Profil" />
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
                <Form.Label>Lastname:</Form.Label>
                <Form.Control
                  name="date_of_birth"
                  defaultValue={date_of_birth}
                  onChange={handleChange}
                  type="date"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  name="username"
                  defaultValue={username}
                  onChange={handleChange}
                  type="text"
                />
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
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  name="password"
                  value={userData.password}
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

            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default EditProfil;
