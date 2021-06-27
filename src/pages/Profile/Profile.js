import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import "./Profile.css";
import postone from "../../assests/posts/postone.jpeg";
import asiangirl from "../../assests/persons/asiangirl.jpeg";

const Profile = () => {
  return (
    <>
      <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={postone} alt="postone" />
              <img className="profileUserImg" src={asiangirl} alt="asiangirl" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName"> Asian Girl </h4>
              <span className="profileInfoDesc"> Hello My friends </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
