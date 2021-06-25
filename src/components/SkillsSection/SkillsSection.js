import "./SkillsSection.css";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"
import img from "../../images/FGlogo.png";
import Image from "react-bootstrap/Image";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Simple tooltip
  </Tooltip>
);

const SkillsSection = ({}) => {
  return (
    <section id="skills">
      <h1>Skills</h1>
      <Carousel role="listbox">
        <Carousel.Item active>
          <Row>
            <OverlayTrigger
              placement="bottom"
              overlay={renderTooltip}
            >
              <Col><Image src={img} className="image" alt="..." /></Col>
            </OverlayTrigger>
            <Col><Image src={img} className="image" alt="..." /></Col>
            <Col><Image src={img} className="image" alt="..." /></Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col><Image src={img} className="image" alt="..." /></Col>
            <Col><Image src={img} className="image" alt="..." /></Col>
            <Col><Image src={img} className="image" alt="..." /></Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};


export default SkillsSection;
