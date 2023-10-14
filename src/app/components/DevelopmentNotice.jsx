"use client";
import React, { useState } from "react";
import { Image } from "react-bootstrap";

const DevelopmentNotice = () => {
  const [show, setShow] = useState(true);
  return (
    <div
      className={`modal-container ${show ? "active" : ""}`}
      data-modal-container
    >
      <div className={`overlay ${show ? "active" : ""}`} data-overlay></div>

      <section className="testimonials-modal">
        <button
          onClick={() => setShow(false)}
          className="modal-close-btn"
          data-modal-close-btn
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <Image
              src="./assets/images/svg-icons/alert.svg"
              alt="Daniel lewis"
              width="80"
              data-modal-img
            />
          </figure>
        </div>

        <div className="modal-content">
          <div data-modal-text>
            <p>
              This Website is under construction, data/information may not be
              true. Consider living me an email via my email id{" "}
              <a className="d-inline" href="">
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
