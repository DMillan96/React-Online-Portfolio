import TrackVisibility from "react-on-screen";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import resume from "../constants/resume.json";

export const Resume = () => {
  const { education_section, employment_section } = resume;
  return (
    <section className="resume" id="resume">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={12}>
            <div>
              <h2>{education_section.title.toUpperCase()}</h2>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col size={10} md={10}>
            <div style={{ display: "inline-flex" }}>
              <div>
                <h6>{`${education_section.education_history.university}`}</h6>
              </div>
              <div>
                {`, ${education_section.education_history.university_location}`}
              </div>
            </div>
          </Col>
          <Col size={1} md={1}>
            <div style={{ display: "inline-flex" }}>
              <div>
                {`${education_section.education_history.graduation_date}`}
              </div>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col size={12} md={12}>
            <div>
              <h6>{`${education_section.education_history.degree_earned}`}</h6>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col size={12} md={12}>
            <div>
              <h2>{employment_section.title.toUpperCase()}</h2>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col size={12} md={12}>
            <div>
              {employment_section.employment_history.map((employment, key) => {
                return (
                  <div key={key}>
                    <Row className="align-items-center">
                      <Col size={10} md={10}>
                        <div>
                          <div>{employment.occupation}</div>
                          <div>{employment.employer}</div>
                        </div>
                      </Col>
                      <Col size={2} md={2}>
                        <div style={{ display: "inline-flex" }}>
                          <div>{`${employment.start_date} - ${employment.end_date}`}</div>
                        </div>
                      </Col>
                    </Row>

                    <ul>
                      {employment.job_details.map((detail) => {
                        return (
                          <li>
                            <div>{detail}</div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
