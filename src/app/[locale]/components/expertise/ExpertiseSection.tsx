import React from "react";
import expertiseData from "../../data/expertise.json";
import ExpertiseItem from "./ExpertiseItem";
import { useTranslations, useLocale } from "next-intl";

const ExpertiseSection = () => {
  const local = useLocale() as Locals;
  const tAbout = useTranslations("about-page");
  return (
    <section className="expertise">
      <h3 className="h3 expertise-title">{tAbout("expertise-section-title")}</h3>

      <ul className="expertise-list p-0">
        {expertiseData[local].map((expertise, index) => (
          <ExpertiseItem expertise={expertise} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default ExpertiseSection;
