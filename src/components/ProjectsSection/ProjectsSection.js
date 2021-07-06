import "./ProjectsSection.css";
import React from "react";
import Button from "react-bootstrap/Button";
import img from "../../images/StEdwardsLogo.jpeg";
import synth from "../../images/synth1.png";
import workmate from "../../images/workmate1.png";
import issiegif from "../../images/issie1.gif";
import covid from "../../images/covid1.jpeg";
import { Col, Container, Row } from "react-bootstrap";
import { Fade } from "@stahl.luke/react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProjectsSection = ({}) => {
  return (
    <section className="projects-summary" id="projects-summary">
      <h1>Some Projects...</h1>
      <Container className="projects">
        <Row className="mx-auto">
          <Col xs="12" sm="12" md="6" className="project">
            <Fade left>
              <a href={"/projects#p1"} className="selection">
                <div className="hover-section">
                  <img src={synth} className="image mx-auto" alt="..." />
                  <div className="overlay" />
                  <h3 className="middle">
                    Music Synthesiser <br />
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </h3>
                </div>
              </a>
            </Fade>
          </Col>
          <Col xs="12" sm="12" md="6" className="project">
            <Fade right>
              <a href={"/projects#p2"} className="selection">
                <div className="hover-section">
                  <img src={workmate} className="image mx-auto" alt="..." />
                  <div className="overlay" />
                  <h3 className="middle">
                    WorkMate <br />
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </h3>
                </div>
              </a>
            </Fade>
          </Col>
        </Row>
      </Container>
      <Container className="projects">
        <Row className="mx-auto">
          <Col xs="12" sm="12" md="6" className="project">
            <Fade left>
              <a href={"/projects#p3"} className="selection">
                <div className="hover-section">
                  <img src={issiegif} className="image mx-auto" alt="..." />
                  <div className="overlay" />
                  <h3 className="middle">
                    Interactive Schematic Drawing Canvas
                    <br />
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </h3>
                </div>
              </a>
            </Fade>
          </Col>
          <Col xs="12" sm="12" md="6" className="project">
            <Fade right>
              <a href={"/projects#p4"} className="selection">
                <div className="hover-section">
                  <img src={covid} className="image mx-auto" alt="..." />
                  <div className="overlay" />
                  <h3 className="middle">
                    Covid-19 App Architecture <br />
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </h3>
                </div>
              </a>
            </Fade>
          </Col>
        </Row>
      </Container>
      <Fade bottom>
        <Button
          className="view-all-btn"
          variant="secondary"
          size="lg"
          href="/projects"
        >
          View All
        </Button>
      </Fade>
    </section>
  );
};

const ProjectLeft = ({}) => {
  return <div></div>;
};

const ProjectRight = ({}) => {
  return <div></div>;
};

export default ProjectsSection;
