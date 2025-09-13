import { Navbar, Container, Nav, Button } from "react-bootstrap";
import React from "react";
import {motion } from "framer-motion";
import { useState } from "react";

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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Experience</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#projects">Education</Nav.Link>
            {/*<Nav.Link href="#projects">Licenses and Certifications</Nav.Link>*/}
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default NavBar;
