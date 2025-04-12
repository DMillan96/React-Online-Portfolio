import { Container, Row, Col, Card } from "react-bootstrap";
import resume from "../constants/resume.json";

export const Resume = () => {
  const { education_section, employment_section } = resume;

  return (
    <section className="resume py-5" id="resume">
      <Container>
        {/* Education Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center text-uppercase mb-4">
              {education_section.title}
            </h2>
            <Card className="shadow-sm">
              <Card.Body>
                <h5 className="mb-2">
                  {education_section.education_history.university}
                </h5>
                <p className="text-muted mb-1">
                  {education_section.education_history.university_location}
                </p>
                <p className="text-muted mb-1">
                  <strong>Graduation Date:</strong>{" "}
                  {education_section.education_history.graduation_date}
                </p>
                <p className="mb-0">
                  <strong>Degree Earned:</strong>{" "}
                  {education_section.education_history.degree_earned}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Employment Section */}
        <Row>
          <Col>
            <h2 className="text-center text-uppercase mb-4">
              {employment_section.title}
            </h2>
          </Col>
        </Row>
        <Row>
          {employment_section.employment_history.map((employment, key) => (
            <Col md={6} className="mb-4" key={key}>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <h5 className="mb-2">{employment.occupation}</h5>
                  <p className="text-muted mb-1">{employment.employer}</p>
                  <p className="text-muted mb-3">
                    <strong>Dates:</strong> {employment.start_date} -{" "}
                    {employment.end_date}
                  </p>
                  <ul className="ps-3">
                    {employment.job_details.map((detail, index) => (
                      <li key={index} className="mb-1">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
