import { Navbar, Container, Nav, Button } from "react-bootstrap";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <Navbar expand="lg">
      <Container>
        
        <Navbar.Brand href="#home" >
            &lt;Naila /&gt;
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#About" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#experience" className="nav-link-custom">Experience</Nav.Link>
            <Nav.Link href="#skills" className="nav-link-custom">Skills</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
            <Nav.Link href="#education" className="nav-link-custom">Education</Nav.Link>
            <Nav.Link href="#Certifications" className="nav-link-custom">Certifications</Nav.Link>
            <Nav.Link href="#blogs" className="nav-link-custom">Blogs</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contact </Nav.Link>            
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};
export default NavBar;