"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import styles from "./styles/navbar.module.css";

const LinkTo = ({ route, name }) => {
  const pathname = usePathname();

  const colorizeActiveLink = (path) =>
    pathname === path
      ? `${styles["navbar-link"]} ${styles["active"]}`
      : styles["navbar-link"];
  return (
    <li className={styles["navbar-item"]}>
      <Link
        href={route}
        className={`${colorizeActiveLink(route)} ${
          name == "Portfolio" ? "notranslate" : ""
        }`}
        data-nav-link
      >
        {name}
      </Link>
    </li>
  );
};

export default LinkTo;
