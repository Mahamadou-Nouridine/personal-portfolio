import Image from "next/image";
import React from "react";
import services from "../../../data/services";
import Service from "./Service";

const ServiceSection = () => {
  return (
    <section className="service">
      <h3 className="h3 service-title">What I Do</h3>

      <ul className="service-list p-0">
        {services.map((service, index) => (
          <Service service={service} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default ServiceSection;
