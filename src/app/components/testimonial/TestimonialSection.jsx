"use client";

import React, { useState } from "react";
import Testimonial from "./Testimonial";
import TestimonialModal from "./TestimonialModal";
import testimonials from "@/data/testimonials.js";
import staticData from "@/data/staticData.json";
import { useSelector } from "react-redux";

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
  const lang = useSelector((state) => state.language);
  return (
    <>
      {/* <!--
    - testimonials
  --> */}

      <section className="testimonials">
        <h3 className="h3 testimonials-title">{staticData[lang].about.testimonialSection}</h3>

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
