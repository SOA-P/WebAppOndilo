import React from "react";
import { Download } from "react-feather";
import "./Files.css";
import figma from "@assets/figma.png";
import TitleFiles from "./TitleFiles";

export default function Files() {
  return (
    <div>
      <TitleFiles />
      <div className="files-box">
        <img src={figma} alt="" />
        <div className="icon-container" />
        <div>
          <h3 className="h3-file1">User flow.fig</h3>
          <h4 className="h4-file1"> Aug 5,2021 at 9:50 AM</h4>
        </div>
      </div>
      <span className="KB">0.6KB</span>
      <i className="icones">
        <Download />
      </i>
    </div>
  );
}
