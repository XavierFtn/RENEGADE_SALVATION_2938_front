import { Container, Navbar } from "react-bootstrap"

function Footer() {

    return (
        <Container>
      <Navbar fixed="bottom"  bg="dark" data-bs-theme="dark" expand="lg" className="justify-content-center">
        
          <Navbar.Brand >© Copyright Diogo Gérald Héloïse Jimmy Xavier </Navbar.Brand>
        
      </Navbar>
    </Container>
        
    )
}

export default Footer