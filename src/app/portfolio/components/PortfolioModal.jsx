"use client";
import React from "react";
import { Button } from "react-bootstrap";
import ImageCaroussel from "./ImageCaroussel";
import { BiCodeAlt, BiLinkExternal } from "react-icons/bi";

const PortfolioModal = ({ show, handleClose, project }) => {
  return project ? (
    <div
      className={`modal-container ${show ? "active" : ""}`}
      data-modal-container
    >
      <div className={`overlay ${show ? "active" : ""}`} data-overlay></div>

      <section className="portfolio-modal">
        <button
          onClick={handleClose}
          className="modal-close-btn"
          data-modal-close-btn
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="portfolio-modal-img-wrapper" style={{ width: "100%" }}>
          <figure className="portfolio-image-box" style={{ width: "100%" }}>
            <ImageCaroussel images={project.images} />
          </figure>
          <div className="action-buttons">
            <span
              className="d-block"
              tabIndex="0"
              data-toggle="tooltip"
              title={project.demo.message}
            >
              <Button disabled={!project.demo.public} variant="neutral">
                <a
                  style={{ color: "unset" }}
                  className="d-inline"
                  href={project.demo.link}
                  target="_blank"
                >
                  demo
                </a>
                <BiLinkExternal style={{ fontSize: 20 }} className="icon" />
              </Button>
            </span>
            <span
              className="d-block"
              tabIndex="0"
              data-toggle="tooltip"
              title={project.sourceCode.message}
            >
              <Button disabled={!project.sourceCode.public} variant="neutral">
                <a
                  style={{ color: "unset" }}
                  className="d-inline"
                  href={project.sourceCode.link}
                  target="_blank"
                >
                  Source
                </a>
                <BiCodeAlt style={{ fontSize: 20 }} className="icon" />
              </Button>
            </span>
          </div>
        </div>

        <div className="modal-content">
          <h4 className="h3 modal-title" data-modal-title>
            {project.name}
          </h4>

          <time dateTime="2021-06-14">{project.date}</time>

          <div data-modal-text>
            <p>{project.description}</p>
          </div>
        </div>
      </section>
    </div>
  ) : (
    ""
  );
};

export default PortfolioModal;
