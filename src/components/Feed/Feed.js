import React, { useState, useEffect, useContext } from "react";
import Share from "../share/Share";
import Post from "../Post/Post";
import axios from "axios";
import "./Feed.css";
import { AuthContext } from "../../Context/AuthContext";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("/posts/timeline/" + user._id);
      console.log("response feed", response);
      setPosts(response.data);
    };
    fetchPosts(username);
  }, [username, user._id]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}

        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
