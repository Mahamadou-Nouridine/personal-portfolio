"use client";
import React, { useState } from "react";
import FilterList from "./FilterList";
import MobileFilter from "./MobileFilter";
import PortfolioModal from "./PortfolioModal";
import PortfolioItem from "./PortfolioItem";
import projects from "@/data/projects.js";

const PortfolioSection = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    document.body.style.overflow = "unset";
    setShow(false);
  };
  const hadleShow = () => {
    document.body.style.overflow = "hidden";
    setShow(true);
  };
  const [selected, select] = useState(null);
  const [selectedTag, selectTag] = useState(null);
  const tags = [...new Set(projects.map((project) => project.tags).flat(1))];
  const shownProjects = !selectedTag
    ? projects
    : projects.filter((project) => {
        return project.tags.includes(selectedTag);
      });
  return (
    <>
      <section className="projects">
        <p className="contact-title">Filter with tags</p>
        <FilterList selected={selectedTag} selectTag={selectTag} tags={tags} />

        <MobileFilter
          selected={selectedTag}
          selectTag={selectTag}
          tags={tags}
        />

        <ul className="project-list p-0">
          {shownProjects.map((project, index) => (
            <PortfolioItem
              select={select}
              project={project}
              hadleShow={hadleShow}
              key={index}
            />
          ))}
        </ul>
      </section>
      <PortfolioModal
        project={selected}
        show={show}
        handleClose={handleClose}
      />
    </>
  );
};

export default PortfolioSection;
