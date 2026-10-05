import React from "react";
import ProjectItem from "./ProjectItem";
import projects from "../../data/resume-projects.json";
import { useLocale, useTranslations } from "next-intl";

const ProjectsSection = () => {
  const local = useLocale();
  const t = useTranslations("resume-page");

  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <ion-icon name="cube-outline"></ion-icon>
        </div>

        <h3 className="h3">{t("projects")}</h3>
      </div>

      <ol className="timeline-list p-0">
        {projects[local].map((project, index) => (
          <ProjectItem project={project} key={index} />
        ))}
      </ol>
    </section>
  );
};

export default ProjectsSection;