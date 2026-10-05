import React from "react";
import { useTranslations } from "next-intl";

const ProjectItem = ({ project }) => {
  const t = useTranslations("resume-page");

  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{project.name}</h4>

      <span>{project.period}</span>

      {project.description && (
        <pre className="timeline-text">{project.description}</pre>
      )}

      {project.tech?.length > 0 && (
        <div className="tech-stack-container">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      )}

      {project.link && (
        <a
          className="d-inline"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("visit-platform")}
        </a>
      )}
    </li>
  );
};

export default ProjectItem;