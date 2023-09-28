import Image from "next/image";
import React from "react";

const Testimonial = ({ handleShow }) => {
  return (
    <li class="testimonials-item" onClick={handleShow}>
      <div class="content-card" data-testimonials-item>
        <figure class="testimonials-avatar-box">
          <Image
            src="/assets/images/avatar-1.png"
            alt="Daniel lewis"
            width={1000}
            height={1000}
            className="nextimg"
            data-testimonials-avatar
          />
        </figure>

        <h4 class="h4 testimonials-item-title" data-testimonials-title>
          Daniel lewis
        </h4>

        <div class="testimonials-text" data-testimonials-text>
          <p>
            I wanted to take a moment to express my sincere appreciation for the
            incredible work that you have done in designing our new home. From
            the moment we first met, it was clear that you had a true passion
            for architecture and an unwavering commitment to creating spaces
            that are both beautiful and functional.
          </p>
        </div>
      </div>
    </li>
  );
};

export default Testimonial;
