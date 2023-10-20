"use client";

import React, { useState } from "react";
import Testimonial from "./Testimonial";
import TestimonialModal from "./TestimonialModal";
import testimonials from "@/data/testimonials.js";

const TestimonialSection = () => {
  const [show, setShow] = useState(false);
  const [selected, select] = useState(null);
  const handleClose = () => {
    document.body.style.overflow = "unset";
    setShow(false);
  };
  const handleShow = (testimonial) => {
    select(testimonial);
    document.body.style.overflow = "hidden";
    setShow(true);
  };
  return (
    <>
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials/Recommendations</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              testimonial={testimonial}
              handleShow={handleShow}
              key={index}
            />
          ))}
        </ul>
      </section>

      {/*
  <!--
    - testimonials modal
  --> */}

      <TestimonialModal
        show={show}
        handleClose={handleClose}
        selected={selected}
      />
    </>
  );
};

export default TestimonialSection;
