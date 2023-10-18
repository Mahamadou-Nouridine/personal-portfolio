"use client";
import React, { useState } from "react";
import { Badge, Button } from "react-bootstrap";
import ImageCaroussel from "./ImageCaroussel";
import { BiCodeAlt, BiLinkExternal } from "react-icons/bi";

const PortfolioModal = ({ show, handleClose, project }) => {
  const [messageShow, showMessage] = useState(false);
  const [message, setMessage] = useState("");
  const openMessage = (message) => {
    setMessage(message);
    showMessage(true);
  };
  const closeMessage = () => {
    setMessage("");
    showMessage(false);
  };
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
          <div
            style={{
              // maxWidth: 250,
              width: "100%",
              scrollBehavior: "smooth",
              overscrollBehaviorInline: "contain",
              scrollSnapType: "inline mandatory",
            }}
            className="info-content tags has-scrollbar pb-1 d-flex"
          >
            {project.tags.map((tag, index) => (
              <span key={index} className="filter-item">
                <button className="title ms-0 me-1 tag">{tag}</button>
              </span>
            ))}
          </div>
          <div className="my-2" style={{ height: 30 }}>
            {messageShow && (
              <Badge style={{ left: 250 }} className="" bg="info" text="dark">
                {message}
              </Badge>
            )}
          </div>
          <div className="action-buttons">
            <span
              onMouseEnter={() => openMessage(project.demo.message)}
              onMouseLeave={closeMessage}
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
              onMouseEnter={() => openMessage(project.sourceCode.message)}
              onMouseLeave={closeMessage}
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
