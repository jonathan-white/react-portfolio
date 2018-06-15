import React from "react";
import { Link } from "react-router-dom";
import './NavTabs.css';

const NavTabs = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/about"
        className={
          window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"
        }
      >
        About
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/my-work"
        className={
          window.location.pathname === "/my-work" ? "nav-link active" : "nav-link"
        }
      >
        My Work
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/contact"
        className={
          window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
        }
      >
        Hire Me
      </Link>
    </li>
  </ul>
);

export default NavTabs;
