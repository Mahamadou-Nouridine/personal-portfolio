import React from "react";
import skills from "../../data/skills";
import SkillItem from "./SkillItem";

const SkillSection = ({ type }) => {
  const category = skills.find((skill) => skill.type === type);

  if (!category) return null;

  return (
    <ul className="skills-list content-card skill-tags-list">
      {category.items.map((item, index) => (
        <SkillItem item={item} key={index} />
      ))}
    </ul>
  );
};

export default SkillSection;
