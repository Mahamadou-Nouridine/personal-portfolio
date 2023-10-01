import React from "react";
import skills from "../../../data/skills";
import SkillItem from "./SkillItem";

const SkillsSection = () => {
  return (
    <section class="skill">
      <h3 class="h3 skills-title">Technologies I Use</h3>

      <ul class="skills-list content-card">
        {skills.sort((a, b) => b.percentage - a.percentage).map((skill, index) => (
          <SkillItem skill={skill} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;
