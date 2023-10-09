import React from "react";

const EducationItem = ({ education }) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{education.name}</h4>

      <span>
        {education.from} — {education.to}
      </span>

      <p className="timeline-text">{education.description}</p>
    </li>
  );
};

export default EducationItem;
