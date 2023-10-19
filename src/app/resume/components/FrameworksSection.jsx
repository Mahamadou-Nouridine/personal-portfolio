import React from "react";
import skills from "../../../data/skills";
import SkillItem from "./SkillItem";

const FrameworksSection = () => {
  return (
    <ul className="skills-list content-card">
      {skills
        .filter((skil) => skil.type == "framework")
        .sort((a, b) => b.percentage - a.percentage)
        .map((skill, index) => (
          <SkillItem skill={skill} key={index} />
        ))}
    </ul>
  );
};

export default FrameworksSection;
