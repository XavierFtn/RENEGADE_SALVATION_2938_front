import { useEffect, useState } from "react";
import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";

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
              <Navbar.Brand href="/">
                <img
                  src="src\assets\logo\rs2938.png"
                  style={{
                    width: "100px",
                  }}
                />
              </Navbar.Brand>
            )}
            {connected && (
              <Navbar.Brand href="/">
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
                  <Nav.Link href="/"> 🏚️ Home</Nav.Link>
                  <NavDropdown
                    title="Your Empire"
                    id="navbarScrollingDropdown1"
                  >
                    <NavDropdown.Item href="/yourempire">
                    <span className="orbitron4"> 🛕 {planet}</span>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/buildyourempire">
                    <span className="orbitron4">⚒️ Build Your Empire</span>
                    </NavDropdown.Item>
                    
                    <NavDropdown.Item href="/extendyourempire">

                    <span className="orbitron4">🔭 Extend Your Empire</span>

                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/historyofbattle">
                    <span className="orbitron5">📜 History of Battle</span>

                    </NavDropdown.Item>
                    <NavDropdown.Item href="/battle">
                      <span className="colorRed orbitron3"> ⚔️ <strong>Battle!</strong> </span>

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
                    <NavDropdown.Item href="/editprofile">
                      🔍 Edit your profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">

                    <span className="colorYellow"><strong> 🪙 Premium Access </strong></span>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/disconnect">
                      <span className="colorRed"><strong>🪧 Logout</strong></span>

                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              )}

              {disconnected && (
                <Navbar.Collapse>
                  <Nav.Link href="/register">
                    <span className="colorRed"> 📑 Register</span>
                  </Nav.Link>
                </Navbar.Collapse>
              )}
              {disconnected && (
                <Navbar.Collapse className="justify-content-end">
                  <Nav.Link href="/login">
                    <span className="colorBisque">🔗 Login</span>
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
