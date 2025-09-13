import { Navbar, Container, Nav, Button } from "react-bootstrap";
{/*import logo from "../assets/logo.png"; import Logo from "./Logo";*/}
import React from "react";
import {motion } from "framer-motion";
import { useState } from "react";

const NavBar: React.FC = () => {
  return (
    <Navbar expand="lg">
      <Container>
      {/*    <Navbar.Brand href="#home" className="logo">
            <Logo/>
        </Navbar.Brand>*/}

       
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            {/*<Nav.Link href="#projects">Work Experience</Nav.Link>*/}
            {/*<Nav.Link href="#projects">Achievements</Nav.Link>*/}
            {/*<Nav.Link href="#projects">Licenses and Certifications</Nav.Link>*/}
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
