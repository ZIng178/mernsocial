import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import "./Profile.css";

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF} persons/sh.jpeg`}
                alt="postone"
              />
              <img
                className="profileUserImg"
                src={`${PF} persons/asiangirl.jpeg`}
                alt="asiangirl"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName"> Asian Girl </h4>
              <span className="profileInfoDesc"> Hello My friends </span>
            </div>
          </div>
          <div className="">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
