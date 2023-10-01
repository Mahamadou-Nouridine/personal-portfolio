import React from "react";

const SkillItem = ({ skill }) => {
  return (
    <li class="skills-item">
      <div class="title-wrapper">
        <h5 class="h5">{skill.name}</h5>
        <data value={skill.percentage}>{skill.percentage}%</data>
      </div>

      <div class="skill-progress-bg">
        <div
          class="skill-progress-fill"
          style={{ width: skill.percentage + "%" }}
        ></div>
      </div>
    </li>
  );
};

export default SkillItem;
