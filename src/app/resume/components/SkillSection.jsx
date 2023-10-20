import React from "react";
import skills from "../../../data/skills";
import SkillItem from "./SkillItem";

const SkillSection = ({ type }) => {
  return (
    <>
      <ul className="skills-list content-card">
        {skills
          .filter((skil) => skil.type == type)
          .sort((a, b) => b.percentage - a.percentage)
          .map((skill, index) => (
            <SkillItem skill={skill} key={index} />
          ))}
      </ul>
    </>
  );
};

export default SkillSection;
