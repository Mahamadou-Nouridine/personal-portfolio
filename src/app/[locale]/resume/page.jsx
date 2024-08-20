import React from "react";
import EducationSection from "./components/EducationSection";
import ExpericeSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import CertificationsSection from "./components/CertificationsSection";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Nouridine | Resume",
};

const Resume = () => {
  const t = useTranslations("navbar")
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">{t("resume")}</h2>
      </header>

      <ExpericeSection />

      <EducationSection />

      <SkillsSection />

      <CertificationsSection />
      <div className="w-100 mt-5">
        <a target="_blank" href={"/assets/" + useTranslations("resume")('name')}>
          <button className="form-btn m-auto" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>{useTranslations("resume-page")('download-cv')}</span>
          </button>
        </a>
        <p  className="text-center" style={{color: "rgba(255, 219, 112, 0.6)", fontSize: 13}}>
          {useTranslations('cv-version')('text')}
        </p>
      </div>
    </article>
  );
};

export default Resume;
