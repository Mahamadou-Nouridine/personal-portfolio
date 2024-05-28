import Image from "next/image";
import React from "react";

const Service = ({ title, icon, description }) => {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        <Image src={icon} alt={title} width={70} height={70} />
      </div>

      <div className="service-content-box">
        <h4 className="h4 service-item-title">{title}</h4>

        <p className="service-item-text">{description}</p>
      </div>
    </li>
  );
};

export default Service;
