import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-container">
      <ul className="nav-selector">
        <Link to="/Recent">Recent Added</Link>
        <Link to="/Progress">In Progress</Link>
        <Link to="Review">In Review</Link>
        <Link to="Completed">Completed</Link>
      </ul>
    </div>
  );
}
