import React from "react";
import "./UserProfile.css";

import femme from "../../assets/femme.png";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="profile">
      <Link to="../UserProfile/UserProfile">
        {" "}
        <img src={femme} alt="" />
      </Link>
    </div>
  );
};

export default UserProfile;
