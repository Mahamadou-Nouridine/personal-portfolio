import React from "react";
// import Nothing from "./SendButton.jsx";
import FormSection from "./components/FormSection";

export const metadata = {
  title: "Nouridine | Contact",
};

import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("sidebar");
  return (
    <article className="contact" data-page="contact">

      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="contact-info-boxes">
        <ul className="contact-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">{t("email") || "Email"}</p>
              <a href="mailto:contact@nouridine.com" className="contact-link">
                contact@nouridine.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              {/* @ts-ignore */}
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">{t("location")}</p>
              <address>Niamey, Niger</address>
            </div>
          </li>
        </ul>
      </section>

      <FormSection />
    </article>
  );
};

export default Contact;
