import React from "react";
import EducationSection from "./components/EducationSection";
import ExpericeSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import CertificationsSection from "./components/CertificationsSection";

export const metadata = {
  title: "Nouridine | Resume",
};

const resume = () => {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <EducationSection />

      <ExpericeSection />

      <SkillsSection />

      <CertificationsSection />
    </article>
  );
};

export default resume;
