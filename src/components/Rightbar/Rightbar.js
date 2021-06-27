import React from "react";
import "./Rightbar.css";
import gift from "../../assests/posts/gift.png";
import ad from "../../assests/posts/ad.jpg";

import { Users } from "../../dummydata";
import Online from "../Online/Online";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src={gift} alt=" birthday" />
          <span className="birthdayText">
            <b> Leksang Dhunden</b> and <b> 3 other friends </b> have a birthday
            today.
          </span>
        </div>
        <img className="rightbarAd" src={ad} alt="ad" />
        <h4 className="rightbarTitle"> Online Friends </h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
