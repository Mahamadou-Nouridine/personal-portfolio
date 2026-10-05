import React from "react";

const ExperienceItem = ({ experience }) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{experience.name}</h4>

      <span>
        {experience.from} — {experience.to}
      </span>

      {experience.description && (
        <pre className="timeline-text">{experience.description}</pre>
      )}

      {experience.bullets?.length > 0 && (
        <ul className="timeline-bullets">
          {experience.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default ExperienceItem;
