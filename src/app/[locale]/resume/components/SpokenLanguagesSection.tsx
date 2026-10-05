import React from "react";
import SpokenLanguageItem from "./SpokenLangageItem";
import languages from "../../data/languages.json";
import { useLocale } from "next-intl";

const SpokenLanguagesSection = () => {
  const local = useLocale() as Locals;
  return (
    <section className="skill">
      <ul className="skills-list content-card">
        {languages[local].map((language, index) => (
          <SpokenLanguageItem lang={language} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default SpokenLanguagesSection;
