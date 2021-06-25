import "./Sidebar.css";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-scroll";

const Sidebar = ({}) => {
  return (
    <Col className="sidebar">
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
    </Col>
  );
};

export default Sidebar;
