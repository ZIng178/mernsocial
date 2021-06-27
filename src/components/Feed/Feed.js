import React from "react";
import Share from "../share/Share";
import Post from "../Post/Post";
import "./Feed.css";
import { Posts } from "../../dummydata";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
