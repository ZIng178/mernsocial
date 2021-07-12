import "./share.css";

import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

import React from "react";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfilePicImg"
            src="assests/persons/green.jpeg"
            alt="person3"
          />
          <input
            placeholer="What's in your mind ? "
            className="shareInput"
          ></input>
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOption">
            <PermMedia htmlColor="tomato" className="shareIcon" />
            <span className="shareOptionText"> Photo/Video</span>
          </div>
          <div className="shareOption">
            <Label htmlColor="blue" className="shareIcon" />
            <span className="shareOptionText"> Tag</span>
          </div>
          <div className="shareOption">
            <Room htmlColor="green" className="shareIcon" />
            <span className="shareOptionText"> Location</span>
          </div>
          <div className="shareOption">
            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
            <span className="shareOptionText"> Feelings</span>
          </div>
          <button className="shareButton"> Share </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
