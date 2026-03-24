"use client";

import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  
  const changeOpen = (status: boolean) => {
    localStorage.setItem("show-contact-status", JSON.stringify(status));
    setOpen(status);
  };

  useEffect(() => {
    let storedStatus: string;
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1250) {
        storedStatus = "false";
      } else {
        storedStatus = localStorage.getItem("show-contact-status") || "true";
      }
      setOpen(JSON.parse(storedStatus));
    }
  }, []);

  const t = useTranslations("sidebar");
  const tResume = useTranslations("resume-page");
  const tCV = useTranslations("resume");
  
  return (
    <aside className={`sidebar ${open ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src="/assets/images/my-avatar.jpg"
            alt="Nouridine avatar"
            width={150}
            height={150}
            priority
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Nouridine">
            Mahamadou Nouridine
          </h1>

          <div className="status">
            <span className="status-blink"></span>
            <span>{t("work-status")}</span>
          </div>
          <p className="title">{t("role")}</p>
        </div>

        <button
          onClick={() => changeOpen(!open)}
          className="info_more-btn"
          data-sidebar-btn
          aria-expanded={open}
          aria-label={open ? t("hide-contact") : t("show-contact")}
        >
          {open ? (
            <span>{t("hide-contact")}</span>
          ) : (
            <span>{t("show-contact")}</span>
          )}
          {open ? (
            // @ts-ignore
            <ion-icon name="chevron-up"></ion-icon>
          ) : (
            // @ts-ignore
            <ion-icon name="chevron-down"></ion-icon>
          )}
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list p-0">
          <li className="contact-item">
            <div className="icon-box">
              {/* @ts-ignore */}
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a
                href="mailto:contact@nouridine.com"
                className="contact-link"
              >
                contact@nouridine.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              {/* @ts-ignore */}
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">{t("birthday")}</p>

              <time dateTime="1982-06-23">December 28</time>
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

        <div className="separator"></div>

        <ul className="social-list p-0">
          <li className="social-item">
            <a
              href="https://github.com/Mahamadou-Nouridine"
              target="_blank"
              className="social-link"
              aria-label="GitHub"
              rel="noopener noreferrer"
            >
              {/* @ts-ignore */}
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/mahamadou-nouridine"
              target="_blank"
              className="social-link"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
            >
              {/* @ts-ignore */}
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://twitter.com/Nouridine_Dino"
              target="_blank"
              className="social-link"
              aria-label="Twitter"
              rel="noopener noreferrer"
            >
              {/* @ts-ignore */}
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://wellfound.com/u/mahamadou-nouridine"
              target="_blank"
              className="social-link"
              aria-label="Wellfound"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-angellist"></i>
            </a>
          </li>
        </ul>

        <div className="separator"></div>
        
        <div className="sidebar-cv-box">
          <a 
            target="_blank" 
            href={"/assets/" + tCV('name')}
            className="cv-btn"
            rel="noopener noreferrer"
          >
            {/* @ts-ignore */}
            <ion-icon name="download-outline"></ion-icon>
            <span>{tResume('download-cv')}</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
