import React from "react";
import "./TopBar.css";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo"> TibetSocial</span>
        </Link>
      </div>
      <div className="topbarCenter"></div>
      <div className="searchbar">
        <SearchIcon className="searchIcon" />
        <input placeholder="Search" className="searchInput" />
      </div>
      <div className="topbarRight">
        <div className="topBarLinks">
          <span className="topBarLink">HomePage</span>
          <span className="topBarLink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <PersonIcon />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <ChatIcon />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <NotificationsIcon />
            <span className="topBarIconBadge">1</span>
          </div>
        </div>
        <img
          src="assests/persons/sh.jpeg"
          className="topBarImage"
          alt="personImage"
        />
      </div>
    </div>
  );
};

export default TopBar;
