import React from "react";
import "./Online.css";

const Online = ({ user }) => {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImageContainer">
        <img className="rightbarProfileImage" src={user.profilePic} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername"> {user.username}</span>
    </li>
  );
};

export default Online;
