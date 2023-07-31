import { useEffect, useState } from "react";
import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header(props) {
  const [connected, setConnected] = useState(false);
  const [disconnected, setDisconnected] = useState(true);
  const [user, setUser] = useState();
  const [avatar, setAvatar] = useState();
  const [planet, setPlanet] = useState();
  const UserMenu = (
    <Image
      src={avatar}
      alt="UserName profile image"
      roundedCircle
      style={{ width: "40px" }}
    />
  );

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("user")));
    setAvatar(JSON.parse(sessionStorage.getItem("avatar")));
    setPlanet(JSON.parse(sessionStorage.getItem("planet")));
    if (user) {
      setConnected(true);
      setDisconnected(false);
    } else {
      setConnected(false);
      setDisconnected(true);
    }
  }, [user]);

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
            {disconnected && (
              <Navbar.Brand>
                <img
                  src="src\assets\logo\rs2938.png"
                  style={{
                    width: "100px",
                  }}
                />
              </Navbar.Brand>
            )}
            {connected && (
              <Navbar.Brand>
                <img
                  src="src\assets\logo\rs2938.png"
                  style={{
                    width: "100px",
                  }}
                />
                | Welcome <span className="colorBisque">{user}</span>!
              </Navbar.Brand>
            )}

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              {connected && (
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Navbar.Brand>
                    <Link to="/"> 🏚️ Home</Link>
                  </Navbar.Brand>
                  <NavDropdown
                    title="Your Empire"
                    id="navbarScrollingDropdown1"
                  >
                    <NavDropdown.Item>
                      <Link to="/yourempire">
                        <span className="orbitron4">
                          {" "}
                          🛕 {planet} &apos; system
                        </span>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link to="/buildyourempire">
                        <span className="orbitron4">⚒️ Build Your Empire</span>
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item >
                    <Link to="/extendyourempire">
                      <span className="orbitron4">🔭 Extend Your Empire</span>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item >
                      <Link to="/battlehistory">
                        <span className="orbitron5">📜 Battle History </span>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                      <Link to="/battle">
                        <span className="colorRed orbitron3">
                          ⚔️ <strong>Battle!</strong>
                        </span>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link to="/ranking">
                        <span className="orbitron6">🏆 World Ranking </span>
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              )}
              <Nav className="me-auto my-5 my-lg-0">
                <p className="orbitron ">{props.name}</p>
              </Nav>
              {connected && (
                <Nav
                  className="ms-auto me-3 my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <NavDropdown
                    as="start"
                    key="start"
                    drop="start"
                    variant="secondary"
                    title={UserMenu}
                    id="navbarScrollingDropdown2"
                  >
                    <NavDropdown.Item>
                      <Link to="/editprofile">🔍 Edit your profile</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link to="/stripe">
                        <span className="colorYellow">
                          <strong> 🪙 Premium Access </strong>
                        </span>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item >
                    <Link to="/disconnect">
                      <span className="colorRed">
                        <strong>🪧 Logout</strong>
                      </span>
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              )}

              {disconnected && (
                <Navbar.Collapse>
                  <Nav.Link >
                  <Link to="/register">
                    <span className="colorRed"> 📑 Register</span>
                    </Link>
                  </Nav.Link>
                </Navbar.Collapse>
              )}
              {disconnected && (
                <Navbar.Collapse className="justify-content-end">
                  <Nav.Link >
                  <Link to="/login">
                    <span className="colorBisque">🔗 Login</span>
                    </Link>
                  </Nav.Link>
                </Navbar.Collapse>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}
Header.propTypes = {
  name: PropTypes.string,
};

export default Header;
