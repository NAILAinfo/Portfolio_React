import React from "react";
import { Col, Container, Row ,Button } from "react-bootstrap";
import { ArrowDown ,Github, Linkedin , EnvelopeFill} from 'react-bootstrap-icons'; 
import main from "../assets/main.png";

const Banner = () => {
    return (
        <section className="banner" id="home" style={{ marginTop: "50px" }}>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>

                        <span>Hello, I'm </span>
                        <h1>{"Naila Dahmani"} </h1>                            
                        <span className="wrap">Web developer</span>
                        <p>Innovative and proactive Front-end Developer, capable of developing websites and 
                            applications with elegant and innovative concepts for demanding clients. Talented in 
                            project management, team leadership and independent problem solving. Versatile and 
                            highly organized with expertise in project planning, concept improvement and 
                            programming verification.
                        </p>

                        <div className="social-links" style={{ marginBottom: "15px" }}>
                                <a
                                    href="https://github.com/ton-profil"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ marginRight: "20px" }}
                                >
                                    <Github size={40} />
                                </a>

                                <a
                                    href="https://linkedin.com/in/ton-profil"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin size={40} />
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
                                Let’s Connect <ArrowDown size={20} />
                            </Button>


                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <img src={main} alt="main" style={{ width: "350px", height: "auto" }} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Banner;