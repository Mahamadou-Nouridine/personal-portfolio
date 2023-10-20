import React from "react";
import { Button, Image } from "react-bootstrap";
import { urlGenerator } from "../../../data/testimonials";
import { BiLinkExternal } from "react-icons/bi";

const TestimonialModal = ({ show, handleClose, selected }) => {
  return selected ? (
    <div
      className={`modal-container ${show ? "active" : ""}`}
      data-modal-container
    >
      <div className={`overlay ${show ? "active" : ""}`} data-overlay></div>

      <section className="testimonials-modal">
        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <Image
              src={urlGenerator(selected.author)}
              alt={selected.author}
              width="80"
              data-modal-img
            />
          </figure>

          <Image src="./assets/images/icon-quote.svg" alt="quote icon" />
        </div>

        <div className="modal-content">
          <h4 className="h3 modal-title" data-modal-title>
            {selected.author}
          </h4>

          <time dateTime="2021-06-14">{selected.date}</time>
          <div className="info-content">
            <Button
              href={selected.link}
              target="_blank"
              className="title m-0 mb-2 bg-primary"
            >
              {" "}
              View on{" "}
              {selected.source[0].toUpperCase() + selected.source.slice(1)}
              <BiLinkExternal size={15} className="ms-2" />
            </Button>
          </div>

          <div data-modal-text>
            <p>{selected.text}</p>
          </div>
          <Button
            onClick={handleClose}
            style={{
              width: 70,
              right: 10,
              bottom: 5,
              backgroundColor: "grey",
              alignSelf: "end",
            }}
            className="text-white"
            variant=""
            data-modal-close-btn
          >
            Close
          </Button>
        </div>
      </section>
    </div>
  ) : (
    ""
  );
};

export default TestimonialModal;
