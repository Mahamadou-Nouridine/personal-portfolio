import React from "react";

const EducationItem = ({ education }) => {
  return (
    <li class="timeline-item">
      <h4 class="h4 timeline-item-title">{education.name}</h4>

      <span>
        {education.from} — {education.to}
      </span>

      <p class="timeline-text">{education.description}</p>
    </li>
  );
};

export default EducationItem;
