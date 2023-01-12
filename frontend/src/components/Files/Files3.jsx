import React from "react";
import { Download } from "react-feather";
import "./Files3.css";
import json from "@assets/fichier-json.png";

export default function Files3() {
  return (
    <div>
      <div className="files-box-3">
        <img src={json} alt="" />
        <div className="icon-container-3" />
        <div>
          <h3 className="h3-file3">Animation.json</h3>
          <h4 className="h4-file3">Aug 5, 2021 at 9/05 AM</h4>
        </div>
      </div>
      <span className="KB-3">18 KB</span>
      <i className="icones-3">
        <Download />
      </i>
    </div>
  );
}
