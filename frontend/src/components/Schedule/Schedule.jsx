import NavBar from "@components/NavBar/NavBar";
import React from "react";
import "./Schedule.css";
import { Link } from "react-router-dom";

export default function Schedule() {
  return (
    <div className="schedule-container">
      <Link to="./">
        <h1 className="Title">Schedule</h1>
      </Link>
      <select className="select-title">
        <option className="select-style" value="Aug,5 2021">
          Aug , 5 2021
        </option>
      </select>

      <NavBar />
    </div>
  );
}
