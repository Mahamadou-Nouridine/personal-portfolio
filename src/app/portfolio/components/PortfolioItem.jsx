import React from "react";
import { Image } from "react-bootstrap";

const PortfolioItem = ({hadleShow}) => {
  return (
    <li
      className="project-item  active"
      data-filter-item
      data-category="building drawing"
    >
      <div href="#">
        <figure className="project-img">
          <div onClick={hadleShow} style={{cursor: "pointer"}} className="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <Image src="./assets/images/house.jpg" alt="finance" loading="lazy" />
        </figure>

        <h3 className="project-title">architecture</h3>

        <p className="project-category">Building Drawing</p>
      </div>
    </li>
  );
};

export default PortfolioItem;
