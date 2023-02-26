import React from "react";
import { Link, NavLink } from "react-router-dom";

function SiteNav() {
  return (
    <nav className="nav-bar">
      <NavLink to={`/`} className="nav-link">Home</NavLink>
      <NavLink to={`/about`}>Contact</NavLink>
    </nav>
  );
}

export default SiteNav;
