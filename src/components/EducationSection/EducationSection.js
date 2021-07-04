import "./EducationSection.css";
import React from "react";
import { Fade } from "@stahl.luke/react-reveal";
import imperialLogo from "../../images/ImperialLogo.png";
import LAELogo from "../../images/LAELogo.png";
import stEdwardsLogo from "../../images/StEdwardsLogo.jpeg";
import Image from "react-bootstrap/Image";

const EducationSection = ({}) => {
  return (
    <section id="education">
      <Fade bottom>
        <h1>Education</h1>
        <div className="main-timeline">
          <Fade bottom>
            <div className="timeline">
              <div className="icon"></div>
              <div className="image-content">
                <div className="image-outer">
                  <Image
                    src={imperialLogo}
                    className="image"
                    roundedCircle
                    alt="..."
                  />
                </div>
              </div>
              <div className="timeline-content">
                <h5 className="title">Imperial College London</h5>
                <h6 className="date">2018-2022</h6>
                <p className="description">
                  <ul>
                    <li>
                      Achieved ~67% in 2nd year, 85% in Computing Lab module.
                    </li>
                    <li>
                      Specialising in: Machine Learning, Mathematics for Signals
                      & Systems, High-Level Programming, Operations Research,
                      Embedded Systems, Deep Learning, Robotics.
                    </li>
                    <li>
                      Completing Business School module alongside studies:
                      Managerial Economics.
                    </li>
                    <li>
                      Relevant 2nd year modules: Mathematics, Object-Oriented
                      Programming, Computer Architecture, Language Processors,
                      Databases, Digital Electronics, Signals & Linear Systems.
                    </li>
                    <li>
                      Experienced with Quartus Prime from various electronics
                      lab sessions throughout 2nd year.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="timeline">
              <div className="icon"></div>
              <div className="image-content">
                <div className="image-outer">
                  <Image
                    src={LAELogo}
                    className="image"
                    roundedCircle
                    alt="..."
                  />
                </div>
              </div>
              <div className="timeline-content">
                <h5 className="title">London Academy of Excellence </h5>
                <h6 className="date">2016-2018</h6>
                <p className="description">
                  <ul>
                    <li>
                      A-Levels: Mathematics (A*), Physics (A*), Economics (A),
                      1st year Psychology (A).
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="timeline">
              <div className="icon"></div>
              <div className="image-content">
                <div className="image-outer">
                  <Image
                    src={stEdwardsLogo}
                    className="image"
                    roundedCircle
                    alt="..."
                  />
                </div>
              </div>
              <div className="timeline-content">
                <h5 className="title">St Edward's Church of England School </h5>
                <h6 className="date">2011-2016</h6>
                <p className="description">
                  <ul>
                    <li>GCSEs: 4 A*'s, 6 A's</li>
                  </ul>
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </Fade>
    </section>
  );
};

export default EducationSection;
