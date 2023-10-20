"use client";

import React from "react";
import { Accordion } from "react-bootstrap";
import SpokenLanguagesSection from "./SpokenLanguagesSection";
import SkillSection from "./SkillSection";
import "../styles/accordion.css";
import staticData from "@/data/staticData.json";
import { useSelector } from "react-redux";


const SkillsSection = () => {
  const lang = useSelector((state) => state.language);
  const skills = [
    {
      title: staticData[lang].resume.technologySection,
      type: "tech",
    },
    {
      title: staticData[lang].resume.frameworkSection,
      type: "framework",
    },
    {
      title: staticData[lang].resume.toolSection,
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
          <Accordion.Header bsPrefix="text-white" className="string">
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
        <Accordion.Header>{staticData[lang].resume.languageSection}</Accordion.Header>
        <Accordion.Body bsPrefix="p-0">
          <SpokenLanguagesSection />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default SkillsSection;
