"use client";

import React from "react";
import { Accordion } from "react-bootstrap";
import SpokenLanguagesSection from "./SpokenLanguagesSection";
import SkillSection from "./SkillSection";
import { useTranslations } from "next-intl";
// import "../styles/accordion.css";


const SkillsSection = () => {
  const t = useTranslations('resume-page')
  const skills = [
    {
      title: t('used-technology'),
      type: "tech",
    },
    {
      title: t("used-frameworks"),
      type: "framework",
    },
    {
      title: t('tools'),
      type: "tool",
    },
  ];
  return (
    <Accordion defaultActiveKey="0">
      {skills.map(({ title, type }, index) => (
        <Accordion.Item
          key={index}
          style={{ backgroundColor: "transparent", border: "none" }}
          eventKey={`${index}`}
        >
          <Accordion.Header className="string">
            {title}
          </Accordion.Header>
          <Accordion.Body bsPrefix="p-0">
            <SkillSection type={type} />
          </Accordion.Body>
        </Accordion.Item>
      ))}
      <Accordion.Item
        style={{ backgroundColor: "transparent", border: "none" }}
        eventKey={`${skills.length}`}
      >
        <Accordion.Header>{t('spoken')}</Accordion.Header>
        <Accordion.Body bsPrefix="p-0">
          <SpokenLanguagesSection />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default SkillsSection;
