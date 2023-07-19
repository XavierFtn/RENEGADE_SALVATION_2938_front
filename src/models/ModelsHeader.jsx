import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap"

function Header() {
    const [connected, setConnected] = useState(false);
    const [disconnected, setDisconnected] = useState(true);
    const [user,setUser] =useState();

    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem("user")));
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
            <Navbar fixed="top" bg="dark" data-bs-theme="dark">
                <Container>
                    {disconnected && <Navbar.Brand href="/">Renegade Salvation</Navbar.Brand>}
                    {connected && <Navbar.Brand href="/">Welcome to your galaxy {user}!</Navbar.Brand>}
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        {connected && <Nav.Link href="/buildyourempire">Build Your Empire</Nav.Link>}
                        {connected &&  <Nav.Link href="/disconnect">Logout</Nav.Link>}
                    </Nav>
                </Container>
            </Navbar>
     

            </header>
        </div>

    )
}

export default Header 