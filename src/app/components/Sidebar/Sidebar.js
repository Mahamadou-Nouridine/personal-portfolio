"use client";

import React, { useState } from "react";
import { Image } from "react-bootstrap";

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  return (
    <aside className={`sidebar ${open ?"active":""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src="./assets/images/my-avatar.png"
            alt="Richard hanrick"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Mahamadou Nouridine
          </h1>

          <p className="title">Full-stack developer</p>
        </div>

        <button onClick={() => setOpen(!open)} className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
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

              <a href="mailto:mahamadounouridinem@gmail.com" className="contact-link">
              mahamadounouridinem@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

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
              <p className="contact-title">Birthday</p>

              <time dateTime="1982-06-23">December 28</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Niamey, Niger</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list p-0">
          <li className="social-item">
            <a href="https://github.com/Mahamadou-Nouridine" target="_blank" className="social-link">
            <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.linkedin.com/in/mahamadou-nouridine" target="_blank" className="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://twitter.com/Nouridine_Dino" target="_blank" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://wellfound.com/u/mahamadou-nouridine" target="_blank" className="social-link">
              <i className="fa-brands fa-angellist"></i>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
