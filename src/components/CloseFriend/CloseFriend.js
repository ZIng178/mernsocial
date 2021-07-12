import React from "react";
import "./CloseFriend.css";

const closeFriend = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <li className="sidebarFriend">
        <img
          className="sidebarFriendImg"
          src={PF + user.profilePicture}
          alt=" Jane "
        />
        <span className="sidebarFriendName">{user.username} </span>
      </li>
    </div>
  );
};

export default closeFriend;
