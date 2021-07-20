import React, { useState, useEffect } from "react";
import Share from "../share/Share";
import Post from "../Post/Post";
import axios from "axios";
import "./Feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "posts/timeline/60f4b863f1f5931bc40cfe99"
      );
      setPosts(response.data);
    };
    fetchPosts();
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
