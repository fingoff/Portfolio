import "./ProjectsSection.css";
import React from "react";
import Button from "react-bootstrap/Button";
import img from "../../images/FGlogo.png";
import { Col, Container, Row } from "react-bootstrap";

const ProjectsSection = ({}) => {
  return (
    <section className="projects-summary" id="projects-summary">
      <h1>Some Projects...</h1>
      <Container className="projects">
        <Row>
          <Col xs="12" sm="12" md="6" className="project">
            <img src={img} className="image" alt="..." />
            <div className="overlay" />
            <h3 className="middle">
              Project Name <br />
              <a className="" href={"/projects#p1"}>
                Tell Me More
              </a>
            </h3>
          </Col>
          <Col xs="12" sm="12" md="6" className="project">
            <img src={img} className="image" alt="..." />
            <div className="overlay" />
            <h3 className="middle">
              Project Name <br />
              <a className="" href={"/projects#p2"}>
                Tell Me More
              </a>
            </h3>
          </Col>
          <Col xs="12" sm="12" md="6" className="project">
            <img src={img} className="image" alt="..." />
            <div className="overlay" />
            <h3 className="middle">
              Project Name <br />
              <a className="" href={"/projects#p3"}>
                Tell Me More
              </a>
            </h3>
          </Col>
          <Col xs="12" sm="12" md="6" className="project">
            <img src={img} className="image" alt="..." />
            <div className="overlay" />
            <h3 className="middle">
              Project Name <br />
              <a className="" href={"/projects#p4"}>
                Tell Me More
              </a>
            </h3>
          </Col>
        </Row>
      </Container>
      <Button
        className="view-all-btn"
        variant="secondary"
        size="lg"
        href="/projects"
      >
        View All
      </Button>
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
