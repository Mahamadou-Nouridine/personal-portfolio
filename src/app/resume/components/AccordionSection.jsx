"use client"

import React from "react";
import { Accordion } from "react-bootstrap";
import SkillsSection from "./SkillsSection";
import SpokenLanguagesSection from "./SpokenLanguagesSection";
import '../styles/accordion.css'

const AccordionSection = () => {
  return (
    <Accordion  defaultActiveKey="0">
      <Accordion.Item style={{backgroundColor: "transparent", border: "none" }}   eventKey="0">
        <Accordion.Header className="string"  >Technologies I Use</Accordion.Header>
        <Accordion.Body >
          <SkillsSection />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item style={{backgroundColor: "transparent", border: "none" }} eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        <SpokenLanguagesSection />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionSection;
