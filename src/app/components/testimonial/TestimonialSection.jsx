"use client";

import React, { useState } from "react";
import Testimonial from "./Testimonial";
import { Image } from "react-bootstrap";

const TestimonialSection = () => {
  const testimonials = new Array(4).fill(1);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    document.body.style.overflow = "unset";
    setShow(false);
  };
  const handleShow = () => {
    document.body.style.overflow = "hidden";
    setShow(true);
  };
  return (
    <>
      {/* <!--
    - testimonials
  --> */}

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Testimonial handleShow={handleShow} key={index} />
          ))}
        </ul>
      </section>

      {/*
  <!--
    - testimonials modal
  --> */}

      <div
        className={`modal-container ${show ? "active" : ""}`}
        data-modal-container
      >
        <div className={`overlay ${show ? "active" : ""}`} data-overlay></div>

        <section className="testimonials-modal">
          <button onClick={handleClose} className="modal-close-btn" data-modal-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <Image
                src="./assets/images/avatar-1.png"
                alt="Daniel lewis"
                width="80"
                data-modal-img
              />
            </figure>

            <Image src="./assets/images/icon-quote.svg" alt="quote icon" />
          </div>

          <div className="modal-content">
            <h4 className="h3 modal-title" data-modal-title>
              Daniel lewis
            </h4>

            <time dateTime="2021-06-14">14 June, 2021</time>

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
    </>
  );
};

export default TestimonialSection;
