import React from "react";
import "./styles/titre.css";

export default function Titre() {
  return (
    <div className="container-meet">
      <h1 className="title">Meeting</h1>
      <select className="select-1">
        <option className="option-1" value="Aug,5 2021">
          Aug 3, 2021 - Aug 7, 2021
        </option>
      </select>
    </div>
  );
}
