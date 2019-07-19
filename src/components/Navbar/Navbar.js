import React from "react";
import { Link } from "react-router-dom";

export const Navbar = props => {
  return (
    <nav>
      <h5>Logo</h5>
      <ul className="nav-links">
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Topics">Topics</Link>
        </li>
      </ul>
    </nav>
  );
};
