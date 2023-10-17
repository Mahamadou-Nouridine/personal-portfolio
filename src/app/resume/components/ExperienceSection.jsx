import React from "react";
import experiences from "../../../data/experiences";
import ExperienceItem from "./ExperienceItem";

const ExperienceSection = () => {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
        <ion-icon name="briefcase-outline"></ion-icon>
        </div>

        <h3 className="h3">Experiences</h3>
      </div>

      <ol className="timeline-list p-0">
        {experiences.map((experience, index) => <ExperienceItem key={index} experience={experience} />)}
      </ol>
    </section>
  );
};

export default ExperienceSection;
