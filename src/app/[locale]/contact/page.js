import React from "react";
// import Nothing from "./SendButton.jsx";
import FormSection from "./components/FormSection";

export const metadata = {
  title: "Nouridine | Contact",
};

const Contact = () => {
  return (
    <article className="contact" data-page="contact">

      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d242.7432521493664!2d2.27627186835109!3d13.232091633893722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11d0170febd4fb01%3A0x82f4b27e584aec05!2sCodeloccol!5e0!3m2!1sen!2sne!4v1697405892944!5m2!1sen!2sne"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>

      <FormSection />
    </article>
  );
};

export default Contact;
