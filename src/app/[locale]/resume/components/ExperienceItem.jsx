import React from "react";
import Markdown from "react-markdown";

const ExperienceItem = ({ experience }) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{experience.name}</h4>

      <span>
        {experience.from} — {experience.to}
      </span>
      <pre className="timeline-text">{experience.description}</pre>
    </li>
  );
};

export default ExperienceItem;
