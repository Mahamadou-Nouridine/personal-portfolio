"use client";
import React from "react";
import { Button } from "react-bootstrap";
import ImageCaroussel from "./ImageCaroussel";

const PortfolioModal = ({show, handleClose}) => {
  return (
    <div className={`modal-container ${show ?"active": ""}`} data-modal-container>
      <div className={`overlay ${show ?"active": ""}`} data-overlay></div>

      <section className="portfolio-modal">
        <button onClick={handleClose} className="modal-close-btn" data-modal-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="portfolio-modal-img-wrapper" style={{ width: "100%"}}>
          <figure className="portfolio-image-box" style={{ width: "100%"}}>
            {/* <img
              src="./assets/images/project-6.png"
              alt="metaspark"
              loading="lazy"
              style={{ width: "100%"}}
            /> */}
            <ImageCaroussel />
          </figure>
          <Button variant="primary" >Submit</Button>
        </div>

        <div className="modal-content">
          <h4 className="h3 modal-title" data-modal-title>
            Daniel lewis
          </h4>

          <time datetime="2021-06-14">14 June, 2021</time>

          <div data-modal-text>
            <p>
              Richard was hired to create a corporate identity. We were very
              pleased with the work done. She has a lot of experience and is
              very concerned about the needs of client. Lorem ipsum dolor sit
              amet, ullamcous cididt consectetur adipiscing elit, seds do et
              eiusmod tempor incididunt ut laborels dolore magnarels alia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioModal;
