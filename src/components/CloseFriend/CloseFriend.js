import React from "react";
import "./CloseFriend.css";
import { user } from "../../dummydata";
import baldbaige from "../../assests/persons/baldbaige.jpeg";
const closeFriend = ({ user }) => {
  return (
    <div>
      <li className="sidebarFriend">
        <img className="sidebarFriendImg" src={baldbaige} alt=" Jane " />
        <span className="sidebarFriendName">{user.username} </span>
      </li>
    </div>
  );
};

export default closeFriend;
