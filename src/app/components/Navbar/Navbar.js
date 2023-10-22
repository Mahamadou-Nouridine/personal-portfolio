import React from "react";
import LinkTo from "./LinkTo"
import styles from './styles/navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles["navbar-list"]}>
        <li className={styles["navbar-item"]}>
          <LinkTo route="/" name="About" />
        </li>

        <li className="navbar-item">
          <LinkTo route="/resume" name="Resume" />
        </li>

        <li className="navbar-item">
          <LinkTo route="/portfolio" name="Portfolio" />
        </li>

        <li className="navbar-item">
          <LinkTo route="/blog" name="Blog" />
        </li>

        <li className="navbar-item">
          <LinkTo route="/contact" name="Contact" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
