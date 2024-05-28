import React from "react";
import LinkTo from "./LinkTo";
import styles from "./styles/navbar.module.css";
import LanguageDropdown from "./components/LanguageDropdown";
import { useTranslations, NextIntlClientProvider } from "next-intl";
import Link from "next/link";

interface props {
  local: string;
}

const Navbar: React.FC<props> = ({ local }) => {
  const t = useTranslations("navbar");

  return (
    <nav className={styles.navbar}>
      <ul className={styles["navbar-list"]}>
        <LinkTo local={local} route={"/" + local + "/"} name={t("about")} />

        <LinkTo
          local={local}
          route={"/" + local + "/resume"}
          name={t("resume")}
        />

        <LinkTo
          local={local}
          route={"/" + local + "/portfolio"}
          name={t("portfolio")}
        />

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
