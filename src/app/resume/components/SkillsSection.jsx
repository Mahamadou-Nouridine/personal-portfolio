"use client";

import React from "react";
import { Accordion } from "react-bootstrap";
import SpokenLanguagesSection from "./SpokenLanguagesSection";
import SkillSection from "./SkillSection";
import "../styles/accordion.css";

const skills = [
  {
    title: "Technologies I Use",
    type: "tech",
  },
  {
    title: "Frameworks I use",
    type: "framework",
  },
  {
    title: "Tools & Platforms",
    type: "framework",
  },
];

const SkillsSection = () => {
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
        <Accordion.Header>Spoken Languages</Accordion.Header>
        <Accordion.Body bsPrefix="p-0">
          <SpokenLanguagesSection />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default SkillsSection;
