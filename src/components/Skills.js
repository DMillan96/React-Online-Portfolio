//import meter1 from "../assets/img/meter1.svg";
//import meter2 from "../assets/img/meter2.svg";
//import meter3 from "../assets/img/meter3.svg";
//import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col } from "react-bootstrap";
import html from "../assets/img/ProgrammingLanguageIcons/html.png";
import css from "../assets/img/ProgrammingLanguageIcons/css.png";
import js from "../assets/img/ProgrammingLanguageIcons/javascript.png";
import react from "../assets/img/ProgrammingLanguageIcons/react.png";
import node from "../assets/img/ProgrammingLanguageIcons/nodejs-white.png";
import SASS from "../assets/img/ProgrammingLanguageIcons/Sass.png";
import next from "../assets/img/ProgrammingLanguageIcons/nextjs.png";
import java from "../assets/img/ProgrammingLanguageIcons/java.png";
import aspnet from "../assets/img/ProgrammingLanguageIcons/aspnet.png";
import postgresql from "../assets/img/ProgrammingLanguageIcons/Postgresql_elephant.png";
import cplusplus from "../assets/img/ProgrammingLanguageIcons/c++.png";
import csharp from "../assets/img/ProgrammingLanguageIcons/csharp.png";

export const Skills = () => {
  /*const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };*/

  const backend_tech = [
    {
      id: "node",
      src: node,
      title: "Node.js",
    },
    {
      id: "java",
      src: java,
      title: "java",
    },
    {
      id: "asp.net",
      src: aspnet,
      title: "asp.net",
    },
    {
      id: "postgresql",
      src: postgresql,
      title: "PostgreSQL",
    },
    {
      id: "c++",
      src: cplusplus,
      title: "C++",
    },
    {
      id: "c#",
      src: csharp,
      title: "C#",
    },
  ];

  const frontend_tech = [
    {
      id: "html",
      src: html,
      title: "HTML",
      style: "",
    },
    {
      id: "css",
      src: css,
      title: "CSS",
    },
    {
      id: "javascript",
      src: js,
      title: "JavaScript",
    },
    {
      id: "reactjs",
      src: react,
      title: "React.js",
    },
    {
      id: "nextjs",
      src: next,
      title: "Next.js",
    },
    {
      id: "sass",
      src: SASS,
      title: "SASS",
    },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx wow zoomIn">
              <h2>Skillset</h2>
              <p>These are the technologies that I work with</p>
              <div className="technologies">
                <div className="frontend-tech">
                  <h4>Frontend</h4>
                  {frontend_tech.map(({ id, src, title, style }) => {
                    return (
                      <div className="technology">
                        <div>
                          <h5> {title} </h5>
                          <img src={src} alt={title}></img>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="backend-tech">
                  <h4>Backend</h4>

                  {backend_tech.map(({ id, src, title, style }) => {
                    return (
                      <div className="technology">
                        <div>
                          <h5> {title} </h5>
                          <img
                            src={src}
                            alt={title}
                            className={id.includes("node") ? "node" : ""}
                          ></img>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>*/}
            </div>
          </Col>
        </Row>
      </Container>

      <img className="background-image-left" src={colorSharp} alt="light" />
    </section>
  );
};
