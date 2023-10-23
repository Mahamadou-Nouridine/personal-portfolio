"use client";

import React, { useState } from "react";
import { Image } from "react-bootstrap";
import staticData from "@/data/staticData.json";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const lang = useSelector((state) => state.language);
  const [open, setOpen] = useState(false)
  return (
    <aside className={`sidebar ${open ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src="./assets/images/my-avatar.png"
            alt="Nouridine"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Nouridine">
            Mahamadou Nouridine
          </h1>

          <p className="title">{staticData[lang].sidebar.function}</p>
        </div>

        <button onClick={() => setOpen(!open)} className="info_more-btn" data-sidebar-btn>
          <span>{staticData[lang].sidebar.showContacts}</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list p-0">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a
                href="mailto:mahamadounouridinem@gmail.com"
                className="contact-link"
              >
                mahamadounouridinem@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">{staticData[lang].sidebar.phone}</p>

              <a href="tel:+22788103073" className="contact-link">
                +(227) 88103073
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">{staticData[lang].sidebar.birthday}</p>

              <time dateTime="1982-06-23">December 28</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">{staticData[lang].sidebar.location}</p>

              <address>Niamey, Niger</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list p-0">
          <li className="social-item">
            <a
              href="https://github.com/Mahamadou-Nouridine"
              target="_blank"
              className="social-link"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/mahamadou-nouridine"
              target="_blank"
              className="social-link"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://twitter.com/Nouridine_Dino"
              target="_blank"
              className="social-link"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://wellfound.com/u/mahamadou-nouridine"
              target="_blank"
              className="social-link"
            >
              <i className="fa-brands fa-angellist"></i>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
