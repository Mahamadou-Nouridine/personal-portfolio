"use client";
import React from "react";
import staticData from "../../data/staticData.json";
import { useSelector } from "react-redux";

const PageTitle = ({ section }) => {
  const lang = useSelector((state) => state.language);

  return (
    <header>
      <h2 className="h2 article-title">{staticData[lang][section].title}</h2>
    </header>
  );
};

export default PageTitle;
