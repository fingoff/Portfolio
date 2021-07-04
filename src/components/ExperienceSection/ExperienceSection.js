import "./ExperienceSection.css";
import React from "react";
import { Fade } from "@stahl.luke/react-reveal";

const ExperienceSection = ({}) => {
  return (
    <section id="experience">
      <h1>Experience</h1>
      <Fade bottom>
        <div className="experience">
          <h5 className="date">04/2021 - 09/2021</h5>
          <h4 className="role">Junior Software Developer</h4>
          <h5 className="company">Solidatus</h5>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat
            volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor
            felis, eu ultrices elit molestie.
          </p>
        </div>
      </Fade>
      <Fade bottom>
        <div className="experience">
          <h5 className="date">07/2019 - 08/2020</h5>
          <h4 className="role">Food Delivery</h4>
          <h5 className="company">Uber Eats</h5>
          <p className="description">
            <ul>
              <li>
                Responsible for the handling of customer’s food between
                restaurant and delivery point, had to ensure that it was to a
                high standard upon arrival and that it came in a timely fashion.
              </li>
              <li>
                Was self-motivated to work while having no set hours, would
                cycle in all weather conditions in order to accomplish my
                personal delivery targets.
              </li>
            </ul>
          </p>
        </div>
      </Fade>
      <Fade bottom>
        <div className="experience">
          <h5 className="date">07/2018 - 10/2018</h5>
          <h4 className="role">Customer Assistant</h4>
          <h5 className="company">VUE Cinemas</h5>
          <p className="description">
            <ul>
              <li>
                Worked quickly and efficiently to meet time demands when
                cleaning screens and persuading customers to make certain
                purchases in order to meet sales targets while managing tills.
              </li>
              <li>
                Operated in small teams (3-6) and communicated well with my
                co-workers in order to provide a high standard of customer
                service.
              </li>
            </ul>
          </p>
        </div>
      </Fade>
      <Fade bottom>
        <div className="experience">
          <h5 className="date">01/2017 - 04/2017</h5>
          <h4 className="role">Volunteer</h4>
          <h5 className="company">Carpenters Primary School</h5>
          <p className="description">
            <ul>
              <li>
                Assisted the teacher in supervising 30 pupils on Friday
                afternoons.
              </li>
              <li>
                Required strong communication and listening skills to follow
                instructions set by staff and relay this onto young children.
              </li>
              <li>
                Responsibility of care and consideration of health and safety
                protocols when safeguarding children.
              </li>
            </ul>
          </p>
        </div>
      </Fade>
    </section>
  );
};

export default ExperienceSection;
