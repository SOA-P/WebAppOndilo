import React from "react";
import "./Diagramme.css";
import diagramme from "../../assets/vite.config.png";
import TitreProject from "./TitreProject";
import { Download, Edit } from "react-feather";

export default function Diagramme() {
  return (
    <div className="img-diag-container">
      <h6 className="template">Illustration Template </h6>
      <img src={diagramme} alt="" />
      <i className="Down">
        <Download />
      </i>
      <i className="Edit">
        <Edit />
      </i>
      <TitreProject />
      <h5 className="cartoon-txt"> Cartoon Illustration</h5>
      <h6 className="cartoon-h6">Modern storytelling</h6>
      <h5 className="Abstract-txt">Abstract Pattern</h5>
      <h6 className="Abstract-h6"> Geometric Shapes</h6>
      <div className="cartoon" />
      <div className="pattern" />
    </div>
  );
}
