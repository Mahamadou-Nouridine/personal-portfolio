"use client";
import React from "react";
import { Button } from "react-bootstrap";
import ImageCaroussel from "./ImageCaroussel";
import { BiCodeAlt, BiLinkExternal } from "react-icons/bi";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

const PortfolioModal = ({ show, handleClose, project }) => {
  const t = useTranslations("portfolio-page");

  if (!project) return null;

  return (
    <AnimatePresence>
      {show && (
        <div className="custom-modal-wrapper">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="custom-modal-overlay"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="custom-modal-content"
          >
            <button className="custom-modal-close" onClick={handleClose}>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="custom-modal-scroll-area">
              <figure className="custom-modal-img-box">
                <ImageCaroussel images={project.images} />
              </figure>

              <div className="custom-modal-details">
                <h3 className="h3 custom-modal-title">{project.name}</h3>
                <time className="custom-modal-date">{project.date}</time>

                <div className="tech-stack-container">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="custom-modal-description">
                  <p>{project.description}</p>
                </div>

                <div className="custom-modal-actions">
                  <span className="w-100">
                    <Button 
                      disabled={!project.demo.public} 
                      variant="neutral"
                      className="w-100"
                    >
                      <a
                        href={project.demo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center justify-content-center gap-2"
                      >
                        <span>{t('demo')}</span>
                        <BiLinkExternal />
                      </a>
                    </Button>
                  </span>
                  <span className="w-100">
                    <Button 
                      disabled={!project.sourceCode.public} 
                      variant="neutral"
                      className="w-100"
                    >
                      <a
                        href={project.sourceCode.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center justify-content-center gap-2"
                      >
                        <span>{t('source-code')}</span>
                        <BiCodeAlt />
                      </a>
                    </Button>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PortfolioModal;
