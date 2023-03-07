import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import light from "../../assets/logos/KClogolight.png";
import dark from "../../assets/logos/KClogodark.png";

function TopNav() {
  return (
    <Navbar expand="lg" className="border-none bg-cream">
      <Container>
        <Navbar.Brand href="#home">
          <img src={light} className="topnav-logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            width: "20%",
            position: "absolute",
            right: 0,
            border: "none",
            top: "25px",
          }}
          className=""
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="border-none ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
