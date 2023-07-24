import { useEffect, useState } from "react";
import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";

function Header() {
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
                | Welcome {user}!
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
                  <Nav.Link href="/">Home</Nav.Link>
                  <NavDropdown
                    title="Your Empire"
                    id="navbarScrollingDropdown1"
                  >
                    <NavDropdown.Item href="/buildyourempire">
                      Build Your Empire
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/extendyourempire">
                      Extend Your Empire
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              )}

              {connected && (
                <Nav
                  className="me-3 my-2 my-lg-0"
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
                    <NavDropdown.Item href="#action3">
                      Edit your profil
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/disconnect">
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              )}

              {disconnected && (
                <Navbar.Collapse>
                  <Nav.Link href="/register">
                    <span className="colorWhite">Register</span>
                  </Nav.Link>
                </Navbar.Collapse>
              )}
              {disconnected && (
                <Navbar.Collapse className="justify-content-end">
                  <Nav.Link href="/login">
                    <span className="colorWhite">Login</span>
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

export default Header;
