import React from "react";
import EducationSection from "./components/EducationSection";
import ExpericeSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import CertificationsSection from "./components/CertificationsSection";
import SpokenLanguagesSection from "./components/SpokenLanguagesSection";

export const metadata = {
  title: "Nouridine | Resume",
};

const resume = () => {
  return (
    // <div style={{color: "white"}}>This is the resume</div>
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <EducationSection />

      <ExpericeSection />

      <SkillsSection />

      <CertificationsSection />

      <SpokenLanguagesSection />
    </article>
  );
};

export default resume;
