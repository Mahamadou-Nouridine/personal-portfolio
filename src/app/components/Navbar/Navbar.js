import React from "react";
import LinkTo from "./LinkTo"
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <LinkTo route="/" name="About" />
        </li>

        <li className="navbar-item">
          <LinkTo route="/resume" name="Resume" />
        </li>

        <li className="navbar-item">
          <LinkTo route="/portfolio" name="Portfolio" />
        </li>

        {/* <li className="navbar-item">
          <LinkTo route="/blog" name="Blog" />
        </li> */}

        <li className="navbar-item">
          <LinkTo route="/contact" name="Contact" />
        </li>
        <li className="navbar-item">
          <LanguageToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
