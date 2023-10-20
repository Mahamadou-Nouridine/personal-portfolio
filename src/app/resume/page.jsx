import React from "react";
import EducationSection from "./components/EducationSection";
import ExpericeSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import CertificationsSection from "./components/CertificationsSection";
import DownloadCvButton from "./components/DownloadCvButton";
import PageTitle from "../components/PageTitle"

export const metadata = {
  title: "Nouridine | Resume",
};

const resume = () => {
  return (
    <article className="resume" data-page="resume">
      <PageTitle section="resume" />

      <EducationSection />

      <ExpericeSection />

      <SkillsSection />

      <CertificationsSection />

      <DownloadCvButton />
    </article>
  );
};

export default resume;
