import React from "react";
import { Download } from "react-feather";
import figma from "@assets/figma.png";
import "./Files2.css";

export default function Files2() {
  return (
    <div>
      <div className="files-box-2">
        <img src={figma} alt="" />
        <div className="icon-container-2" />
        <div>
          <h3 className="h3-file-2">Design systeme.fig</h3>
          <h4 className="h4-file-2">Aug 5, 2021 at 9:20 AM</h4>
        </div>
      </div>
      <span className="KB-2">0.8 KB</span>
      <i className="icones-2">
        <Download />
      </i>
    </div>
  );
}
