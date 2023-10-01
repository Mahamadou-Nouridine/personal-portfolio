import React from "react";
import Markdown from "react-markdown";

const ExperienceItem = ({ experience }) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{experience.name}</h4>

      <span>
        {experience.from} — {experience.to}
      </span>

      <p className="timeline-text">{experience.description}</p>
    </li>
  );
};

export default ExperienceItem;
