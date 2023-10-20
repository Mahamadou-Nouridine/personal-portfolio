"use client";
import Link from "next/link";
import React from "react";
import staticData from "@/data/staticData.json";
import { useSelector } from "react-redux";

const AboutMeSection = () => {
  const lang = useSelector((state) => state.language);
  return (
    <section className="about-text">
      <p>
        {staticData[lang].aboutMe}
        <span className="d-block">
          {lang == "en" ? (
            <>
              Consider sending me a message from my{" "}
              <Link className="d-inline" href="/contact">
                contact page
              </Link>{" "}
              or email me to{" "}
              <a
                className="d-inline"
                href="mailto:mahamadounouridinem@gmail.com"
              >
                mahamadounouridinem@gmail.com
              </a>{" "}
              for further discussion.
            </>
          ) : (
            <>
              Veuillez m&apos;envoyer un message depui ma{" "}
              <Link className="d-inline" href="/contact">
              page de contact
              </Link>{" "}
              ou m&apos;envoyer un email à l&apos;addresse{" "}
              <a
                className="d-inline"
                href="mailto:mahamadounouridinem@gmail.com"
              >
                mahamadounouridinem@gmail.com
              </a>{" "}
              afin de discuter d&apos;avantage.
            </>
          )}
        </span>
      </p>
    </section>
  );
};

export default AboutMeSection;
