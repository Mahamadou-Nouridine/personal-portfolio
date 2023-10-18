import { Image } from "react-bootstrap";
import "./style/toggle.css";

import React from "react";

const LanguageToggle = () => {
  return (
    <>
      <div className="switch-container">
        <input className="switch-input" type="checkbox" />
        <div className="switch-button">
          <div className="switch-button-inside">
            <Image width={20} height={20} src="./assets/images/usa-flag.png" alt="tt" />
            <Image style={{
                marginLeft: -10
            }} classNameName="checked-img" width={20} height={20} src="./assets/images/france-flag.png" alt="tt" />
            {/* <span>EN</span> */}

          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageToggle;
