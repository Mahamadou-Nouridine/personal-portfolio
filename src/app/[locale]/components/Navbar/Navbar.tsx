import React from "react";
import LinkTo from "./LinkTo";
import styles from "./styles/navbar.module.css";
import LanguageDropdown from "./components/LanguageDropdown";
import {useTranslations} from 'next-intl';

interface props {
  local: string;
}

const Navbar: React.FC<props> = ({ local }) => {

  return (
    <nav className={styles.navbar}>
      <ul className={styles["navbar-list"]}>
        <LinkTo local={local} route={"/" + local + "/"} name="About" />

        <LinkTo local={local} route={"/" + local + "/resume"} name="Resume" />

        <LinkTo local={local} route={"/" + local + "/portfolio"} name="Portfolio" />

        <LinkTo local={local} route={"/" + local + "/blog"} name="Blog" />

        <LinkTo local={local} route={"/" + local + "/contact"} name="Contact" />
        <li className={styles["navbar-item"]}>
          <LanguageDropdown />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
