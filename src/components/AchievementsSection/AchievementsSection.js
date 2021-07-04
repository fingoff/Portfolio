import "./AchievementsSection.css";
import React from "react";
import { Fade } from "@stahl.luke/react-reveal";

const AchievementsSection = ({}) => {
  return (
    <section className="achievements" id="achievements">
      <h1>Achievements</h1>
      <Fade bottom>
        <div className="achievement">
          <h5 className="date">10/2018 - present</h5>
          <h4 className="role">President’s Undergraduate Scholarship</h4>
          <p className="description">
            One of 112 undergraduates to receive this scholarship at Imperial
            College London for demonstrating the highest academic excellence and
            potential.
          </p>
        </div>
      </Fade>
      <Fade bottom>
        <div className="achievement">
          <h5 className="date">10/2018 - 06/2019</h5>
          <h4 className="role">Beit Hall Resident’s Committee</h4>
          <p className="description">
            Elected to represent 20 students in my halls of residence at
            university (2018/19) and attended meetings to discuss issues and
            organize events for my halls.
          </p>
        </div>
      </Fade>
      <Fade bottom>
        <div className="achievement">
          <h5 className="date">09/2017</h5>
          <h4 className="role">
            London Academy of Excellence Merit Scholarship
          </h4>
          <p className="description">
            Was awarded this scholarship at my sixth form for achieving A's (the
            top grade) in all 4 subjects in the end of year 12 exams.
          </p>
        </div>
      </Fade>
    </section>
  );
};

export default AchievementsSection;
