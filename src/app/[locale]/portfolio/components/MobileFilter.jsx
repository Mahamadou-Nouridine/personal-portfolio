"use client";
import React, { useState } from "react";

const MobileFilter = ({ tags, selected, selectTag }) => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);
  const handleClose = (tag) => {
    selectTag(tag);
    setShow(false);
  };
  return (
    <div className="filter-select-box">
      <button
        onClick={toggle}
        className={`filter-select ${show ? "active" : ""}`}
        data-select
      >
        <div className="select-value notranslate" data-selecct-value>
          {!selected ? "Select Tag" : selected}
        </div>

        <div className="select-icon">
          <ion-icon name="chevron-down"></ion-icon>
        </div>
      </button>

      <ul
        className="select-list  has-scrollbar"
        style={{ maxHeight: 400, overflowY: "auto" }}
      >
        <li onClick={() => handleClose(null)} className="select-item">
          <button data-select-item>All</button>
        </li>
        {tags.map((tag, index) => (
          <li className="select-item" key={index}>
            <button
              style={
                selected == tag
                  ? {
                      backgroundColor: "hsl(240, 2%, 20%)",
                    }
                  : { backgroundColor: "unset " }
              }
              onClick={() => handleClose(tag)}
              data-select-item
              className="notranslate"
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileFilter;
