import React from "react";

interface props {
  lang: Language;
}

const SpokenLangageItem: React.FC<props> = ({ lang }) => {
  return (
    <li className="skills-item">
      <div className="title-wrapper">
        <h5 className="h5 mb-0 notranslate">{lang.lang}</h5>
        <data value={lang.level}>{lang.level}</data>
      </div>
    </li>
  );
};

export default SpokenLangageItem;
