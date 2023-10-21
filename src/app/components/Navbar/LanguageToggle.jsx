"use client";

import { Image } from "react-bootstrap";
import "./style/toggle.css";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../globalRedux/features/language";

const LanguageToggle = () => {
  const lang = useSelector((state) => state.language);
  const dispatch = useDispatch();
  return (
    <>
      <div className="switch-container">
        <input
          onChange={(e) => {
            localStorage.setItem("lang", e.target.checked ? "fr" : "en");
            dispatch(changeLanguage(e.target.checked ? "fr" : "en"));
          }}
          checked={lang == "fr"}
          className="switch-input"
          type="checkbox"
        />
        <div className="switch-button">
          <div className="switch-button-inside">
            <Image
              width={20}
              height={20}
              src="./assets/images/usa-flag.png"
              alt="tt"
            />
            <Image
              style={{
                marginLeft: -10,
              }}
              className="checked-img"
              width={20}
              height={20}
              src="./assets/images/france-flag.png"
              alt="tt"
            />
            {/* <span>EN</span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageToggle;
