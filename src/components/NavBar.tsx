import { Navbar, Container, Nav, Button } from "react-bootstrap";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <Navbar expand="lg">
      <Container>
        
          <Navbar.Brand href="#home" >
            <h1>Naila Dahmani</h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#About" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom">Experience</Nav.Link>
            <Nav.Link href="#skills" className="nav-link-custom">Skills</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom">Education</Nav.Link>
            {/*<Nav.Link href="#projects" className="nav-link-custom">Licenses and Certifications</Nav.Link>*/}
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};
export default NavBar;