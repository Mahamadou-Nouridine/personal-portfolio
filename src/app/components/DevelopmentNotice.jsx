"use client";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

const DevelopmentNotice = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    setShow(true);
  }, []);
  return (
    <div
      className={`modal-container ${show ? "active" : ""}`}
      data-modal-container
    >
      <div className={`overlay ${show ? "active" : ""}`} data-overlay></div>

      <section className="testimonials-modal">
        <button
          onClick={() => {
            setShow(false);
            document.body.style.overflow = "unset";
          }}
          className="modal-close-btn"
          data-modal-close-btn
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <Image
              src="./assets/images/svg-icons/alert.svg"
              alt="Development notice"
              width="80"
              data-modal-img
            />
          </figure>
        </div>

        <div className="modal-content">
          <div data-modal-text>
            <p>
              This Website is under construction, some features may not work properly. Consider living me an email{" "}
              <a
                className="d-inline"
                href="mailto:mahamadounouridinem@gmail.com"
              >
                mahamadounouridinem@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentNotice;
