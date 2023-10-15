import React from "react";
import { Image } from "react-bootstrap";

const PortfolioItem = ({ hadleShow, project, select }) => {
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

          <Image src={project.displayImage} alt="finance" loading="lazy" />
        </figure>

        <h3 className="project-title">{project.name}</h3>

        {/* <p className="project-category">Building Drawing</p> */}
        <p className="contact-title">Tech stack</p>
        <div
          style={{
            maxWidth: 250,
            width: "100%",
            overflowX: "auto",
            scrollBehavior: "smooth",
            overscrollBehaviorInline: 'contain',
            scrollSnapType: "inline mandatory",
          }}
          className="info-content has-scrollbar pb-1"
        >
          <p style={{scrollSnapAlign: 'center'}} className="title ms-0 d-inline me-1">React</p>
          <p style={{scrollSnapAlign: 'center'}} className="title ms-0 d-inline me-1">React</p>
          <p style={{scrollSnapAlign: 'center'}} className="title ms-0 d-inline me-1">React</p>
          <p style={{scrollSnapAlign: 'center'}} className="title ms-0 d-inline me-1">React</p>
          <p style={{scrollSnapAlign: 'center'}} className="title ms-0 d-inline me-1">React</p>
          <p style={{scrollSnapAlign: 'center'}} className="title ms-0 d-inline me-1">React</p>
          <p style={{scrollSnapAlign: 'center'}} className="title ms-0 d-inline me-1">React</p>
          <p style={{scrollSnapAlign: 'center'}} className="title ms-0 d-inline me-1">React</p>
        </div>
      </div>
    </li>
  );
};

export default PortfolioItem;
