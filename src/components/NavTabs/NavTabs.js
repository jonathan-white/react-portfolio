import React from "react";
import { NavLink } from "react-router-dom";
import './NavTabs.css';

const NavTabs = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <NavLink
        to="/about"
        activeClassName="active"
        className="nav-link"
      >
        About Me
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        to="/my-work"
        activeClassName="active"
        className="nav-link"
      >
        Portfolio
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        to="/contact"
        activeClassName="active"
        className="nav-link"
      >
        Hire Me
      </NavLink>
    </li>
  </ul>
);

export default NavTabs;
