import React from "react";
import Titre from "./DayMeeting/Titre";
import "./Meeting.css";
import Mon from "./DayMeeting/Mon";
import Tue from "./DayMeeting/Tue";
import Wed from "./DayMeeting/Wed";
import Thu from "./DayMeeting/Thu";
import Frid from "./DayMeeting/Frid";

function Meeting() {
  return (
    <div>
      <div>
        <Titre />
      </div>
      <div className="box-container">
        <Mon />
        <Tue />
        <Wed />
        <Thu />
        <Frid />
      </div>
    </div>
  );
}

export default Meeting;
