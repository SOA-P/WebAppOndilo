import React from "react";
import "./illustrationBox.css";
import palette from "../../assets/palette.png";

export default function IllustrationBox() {
  return (
    <div className="illustration-box">
      <img src={palette} alt="" />
      <div className="icon-profil-container" />
      <div>
        <h3>Illustration Templates</h3>
        <h4>9:00 AM - 4:00 PM</h4>
      </div>
    </div>
  );
}
