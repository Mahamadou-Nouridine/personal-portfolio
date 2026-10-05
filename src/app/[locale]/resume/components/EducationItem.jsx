import React from "react";

const EducationItem = ({ education }) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title notranslate">{education.name}</h4>

      <span>
        {education.from} — {education.to}
      </span>

      {education.description && (
        <p className="timeline-text">{education.description}</p>
      )}

      {education.bullets?.length > 0 && (
        <ul className="timeline-bullets">
          {education.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default EducationItem;
