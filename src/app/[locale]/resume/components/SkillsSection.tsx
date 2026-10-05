"use client";

import React from "react";
import { Accordion } from "react-bootstrap";
import SpokenLanguagesSection from "./SpokenLanguagesSection";
import SkillSection from "./SkillSection";
import skillCategories from "../../data/skills";
import { useTranslations } from "next-intl";


const SkillsSection = () => {
  const t = useTranslations('resume-page')
  const tSkill = useTranslations('resume-page.skills')
  return (
    <Accordion defaultActiveKey="0">
      {skillCategories.map(({ type }, index) => (
        <Accordion.Item
          key={index}
          style={{ backgroundColor: "transparent", border: "none" }}
          eventKey={`${index}`}
        >
          <Accordion.Header className="string">
            {tSkill(type)}
          </Accordion.Header>
          <Accordion.Body bsPrefix="p-0">
            <SkillSection type={type} />
          </Accordion.Body>
        </Accordion.Item>
      ))}
      <Accordion.Item
        style={{ backgroundColor: "transparent", border: "none" }}
        eventKey={`${skillCategories.length}`}
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
