import React from "react";
import PortfolioSection from "./components/PortfolioSection";

export const metadata = {
  title: "Nouridine | Portfolio",
};

const Portfolio = () => {
  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <PortfolioSection />
    </article>
  );
};

export default Portfolio;
