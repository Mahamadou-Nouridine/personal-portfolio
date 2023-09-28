"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const colorizeActiveLink = (path) =>
    pathname === path ? "navbar-link active" : "navbar-link";
  return (
    <nav class="navbar">
      <ul class="navbar-list">
        <li class="navbar-item">
          <Link href="/" class={colorizeActiveLink("/")} data-nav-link>
            About
          </Link>
        </li>

        <li class="navbar-item">
          <Link
            href="/resume"
            class={colorizeActiveLink("/resume")}
            data-nav-link
          >
            Resume
          </Link>
        </li>

        <li class="navbar-item">
          <Link
            href="/portfolio"
            class={colorizeActiveLink("/portfolio")}
            data-nav-link
          >
            Portfolio
          </Link>
        </li>

        <li class="navbar-item">
          <Link href="/blog" class={colorizeActiveLink("/blog")} data-nav-link>
            Blog
          </Link>
        </li>

        <li class="navbar-item">
          <Link
            href="/contact"
            class={colorizeActiveLink("/contact")}
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
