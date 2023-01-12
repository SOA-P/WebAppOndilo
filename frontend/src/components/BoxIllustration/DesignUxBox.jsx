import React from "react";
import telechargement from "../../assets/téléchargement.png";
import "./DesignUxBox.css";

export default function DesignUxBox() {
  return (
    <div>
      <div className="box-Ux-container">
        <img src={telechargement} alt="" />
        <div className="img-profile-ux" />
        <h3 className="h3-ui">UI Design</h3>
        <h4 className="h4-ui">5:00 PM - 6:00 PM</h4>
      </div>
    </div>
  );
}
