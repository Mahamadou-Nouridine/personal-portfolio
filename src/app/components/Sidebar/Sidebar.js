"use client";

import React, { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  return (
    <aside class={`sidebar ${open ?"active":""}`} data-sidebar>
      <div class="sidebar-info">
        <figure class="avatar-box">
          <img
            src="./assets/images/my-avatar.png"
            alt="Richard hanrick"
            width="80"
          />
        </figure>

        <div class="info-content">
          <h1 class="name" title="Richard hanrick">
            Mahamadou Nouridine
          </h1>

          <p class="title">Full-stack developer</p>
        </div>

        <button onClick={() => setOpen(!open)} class="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div class="sidebar-info_more">
        <div class="separator"></div>

        <ul class="contacts-list">
          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Email</p>

              <a href="mailto:mahamadounouridinem@gmail.com" class="contact-link">
              mahamadounouridinem@gmail.com
              </a>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Phone</p>

              <a href="tel:+22788103073" class="contact-link">
                +(227) 88103073
              </a>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Birthday</p>

              <time datetime="1982-06-23">December 28</time>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Location</p>

              <address>Niamey, Niger</address>
            </div>
          </li>
        </ul>

        <div class="separator"></div>

        <ul class="social-list">
          <li class="social-item">
            <a href="https://github.com/Mahamadou-Nouridine" target="_blank" class="social-link">
            <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li class="social-item">
            <a href="https://www.linkedin.com/in/mahamadou-nouridine" target="_blank" class="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li class="social-item">
            <a href="https://twitter.com/Nouridine_Dino" target="_blank" class="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li class="social-item">
            <a href="https://wellfound.com/u/mahamadou-nouridine" target="_blank" class="social-link">
              <i class="fa-brands fa-angellist"></i>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
