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
      <div className="w-100 mt-5">
        <a target="_blank" href="https://docs.google.com/document/d/19pH6CyMqmcBV4hDpf_U8NPw2-vR_ZkFSXwu3dD6pcSA/edit?usp=sharing">
          <button className="form-btn m-auto" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Download my CV</span>
          </button>
        </a>
      </div>
    </article>
  );
};

export default resume;
