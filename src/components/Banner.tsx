import React from "react";
import { Col, Container, Row ,Button } from "react-bootstrap";
import { BsArrowDown, BsGithub, BsLinkedin } from "react-icons/bs";
import main from "../assets/main.png";

const Banner = () => {
    return (
        <section className="banner" id="home" style={{ marginTop: "40px" }}>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>

                        <span>Hello, I'm </span>
                        <h1>{"Naila Dahmani"} </h1>                            
                        <span className="wrap">Web developer</span>                        
                        <div className="social-links" style={{ marginBottom: "15px" }}>
                                <a
                                    href="https://github.com/ton-profil"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ marginRight: "20px" }}
                                >
                                    <BsGithub size={30} />

                                </a>

                                <a
                                    href="https://linkedin.com/in/ton-profil"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <BsLinkedin size={30} />
                                </a>

                                <Button
                                    variant="primary"
                                    href="https://docs.google.com/document/d/1uwaV6upgWd0D1TPsTzBUFdsf-IFabqsxwGyUnjmDYrY/edit?tab=t.0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ marginLeft: "20px" , padding: "8px 15px" }}
                                >
                                    Resume
                                </Button>

                                </div>

                            <Button 
                                variant="primary" 
                                onClick={() => console.log('connect')} 
                                style={{ display: "flex", alignItems: "center", gap: "8px" }}
                                >
                                Let’s Connect <BsArrowDown size={30} />

                                
                            </Button>


                    </Col>
                    <Col xs={12} md={6} xl={5} >
                       {/* <img src={main} alt="main" style={{ width: "350px", height: "auto" }} />*/} 
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Banner;