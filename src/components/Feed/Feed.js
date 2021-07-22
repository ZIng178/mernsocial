import React, { useState, useEffect } from "react";
import Share from "../share/Share";
import Post from "../Post/Post";
import axios from "axios";
import "./Feed.css";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("/posts/timeline/60f5bf839250a411683ecb0b");
      console.log("response feed", response);
      setPosts(response.data);
    };
    fetchPosts(username);
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
