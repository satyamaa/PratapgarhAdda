import { BrowserRouter } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../assets/Logo.png"
function Header() {
  return (
    <>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          {/* <Container> */}
            <Navbar.Brand href="/">
              <img
                width="50"
                height="50"
                className="d-inline-block align-top"
                src={Logo}
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Brand href="/" className="img">

              Pratapgarh_Adda
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
          {/* </Container> */}
        </Navbar>
      </BrowserRouter>
    </>
  );
}

export default Header;
