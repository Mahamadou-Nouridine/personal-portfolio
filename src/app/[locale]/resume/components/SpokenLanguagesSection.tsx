import React from "react";
import SpokenLanguageItem from "./SpokenLangageItem";
import languages from "../../data/languages.json";
import { useTranslations, useLocale } from "next-intl";

const SpokenLanguagesSection = () => {
  const local = useLocale() as Locals;
  const t = useTranslations("resume-page");
  return (
    <section className="skill">
      <ul className="skills-list content-card">
        <span className="mb-5">
          <h2 className="h3 skills-title">{t("foreign")} </h2>

          {languages[local]
            .filter((lang) => lang.type == "foreign")
            .map((language, index) => (
              <SpokenLanguageItem lang={language} key={index} />
            ))}
        </span>
        <h2 className="h3 skills-title">{t("local")}</h2>

        {languages[local]
          .filter((lang) => lang.type == "local")
          .map((language, index) => (
            <SpokenLanguageItem lang={language} key={index} />
          ))}
      </ul>
    </section>
  );
};

export default SpokenLanguagesSection;
