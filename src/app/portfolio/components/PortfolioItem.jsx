import React from "react";
import { Image } from "react-bootstrap";

const PortfolioItem = ({hadleShow, project}) => {
  return (
    <li
      className="project-item  active"
      data-filter-item
      data-category="building drawing"
    >
      <div >
        <figure className="project-img">
          <div onClick={hadleShow} style={{cursor: "pointer"}} className="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <Image src={project.displayImage} alt="finance" loading="lazy" />
        </figure>

        <h3 className="project-title">{project.name}</h3>

        <p className="project-category">Building Drawing</p>
      </div>
    </li>
  );
};

export default PortfolioItem;
