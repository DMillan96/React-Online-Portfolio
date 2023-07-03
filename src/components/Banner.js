import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/headshot-selfie.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
//import bannerBG from "../assets/img/bg-02-free-img.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Web Developer",
    "UI/UX Designer",
    "Logo Designer",
    "Artist",
  ];
  const period = 250;

  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 1200) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  window.addEventListener("resize", handleResize);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(50);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(250);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(250);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      {/*<img className="banner-bg" src={bannerBG} alt="light" />*/}
      <Container>
        <Row
          className={
            isMobile ? "align-items-center mobile-banner" : "align-items-center"
          }
        >
          <Col xs={12} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Daniel`}
                    <br />
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "UI/UX Designer", "Logo Designer", "Artist" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  {isMobile && (
                    <TrackVisibility>
                      {({ isVisible }) => (
                        <div
                          className={
                            isVisible ? "animate__animated animate__fadeIn" : ""
                          }
                        >
                          <img
                            className="profile-pic"
                            src={headerImg}
                            alt="Header Img"
                          />
                        </div>
                      )}
                    </TrackVisibility>
                  )}
                  <p>
                    I am an enthusiastic web developer based in Massachusetts,
                    with a solid experience of over 5 years in Full-Stack
                    development & logo design.
                  </p>
                  <button
                    onClick={() => {
                      window.location.href = "#connect";
                    }}
                  >
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          {!isMobile && (
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <img
                      className="profile-pic"
                      src={headerImg}
                      alt="Header Img"
                    />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};
