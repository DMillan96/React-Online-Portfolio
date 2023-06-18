import TrackVisibility from "react-on-screen";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

export const Resume = () => {
  return (
    <section className="resume" id="resume">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>My Experience</h2>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      poop
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      poop
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      poop
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      poop
                    </Col>
                    <Col size={12} className="px-1">
                      poop
                    </Col>
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
