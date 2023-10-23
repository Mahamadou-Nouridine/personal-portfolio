import React from "react";
import LinkTo from "./LinkTo";
import LanguageToggle from "./LanguageToggle";
import styles from "./styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles["navbar-list"]}>
        <LinkTo route="/" name="About" />

        <LinkTo route="/resume" name="Resume" />

        <LinkTo route="/portfolio" name="Portfolio" />

        <LinkTo route="/contact" name="Contact" />

        <li className="navbar-item">
          <LanguageToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
