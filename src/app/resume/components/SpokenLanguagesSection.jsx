import React from "react";
import SpokenLanguageItem from "./SpokenLangageItem";
import languages from "../../../data/languages";

const SpokenLanguagesSection = () => {
  return (
    <section className="skill">
      <h3 className="h3 skills-title">Spoken Languages</h3>

      <ul className="skills-list content-card">
        <span className="mb-5">
          <h2 className="h3 skills-title">Foreign</h2>

          {languages
            .filter((lang) => lang.type == "foreign")
            .map((language, index) => (
              <SpokenLanguageItem lang={language} key={index} />
            ))}
        </span>
        <h2 className="h3 skills-title">Local</h2>

        {languages
          .filter((lang) => lang.type == "local")
          .map((language, index) => (
            <SpokenLanguageItem lang={language} key={index} />
          ))}
      </ul>
    </section>
  );
};

export default SpokenLanguagesSection;
