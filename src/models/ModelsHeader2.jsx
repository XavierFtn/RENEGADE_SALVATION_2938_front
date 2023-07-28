import { Container, Nav, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";

function Header2(props) {
  return (
    <div className="row mb-5">
      <header>
        <Navbar
          fixed="top"
          bg="dark"
          data-bs-theme="dark"
          expand="lg"
          className="bg-body-tertiary"
        >
          <Container fluid>
            <Navbar.Brand>
              <img
                src="..\src\assets\logo\rs2938.png"
                style={{ width: "100px" }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-5 my-lg-0">
                <p className="orbitron ">{props.name}</p>
              </Nav>
              <Navbar.Collapse className="justify-content-end">
                <Nav.Link href="/login">
                  <span className="colorBisque">🔗 Login</span>
                </Nav.Link>
              </Navbar.Collapse>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}
Header2.propTypes = {
  name: PropTypes.string,
};

export default Header2;
