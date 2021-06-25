import "./EducationSection.css";
import React from "react";
import img from "../../images/FGlogo.png";
import Image from "react-bootstrap/Image";

const EducationSection = ({}) => {
  return (
    <section id="education">
      <h1>Education</h1>
      <div className="main-timeline">
        <div className="timeline">
          <div className="icon"></div>
          <div className="image-content">
            <div className="image-outer">
              <Image src={img} className="image" roundedCircle alt="..." />
            </div>
          </div>
          <div className="timeline-content">
            <h5 className="title">Imperial College London <span className="date">2018-2022</span></h5>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat
              volutpat. Aenean interdum finibus efficitur. Praesent dapibus
              dolor felis, eu ultrices elit molestie.
            </p>
          </div>
        </div>
        <div className="timeline">
          <div className="icon"></div>
          <div className="image-content">
            <div className="image-outer">
              <Image src={img} className="image" roundedCircle alt="..." />
            </div>
          </div>
          <div className="timeline-content">
            <h5 className="title">Imperial College London <span className="date">2018-2022</span></h5>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat
              volutpat. Aenean interdum finibus efficitur. Praesent dapibus
              dolor felis, eu ultrices elit molestie.
            </p>
          </div>
        </div>
        <div className="timeline">
          <div className="icon"></div>
          <div className="image-content">
            <div className="image-outer">
              <Image src={img} className="image" roundedCircle alt="..." />
            </div>
          </div>
          <div className="timeline-content">
            <h5 className="title">Imperial College London <span className="date">2018-2022</span></h5>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat
              volutpat. Aenean interdum finibus efficitur. Praesent dapibus
              dolor felis, eu ultrices elit molestie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
