import React from "react";
import services from "../../data/services";
import Service from "./Service";
import { useTranslations } from "next-intl";

const ServiceSection = () => {
  const tAbout  = useTranslations('about-page')
  const tServicesData = useTranslations("services-data")
  const keys = ["backend-service", "frontend-service", "mobile-service", "deployment-service"]
  return (
    <section className="service">
      <h3 className="h3 service-title">{tAbout('service-section-title')}</h3>

      <ul className="service-list p-0">
        {keys.map((key, index) => (
          <Service title={tServicesData(`${key}.title`)} icon={tServicesData(`${key}.icon`)} description={tServicesData(`${key}.description`)} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default ServiceSection;
