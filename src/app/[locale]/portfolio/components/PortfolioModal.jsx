"use client";
import React, { useState } from "react";
import { Badge, Button } from "react-bootstrap";
import ImageCaroussel from "./ImageCaroussel";
import { BiCodeAlt, BiLinkExternal } from "react-icons/bi";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("portfolio-page");
  return project ? (
    <div
      className={`modal-container ${show ? "active" : ""}`}
      data-modal-container
    >
      <div className={`overlay ${show ? "active" : ""}`} data-overlay></div>

      <section className="portfolio-modal">
        <div className="portfolio-modal-img-wrapper" style={{ width: "100%" }}>
          <figure className="portfolio-image-box" style={{ width: "100%" }}>
            <ImageCaroussel images={project.images} />
          </figure>
          <div
            style={{
              maxWidth: 300,
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
              className="w-100"
            >
              <Button disabled={!project.demo.public} variant="neutral" className="w-100">
                <a
                  style={{ color: "unset" }}
                  className="d-flex align-items-center justify-content-center gap-2"
                  href={project.demo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{t('demo')}</span>
                  <BiLinkExternal style={{ fontSize: 20 }} />
                </a>
              </Button>
            </span>
            <span
              onMouseEnter={() => openMessage(project.sourceCode.message)}
              onMouseLeave={closeMessage}
              className="w-100"
            >
              <Button disabled={!project.sourceCode.public} variant="neutral" className="w-100">
                <a
                  style={{ color: "unset" }}
                  className="d-flex align-items-center justify-content-center gap-2"
                  href={project.sourceCode.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{t('source-code')}</span>
                  <BiCodeAlt style={{ fontSize: 20 }} />
                </a>
              </Button>
            </span>
          </div>
        </div>

        <div className="modal-content">
          <h4 className="h3 modal-title" data-modal-title>
            {project.name}
          </h4>

          <time dateTime={project.date}>{project.date}</time>

          <div className="tech-stack-container">
            {project.tags.map((tag, index) => (
              <span key={index} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="modal-description" data-modal-text>
            <p>{project.description}</p>
          </div>

          <Button
            onClick={handleClose}
            style={{
              width: 100,
              marginTop: '20px',
              backgroundColor: "var(--onyx)",
              border: "1px solid var(--jet)",
              alignSelf: "flex-end",
            }}
            className="text-white"
            variant="secondary"
            data-modal-close-btn
            aria-label={t('close-modal')}
          >
            {t('close-modal')}
          </Button>
        </div>
      </section>
    </div>
  ) : (
    ""
  );
};

export default PortfolioModal;
