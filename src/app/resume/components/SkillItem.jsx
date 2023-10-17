import React from "react";

const SkillItem = ({ skill }) => {
  return (
    <li className="skills-item">
      <div className="title-wrapper">
        <h5 className="h5 mb-0 notranslate">{skill.name}</h5>
        <data value={skill.percentage}>{skill.percentage}%</data>
      </div>

      <div className="skill-progress-bg">
        <div
          className="skill-progress-fill"
          style={{ width: skill.percentage + "%" }}
        ></div>
      </div>
    </li>
  );
};

export default SkillItem;
