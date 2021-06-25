import "./Footer.css";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

const Footer = ({}) => {
  var d = new Date();
  var year = d.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col sm="12" md="4">
          <h4>Connect With Me</h4>
          <a
            href="https://www.linkedin.com/in/finlay-goff-602779132/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="ml-2" />
          </a>
        </Col>
        <Col sm="12" md="4">
          <h4>About Me</h4>
        </Col>
        <Col sm="12" md="4">
          <h4>Navigate</h4>
          <Container>
            <Row>
              <Col>
                <Container className="nav-items">
                  <Row>
                    <Link
                      className="nav-item"
                      activeClass="active"
                      to="projects-summary"
                      spy={true}
                      smooth={true}
                      offset={-20}
                      duration={500}
                    >
                      Projects Summary
                    </Link>
                  </Row>
                  <Row>
                    <Link
                      className="nav-item"
                      activeClass="active"
                      to="education"
                      spy={true}
                      smooth={true}
                      offset={-20}
                      duration={500}
                    >
                      Education
                    </Link>
                  </Row>
                  <Row>
                    <Link
                      className="nav-item"
                      activeClass="active"
                      to="experience"
                      spy={true}
                      smooth={true}
                      offset={-20}
                      duration={500}
                    >
                      Experience
                    </Link>
                  </Row>
                  <Row>
                    <Link
                      className="nav-item"
                      activeClass="active"
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={-20}
                      duration={500}
                    >
                      Skills
                    </Link>
                  </Row>
                  <Row>
                    <Link
                      className="nav-item"
                      activeClass="active"
                      to="achievements"
                      spy={true}
                      smooth={true}
                      offset={-20}
                      duration={500}
                    >
                      Achievements
                    </Link>
                  </Row>
                </Container>
              </Col>
              <Col>
                <a className="nav-item" href="/projects">
                  All Projects
                </a>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <p className="copyright">
        &copy; {year} Finlay Goff. All rights reserved.
      </p>
    </Container>
  );
};

export default Footer;
