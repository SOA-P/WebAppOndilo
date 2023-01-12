import React from "react";
import "./styles/mon.css";

export default function Mon() {
  return (
    <div className="main-content">
      <div className="container">
        <p>
          Mon
          <span>3</span>
        </p>
        <ul className="time-container">
          <li>9:00 AM</li>
          <li>2:00 PM</li>
          <li>4:00 PM</li>
        </ul>
      </div>
    </div>
  );
}
