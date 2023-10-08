"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const colorizeActiveLink = (path) =>
    pathname === path ? "navbar-link active" : "navbar-link";
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link href="/" className={colorizeActiveLink("/")} data-nav-link>
            About
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            href="/resume"
            className={colorizeActiveLink("/resume")}
            data-nav-link
          >
            Resume
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            href="/portfolio"
            className={colorizeActiveLink("/portfolio")}
            data-nav-link
          >
            Portfolio
          </Link>
        </li>

        <li className="navbar-item">
          <Link href="/blog" className={colorizeActiveLink("/blog")} data-nav-link>
            Blog
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            href="/contact"
            className={colorizeActiveLink("/contact")}
            data-nav-link
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
