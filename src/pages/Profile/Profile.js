import React, { useState, useEffect } from "react";
import TopBar from "../../components/TopBar/TopBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import axios from "axios";
import "./Profile.css";
import { useParams } from "react-router";

const Profile = () => {
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const username = useParams().username;
  console.log("username", username);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users/username=${username}`);
      setUser(response.data);
    };
    fetchUser();
  }, [username]);

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
                src={user.coverPicture || PF + "persons/cover.png"}
                alt="postone"
              />
              <img
                className="profileUserImg"
                src={user.profilePicture || PF + "persons/avatar.png"}
                alt="asiangirl"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName"> {user.username} </h4>
              <span className="profileInfoDesc"> {user.desc} </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
