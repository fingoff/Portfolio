import "./HeroSection.css";
import React from "react";
import Header from '../Header/Header'
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";

const Hero = ({}) => {
  return (
    <div className="hero-img">
      <Header />
      <div className="hero-text">
        <h1>Hi, I'm Finlay Goff</h1>
        <p>Welcome to my Portfolio Web Page, built with React etc etc</p>
        <Button variant="primary" size="lg">
          Let's Talk
        </Button>{" "}
        <Link
          activeClass="active"
          to="projects-summary"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
        >
          <Button variant="secondary" size="lg">
            Check Out My Work
            <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
