import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import {
  User,
  Calendar,
  BarChart2,
  MessageCircle,
  Settings,
  LogOut,
} from "react-feather";
import CarréOrange from "../../assets/CarréOrange.png";
import CarréBlanc from "../../assets/CarréBlanc.png";

export default function SideBar() {
  return (
    <div className="side-container">
      <Link to="./">
        <img className="Orange" src={CarréOrange} alt="CarréOrangeLogo" />
        <img className="White" src={CarréBlanc} alt="CarréBlancLogo" />
      </Link>

      <ul className="side-link">
        <li>
          <Link to="/Profile">
            <User className="Icn" />
            Profile
          </Link>
        </li>
        <li>
          <Link to="/Schedule">
            <Calendar className="Icn-1" />
            Schedule
          </Link>
        </li>
        <li>
          <Link to="/Overwiew">
            <BarChart2 className="Icn-2" />
            Overwiew
          </Link>
        </li>
        <li>
          <Link to="/Chat">
            <MessageCircle className="Icn-3" />
            Chat
          </Link>
        </li>
        <li>
          <Link to="/Settings">
            <Settings className="Icn-4" />
            Settings
          </Link>
        </li>
      </ul>
      <ul className="Lo-gout">
        <li className="Logout">
          <Link to="/Logout">
            <LogOut className="Icn-5" />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}
