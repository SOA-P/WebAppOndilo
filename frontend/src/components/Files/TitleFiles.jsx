import React from "react";
import { ArrowRight } from "react-feather";
import "./TitleFiles.css";

export default function TitleFiles() {
  return (
    <div>
      <h1 className="Files-Title">Files</h1>
      <h5 className="Files-txt">View All</h5>
      <i className="icon-title">
        <ArrowRight />
      </i>
    </div>
  );
}
