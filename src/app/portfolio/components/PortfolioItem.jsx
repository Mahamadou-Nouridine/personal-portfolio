import React from "react";
import { Image } from "react-bootstrap";

const PortfolioItem = ({ hadleShow, project, select, selectedTag }) => {
  return (
    <li
      className="project-item  active"
      data-filter-item
      data-category="building drawing"
    >
      <div>
        <figure className="project-img">
          <div
            onClick={() => {
              hadleShow();
              select(project);
            }}
            style={{ cursor: "pointer" }}
            className="project-item-icon-box"
          >
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <Image
            src={project.displayImage}
            alt={project.name}
            loading="eager"
          />
        </figure>

        <h3 className="project-title notranslate ms-0">{project.name}</h3>

        <p className="contact-title">Tags</p>
        <div
          style={{
            maxWidth: 250,
            width: "100%",
            scrollBehavior: "smooth",
            overscrollBehaviorInline: "contain",
            scrollSnapType: "inline mandatory",
          }}
          className="info-content active tags has-scrollbar pb-1 d-flex"
        >
          {project.tags.map((tag, index) => (
            <span key={index} className="filter-item">
              <button className={`title ms-0 me-1 tag ${selectedTag == tag? "active":""}`}>{tag}</button>
            </span>
          ))}
        </div>
      </div>
    </li>
  );
};

export default PortfolioItem;
