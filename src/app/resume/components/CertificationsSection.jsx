"use client"
import certifications from "@/data/certifications";
import React from "react";
import { Image } from "react-bootstrap";
import staticData from "@/data/staticData.json";
import { useSelector } from "react-redux";

const CertificationsSection = () => {
  const lang = useSelector((state) => state.language);
  return (
    <section className="clients">
      <h3 className="h3 clients-title">{staticData[lang].resume.certification}</h3>

      <ul className="clients-list has-scrollbar">
        {certifications.map((certification, index) => (
          <li key={index} className="clients-item">
            <a href={certification.link} className="text-center">
              <Image src={certification.image} alt={certification.name} />
            </a>
            <h4 className="h4 text-center notranslate" data-testimonials-title>
              {certification.name}
            </h4>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CertificationsSection;
