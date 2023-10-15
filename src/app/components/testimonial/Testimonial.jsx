// import Image from "next/image";
import { urlGenerator } from "@/data/testimonials";
import React from "react";
import { Image } from "react-bootstrap";

const Testimonial = ({ handleShow, testimonial }) => {
  return (
    <li className="testimonials-item" onClick={() => handleShow(testimonial)}>
      <div className="content-card" data-testimonials-item>
        <figure className="testimonials-avatar-box">
          <Image
            src={urlGenerator(testimonial.author)}
            alt={testimonial.author}
            width={1000}
            height={1000}
            className="nextimg"
            data-testimonials-avatar
          />
        </figure>

        <h4 className="h4 testimonials-item-title" data-testimonials-title>
          {testimonial.author}
        </h4>

        <div className="info-content">
          <p className="title m-0 bg-primary"> From {testimonial.source[0].toUpperCase() + testimonial.source.slice(1)}</p>
        </div>

        <div className="testimonials-text" data-testimonials-text>
          <p>{testimonial.text}</p>
        </div>
      </div>
    </li>
  );
};

export default Testimonial;
