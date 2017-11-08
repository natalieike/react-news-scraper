import React from "react";
import { Link } from "react-router-dom";

const Navpills = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/search" ? "active" : ""}>
      <Link to="/search">Search</Link>
    </li>
    <li className={window.location.pathname === "/comment" ? "active" : ""}>
      <Link to="/comment">Comment</Link>
    </li>
  </ul>;

export default Navpills;