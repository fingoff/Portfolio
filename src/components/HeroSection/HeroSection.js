import "./HeroSection.css";
import React from "react";
import Header from "../Header/Header";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";
import Typist from "react-typist";


const HeroSection = ({}) => {
  return (
    <div className="hero-img">
      <Header />
      <div className="hero-text">
        <Typist cursor={{ show: false }}>
          <h1>Hi, I'm Finlay Goff</h1>
          <Typist.Delay ms={500} />
          <br />
          <p>Welcome to my Portfolio Web Page, built with </p>
          <p>React</p>
          <Typist.Backspace count={5} delay={300} />
          <Typist.Delay ms={500} />
          <p>CSS</p>
          <Typist.Backspace count={3} delay={300} />
          <Typist.Delay ms={500} />
          <p>Love &#10084;</p>
        </Typist>
        {/* <Button variant="primary" size="lg">
          Let's Talk
        </Button>{" "} */}
        <Link
          activeClass="active"
          to="projects-summary"
          spy={true}
          smooth={true}
          offset={-150}
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

export default HeroSection;
