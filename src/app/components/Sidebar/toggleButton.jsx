"use client";

import React, { useState } from "react";

const ToggleButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="info_more-btn"
      data-sidebar-btn
    >
      <span>Show Contacts</span>
      <ion-icon name="chevron-down"></ion-icon>
    </button>
  );
};

export default ToggleButton;
