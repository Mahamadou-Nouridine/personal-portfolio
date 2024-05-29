import React from "react";
// import experiences from "../../data/experiences";
import experiences from "../../data/experiences.json";
import ExperienceItem from "./ExperienceItem";
import { useLocale } from "next-intl";

const ExperienceSection = () => {
  const local = useLocale()
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
        <ion-icon name="briefcase-outline"></ion-icon>
        </div>

        <h3 className="h3">Experiences</h3>
      </div>

      <ol className="timeline-list p-0">
        {experiences[local].map((experience, index) => <ExperienceItem key={index} experience={experience} />)}
      </ol>
    </section>
  );
};

export default ExperienceSection;
