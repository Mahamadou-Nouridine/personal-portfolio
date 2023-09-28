import Image from "next/image";
import React from "react";
import services from "../../../data/services";
import Service from "./Service";

const ServiceSection = () => {
  return (
    <section class="service">
      <h3 class="h3 service-title">What I Do</h3>

      <ul class="service-list">
        {services.map((service, index) => (
          <Service service={service} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default ServiceSection;
