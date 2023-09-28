import Image from "next/image";
import React from "react";

const Service = ({ service }) => {
  return (
    <li class="service-item">
      <div class="service-icon-box">
        <Image src={service.icon} alt="design icon" width={70} height={70} />
      </div>

      <div class="service-content-box">
        <h4 class="h4 service-item-title">{service.title}</h4>

        <p class="service-item-text">{service.description}</p>
      </div>
    </li>
  );
};

export default Service;
