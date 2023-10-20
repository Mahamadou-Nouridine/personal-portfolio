"use client"
import React from "react";
import services from "@/data/services";
import staticData from "@/data/staticData.json";
import Service from "./Service";
import { useSelector } from "react-redux";

const ServiceSection = () => {
  const lang = useSelector((state) => state.language);

  return (
    <section className="service">
      <h3 className="h3 service-title">{staticData[lang].about.serviceSection}</h3>

      <ul className="service-list p-0">
        {services.map((service, index) => (
          <Service service={service} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default ServiceSection;
