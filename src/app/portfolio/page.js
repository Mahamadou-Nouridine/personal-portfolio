"use client";
import React, { useState } from "react";
import PortfolioModal from "./components/PortfolioModal.jsx";
import PortfolioItem from "./components/PortfolioItem.jsx";
import FilterList from "./components/FilterList.jsx";
import projects from "@/data/projects.js";

const Portfolio = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const hadleShow = () => setShow(true);
  const [selected, select] = useState(null);
  const [selectedTag, selectTag] = useState(null);
  const tags = [...new Set(projects.map((project) => project.tags).flat(1))];
  const shownProjects = !selectedTag
    ? projects
    : projects.filter((project) => {
        return project.tags.includes(selectedTag);
      });

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <FilterList selected={selectedTag} selectTag={selectTag} tags={tags} />

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Select category
            </div>

            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            <li className="select-item">
              <button data-select-item>All</button>
            </li>

            <li className="select-item">
              <button data-select-item>Building Drawing</button>
            </li>

            <li className="select-item">
              <button data-select-item>3D Modeling</button>
            </li>

            <li className="select-item">
              <button data-select-item>House Blueprint</button>
            </li>
          </ul>
        </div>

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
    </article>
  );
};

export default Portfolio;
