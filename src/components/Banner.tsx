import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowDownCircle } from 'react-bootstrap-icons';  // ⬅️ nouveau import

const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span>Hello, I'm </span>
                        <h1>{"Naila Dahmani"} </h1>                            
                        <span className="wrap">Web developer</span>
                        <p>Innovative and proactive Front-end Developer, capable of developing websites and applications with elegant and innovative concepts for demanding clients. Talented in project management, team leadership and independent problem solving. Versatile and highly organized with expertise in project planning, concept improvement and programming verification.</p>

                        <button onClick={() => console.log('connect')}>
                          Let’s Connect <ArrowDownCircle size={25} />
                        </button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Banner;
