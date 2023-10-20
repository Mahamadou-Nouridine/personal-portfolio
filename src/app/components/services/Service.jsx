import Image from "next/image";
import React from "react";

const Service = ({ service }) => {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        <Image src={service.icon} alt={service.title} width={70} height={70} />
      </div>

      <div className="service-content-box">
        <h4 className="h4 service-item-title">{service.title}</h4>

        <p className="service-item-text">{service.description}</p>
      </div>
    </li>
  );
};

export default Service;
