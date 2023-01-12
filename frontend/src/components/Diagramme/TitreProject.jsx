import React from "react";
import "./Titre-Project.css";
import { MoreHorizontal } from "react-feather";

export default function TitreProject() {
  return (
    <div>
      <div className="Project-title-pro">
        <h3>Project Progress</h3>
        <i>
          <MoreHorizontal />
        </i>
      </div>
    </div>
  );
}
