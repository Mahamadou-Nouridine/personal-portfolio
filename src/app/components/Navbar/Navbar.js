import React from "react";
import LinkTo from "./LinkTo";
import styles from "./styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles["navbar-list"]}>
        <LinkTo route="/" name="About" />

        <LinkTo route="/resume" name="Resume" />

        <LinkTo route="/portfolio" name="Portfolio" />

        <LinkTo route="/blog" name="Blog" />

        <LinkTo route="/contact" name="Contact" />
      </ul>
    </nav>
  );
};

export default Navbar;
