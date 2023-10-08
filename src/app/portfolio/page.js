'use client'
import React, { useState } from "react";
import PortfolioModal from "../components/PortfolioModal.jsx"
import PortfolioItem from './components/PortfolioItem.jsx'

const Portfolio = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const hadleShow = () => setShow(true)

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button className="active" data-filter-btn>
              All
            </button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Building Drawing</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>3D Modeling</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>House Blueprint</button>
          </li>
        </ul>

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
          {new Array(10).fill(1).map(el => <PortfolioItem hadleShow={hadleShow} key={el} />)}
        </ul>
      </section>
      <PortfolioModal show={show} handleClose={handleClose} />
    </article>
  );
};

export default Portfolio;
