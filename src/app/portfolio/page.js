import React from "react";
import PortfolioSection from "./components/PortfolioSection";
import PageTitle from "../components/PageTitle";

export const metadata = {
  title: "Nouridine | Portfolio",
};

const Portfolio = () => {
  return (
    <article className="portfolio" data-page="portfolio">
      <PageTitle section="portfolio" />
      <PortfolioSection />
    </article>
  );
};

export default Portfolio;
