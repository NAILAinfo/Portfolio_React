import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
import React from "react";
import {motion } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";

const NavBar: React.FC = () => {
  return (
    <Navbar expand="lg">
      <Container>
          <Navbar.Brand href="#home" className="logo">
            <Logo/>
        </Navbar.Brand>

       
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#projects">Work Experience</Nav.Link>
            <Nav.Link href="#projects">Achievements</Nav.Link>
            <Nav.Link href="#projects">Licenses and Certifications</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>

          <Button
              variant="primary"
              href="https://docs.google.com/document/d/1uwaV6upgWd0D1TPsTzBUFdsf-IFabqsxwGyUnjmDYrY/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
          </Button>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
