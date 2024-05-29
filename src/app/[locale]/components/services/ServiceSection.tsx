import React from "react";
import services from "../../data/services.json";
import Service from "./Service";
import { useTranslations, useLocale } from "next-intl";

const ServiceSection = () => {
  const local = useLocale() as Locals;
  const tAbout = useTranslations("about-page");
  return (
    <section className="service">
      <h3 className="h3 service-title">{tAbout("service-section-title")}</h3>

      <ul className="service-list p-0">
        {services[local].map((service, index) => (
          <Service service={service} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default ServiceSection;
