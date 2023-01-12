import React from "react";
import Layer from "../../assets/layer.png";
import "./DesignBox.css";

export default function DesignBox() {
  return (
    <div>
      <div className="container-box">
        <img src={Layer} alt="" />
        <div className="img-profile" />
        <h3 className="h3-ux">UX Design</h3>
        <h4 className="h4-ux">4:00 PM - 5:00 PM</h4>
      </div>
    </div>
  );
}
