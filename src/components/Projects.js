import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import Hulk from "../assets/img/SocialMediaRevamps/Hulk-Revamp.jpg";
import Joker from "../assets/img/SocialMediaRevamps/Joker-Themed-D-Revamp.jpg";
import Ninja from "../assets/img/SocialMediaRevamps/Ninjas-Revamp.jpg";
import RedReserve from "../assets/img/SocialMediaRevamps/Red-Reserve-Twitter-Revamp.jpg";
import Soylent from "../assets/img/SocialMediaRevamps/Soylent-Twitter-Revamp.jpg";
import TE from "../assets/img/SocialMediaRevamps/TE-Revamp.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  const SocialMediaRevamps = [
    {
      title: "Hulk",
      description: `Social Media Revamp for Youtube and Twitter for a Internet Influencer who went by the name "Hulky"`,
      imgUrl: Hulk,
    },
    {
      title: "Joker",
      description: `Social Media Revamp for Youtube and Twitter for a Internet Influencer who went by the name "Hulky"`,
      imgUrl: Joker,
    },
    {
      title: "Ninja",
      description: "Social Media Revamp for Youtube and Twitter",
      imgUrl: Ninja,
    },
    {
      title: "Red Reserve",
      description: "Social Media Revamp for Twitter",
      imgUrl: RedReserve,
    },
    {
      title: "TE - Titan Empire",
      description: "Social Media Revamp for Youtube and Twitter",
      imgUrl: TE,
    },
    {
      title: "Soylent Brands",
      description: "Social Media Revamp for Twitter",
      imgUrl: Soylent,
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">UI/UX Designs</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Logos</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Social Media Design
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {SocialMediaRevamps.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      ></img>
    </section>
  );
};
